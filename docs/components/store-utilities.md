---
title: Store & Event Utilities (Internal)
order: 3
---

# Store & Event Utilities (Internal)

Store and Event modules are **internal** — not exported from the public API. Useful for testing or non-React code by importing directly from source files.

## Store Functions (`store.ts`)

```ts
// Import from source file (not public API)
import {
  getList,
  setList,
  addToList,
  removeAt,
  updateAt,
} from '@jswork/react-dynamic-list/store';
```

| Function    | Signature                                                           | Description                |
| ----------- | ------------------------------------------------------------------- | -------------------------- |
| `getList`   | `<T>(name: string) => T[]`                                          | Read list from store       |
| `setList`   | `(name: string, items: unknown[]) => void`                          | Replace list and notify    |
| `addToList` | `<T>(name: string, item: T) => void`                                | Append item and notify     |
| `removeAt`  | `(name: string, index: number) => void`                             | Remove at index and notify |
| `updateAt`  | `<T>(name: string, index: number, updater: (prev: T) => T) => void` | Update at index and notify |

## Event Functions (`event.ts`)

```ts
// Import from source file (not public API)
import { subscribe, emitChange } from '@jswork/react-dynamic-list/event';
```

| Function     | Signature                                                    | Description                    |
| ------------ | ------------------------------------------------------------ | ------------------------------ |
| `subscribe`  | `(name: string, listener: Listener) => () => void`           | Subscribe, returns unsubscribe |
| `emitChange` | `(name: string, action: ListAction, index?: number) => void` | Emit change event              |

## Usage Examples

### Testing

```ts
import { setList } from '@jswork/react-dynamic-list/store';

beforeEach(() => {
  // Reset store between tests
  setList('todos', []);
});
```

### Direct Store Access

```ts
import {
  getList,
  addToList,
  removeAt,
  updateAt,
} from '@jswork/react-dynamic-list/store';

// Read current list
const items = getList<Item>('todos');

// Append an item
addToList('todos', { id: '2', title: 'World', done: false });

// Remove at index
removeAt('todos', 0);

// Update at index
updateAt('todos', 0, (prev) => ({ ...prev, done: true }));
```

### Event Subscription

```ts
import { subscribe } from '@jswork/react-dynamic-list/event';

const unsubscribe = subscribe('todos', (event) => {
  console.log(event.action, event.data);
});

unsubscribe();
```

## Notes

- These modules are **internal** and not exported from the public API
- For app code, use `useCommand` or `<DynamicList>` instead
- Direct store calls bypass `min`/`max` constraints — those are only enforced at the hook level
- All store mutations automatically emit change events to notify subscribers
