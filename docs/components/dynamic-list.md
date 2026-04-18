---
title: DynamicList
order: 1
---

# DynamicList

The main declarative component. Wraps `@jswork/react-list` with dynamic list management, slot-based rendering, and shared state.

```tsx
import { DynamicList } from '@jswork/react-dynamic-list';
```

## Examples

### Basic Usage

<code src="./demos/basic.tsx">Basic list with add/remove</code>

### Todo List

<code src="./demos/todo-list.tsx">Todo list with inline editing</code>

### Constraints

<code src="./demos/constraints.tsx">min/max constraints</code>

## API

| Prop           | Type                                             | Required | Description                        |
| -------------- | ------------------------------------------------ | -------- | ---------------------------------- |
| `name`         | `string`                                         | Yes      | Unique key for the shared store    |
| `defaults`     | `() => T`                                        | Yes      | Factory function for new items     |
| `data`         | `T[]`                                            | No       | Initial data (syncs on change)     |
| `min`          | `number`                                         | No       | Minimum list length                |
| `max`          | `number`                                         | No       | Maximum list length                |
| `onChange`     | `(event: ChangeEvent<T>) => void`                | No       | Callback on every mutation         |
| `slots`        | `{ item: ComponentType; empty?: ComponentType }` | Yes      | Slot components for rendering      |
| `keyExtractor` | `(item: T, index: number) => string \| number`   | No       | Key function (defaults to index)   |
| `...rest`      | `ReactListProps<T>`                              | No       | Any prop from `@jswork/react-list` |

## ChangeEvent

```ts
interface ChangeEvent<T> {
  action: 'add' | 'remove' | 'update' | 'set' | 'up' | 'down';
  data: T[]; // full list after mutation
  index?: number; // affected index (undefined for set)
}
```

## Notes

- `name` is the shared-state key — all components with the same `name` share the same list
- `defaults` must be a factory function `() => T`, not a value
- `keyExtractor` defaults to index-based keys — use a custom extractor for stable keys when items reorder
