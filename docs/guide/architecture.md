---
title: Architecture
order: 1
---

# Architecture

## Overview

```
┌─────────────┐     ┌──────────┐     ┌──────────┐
│ DynamicList  │────▶│  Store   │◀────│ useList  │
│ (component)  │     │ (global) │     │ Context  │
└─────────────┘     └────┬─────┘     └──────────┘
                         │
                    ┌────▼─────┐
                    │  Event   │
                    │ (pub/sub)│
                    └──────────┘
```

## Core Modules

### Store (`store.ts`)

Module-scoped `Map<string, unknown[]>` holding list data outside the React tree. Provides direct access functions:

- `getList(name)` — Read list from store
- `setList(name, items)` — Replace list and notify
- `addToList(name, item)` — Append and notify
- `removeAt(name, index)` — Remove at index and notify
- `updateAt(name, index, updater)` — Update at index and notify

### Event (`event.ts`)

Name-keyed pub/sub system for reactive cross-component propagation:

- `subscribe(name, listener)` — Subscribe to changes, returns unsubscribe function
- `emitChange(name, action, index?)` — Emit a change event

### useListContext (`use-list-context.ts`)

React hook that bridges the store/events with React state via `useState`. Returns a `ListApi<T>` with:

- `list` / `change` — Current state
- `add` / `remove` / `update` / `reset` — Mutations
- `canAdd` / `canRemove` — Constraint flags

### DynamicList (`dynamic-list.tsx`)

Declarative wrapper combining `useListContext` + `@jswork/react-list` for slot-based rendering.

## Data Flow

1. A component calls `add()` / `remove()` / `update()` / `reset()` via hook or component
2. The mutation updates the **Store**
3. The **Event** system notifies all subscribers
4. All subscribed hooks/components re-render with new data
5. `onChange` callback fires with a `ChangeEvent`

## Types

```ts
type ListAction = 'add' | 'remove' | 'update' | 'reset';

interface ChangeEvent<T> {
  action: ListAction;
  data: T[]; // full list after mutation
  index?: number; // affected index (undefined for reset)
}
```

## Important Notes

- `ChangeEvent.data` contains the **full list after mutation**, not the delta
- `ChangeEvent.index` is `undefined` for `reset` actions
- The store is global and lives for the module's lifetime — call `setList(name, [])` in test `beforeEach` to reset
- `min`/`max` are soft constraints enforced at the hook level — direct store calls bypass them
- All components using the same `name` share the same list data and react to each other's mutations
