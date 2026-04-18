---
title: Architecture
order: 1
---

# Architecture

## Overview

```
┌─────────────┐     ┌──────────┐     ┌──────────┐
│ DynamicList  │────▶│  Store   │◀────│useCommand│
│ (component)  │     │(internal)│     │  (hook)  │
└─────────────┘     └────┬─────┘     └──────────┘
                         │
                    ┌────▼─────┐
                    │  Event   │
                    │(internal)│
                    └──────────┘
```

## Core Modules

### Store (`store.ts`) — Internal

Module-scoped `Map<string, unknown[]>` holding list data outside the React tree. Not exported from public API.

### Event (`event.ts`) — Internal

Name-keyed pub/sub for reactive cross-component propagation. Not exported from public API.

### useCommand (`use-command.ts`)

React hook that bridges the store/events with React state via `useState`. Returns `{ state, actions }`:

- **state**: `list`, `change`, `canAdd`, `canRemove` — reactive data
- **actions**: `add`, `remove`, `update`, `reset` — imperative methods

### DynamicList (`dynamic-list.tsx`)

Declarative wrapper combining `useCommand` + `@jswork/react-list` for slot-based rendering.

## Data Flow

1. A component calls `add()` / `remove()` / `update()` / `reset()` via hook or component
2. The mutation updates the **Store**
3. The **Event** system notifies all subscribers
4. All subscribed hooks/components re-render with new data
5. `onChange` callback fires with a `ChangeEvent`

## Types

```ts
type ListAction = 'add' | 'remove' | 'update' | 'set' | 'up' | 'down';

interface ChangeEvent<T> {
  action: ListAction;
  data: T[]; // full list after mutation
  index?: number; // affected index (undefined for set)
}

interface ListState<T> {
  list: T[];
  change: ChangeEvent<T> | null;
  canAdd: boolean;
  canRemove: boolean;
}

interface ListActions<T> {
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, updater: (prev: T) => T) => void;
  set: (items: T[]) => void;
  up: (index: number) => void;
  down: (index: number) => void;
}

interface ListApi<T> {
  state: ListState<T>;
  actions: ListActions<T>;
}
```

## Important Notes

- `ChangeEvent.data` contains the **full list after mutation**, not the delta
- `ChangeEvent.index` is `undefined` for `set` actions
- The store is global and lives for the module's lifetime — tests can import `setList` directly from `store.ts` to reset in `beforeEach`
- `min`/`max` are soft constraints enforced at the hook level — direct store calls bypass them
- All components using the same `name` share the same list data and react to each other's mutations
