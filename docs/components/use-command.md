---
title: useCommand
order: 2
---

# useCommand

Hook for imperative list access. Shares the same store as `<DynamicList>` by name.

```tsx
import { useCommand } from '@jswork/react-dynamic-list';
```

## Signature

```ts
function useCommand<T>(name: string, options?: ListOptions<T>): ListApi<T>;
```

## Options (`ListOptions<T>`)

| Field      | Type      | Required | Description                    |
| ---------- | --------- | -------- | ------------------------------ |
| `defaults` | `() => T` | Yes      | Factory function for new items |
| `min`      | `number`  | No       | Minimum list length            |
| `max`      | `number`  | No       | Maximum list length            |

## Return (`ListApi<T>`)

Returns `{ state, actions }` — state is reactive data, actions are imperative methods.

### `state`

| Field       | Type                     | Description                       |
| ----------- | ------------------------ | --------------------------------- |
| `list`      | `T[]`                    | Current list data                 |
| `change`    | `ChangeEvent<T> \| null` | Last change event                 |
| `canAdd`    | `boolean`                | `false` when list length >= `max` |
| `canRemove` | `boolean`                | `false` when list length <= `min` |

### `actions`

| Field    | Type                                               | Description                  |
| -------- | -------------------------------------------------- | ---------------------------- |
| `add`    | `() => void`                                       | Append item via `defaults()` |
| `remove` | `(index: number) => void`                          | Remove item at index         |
| `update` | `(index: number, updater: (prev: T) => T) => void` | Update item at index         |
| `reset`  | `(items: T[]) => void`                             | Replace entire list          |

## Example

```tsx
function MyControls() {
  const { state, actions } = useCommand<Item>('todos', {
    max: 5,
    defaults: () => ({ id: crypto.randomUUID(), title: '', done: false }),
  });
  const { list, canAdd, canRemove } = state;
  const { add, remove } = actions;

  return (
    <>
      <button disabled={!canAdd} onClick={add}>
        Add
      </button>
      <button disabled={!canRemove} onClick={() => remove(list.length - 1)}>
        Remove Last
      </button>
    </>
  );
}
```

## Notes

- Shares the same store as `<DynamicList>` when using the same `name`
- `defaults` is required — it is a factory function `() => T`, not a value
- `canAdd` / `canRemove` are derived from `min` / `max` constraints
