---
title: Store & Event Utilities
order: 3
---

# Store & Event Utilities

Direct store and event access, useful for testing or non-React code.

## Store Functions

```ts
import {
  getList,
  setList,
  addToList,
  removeAt,
  updateAt,
} from '@jswork/react-dynamic-list';
```

| Function    | Signature                                                           | Description                |
| ----------- | ------------------------------------------------------------------- | -------------------------- |
| `getList`   | `<T>(name: string) => T[]`                                          | Read list from store       |
| `setList`   | `(name: string, items: unknown[]) => void`                          | Replace list and notify    |
| `addToList` | `<T>(name: string, item: T) => void`                                | Append item and notify     |
| `removeAt`  | `(name: string, index: number) => void`                             | Remove at index and notify |
| `updateAt`  | `<T>(name: string, index: number, updater: (prev: T) => T) => void` | Update at index and notify |

## Event Functions

```ts
import { subscribe, emitChange } from '@jswork/react-dynamic-list';
```

| Function     | Signature                                                    | Description                    |
| ------------ | ------------------------------------------------------------ | ------------------------------ |
| `subscribe`  | `(name: string, listener: Listener) => () => void`           | Subscribe, returns unsubscribe |
| `emitChange` | `(name: string, action: ListAction, index?: number) => void` | Emit change event              |

## Usage Examples

### Direct Store Access

```ts
// Read current list
const items = getList<Item>('todos');

// Set list (triggers re-render for all subscribers)
setList('todos', [{ id: '1', title: 'Hello', done: false }]);

// Append an item
addToList('todos', { id: '2', title: 'World', done: false });

// Remove at index
removeAt('todos', 0);

// Update at index
updateAt('todos', 0, (prev) => ({ ...prev, done: true }));
```

### Event Subscription

```ts
// Subscribe to changes
const unsubscribe = subscribe('todos', (event) => {
  console.log(event.action, event.data);
});

// Later, unsubscribe
unsubscribe();
```

### Testing

```ts
import { setList } from '@jswork/react-dynamic-list';

beforeEach(() => {
  // Reset store between tests
  setList('todos', []);
});
```

## Notes

- Direct store calls bypass `min`/`max` constraints — those are only enforced at the hook level
- The store is global and lives for the module's lifetime
- All store mutations automatically emit change events to notify subscribers
