---
title: Getting Started
order: 0
---

# Getting Started

## Prerequisites

- React >= 18
- `@jswork/react-list` as a peer dependency

## Installation

```bash
npm install @jswork/react-dynamic-list @jswork/react-list
```

## Basic Usage

### Declarative with `<DynamicList>`

```tsx
import { DynamicList } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  title: string;
  done: boolean;
}

const defaults = (): Item => ({
  id: crypto.randomUUID(),
  title: '',
  done: false,
});

<DynamicList<Item>
  name="my-list"
  defaults={defaults}
  data={[{ id: '1', title: 'Hello', done: false }]}
  max={10}
  onChange={(e) => console.log(e.action, e.index, e.data)}
  slots={{
    item: ({ item, index }) => <div>{item.title}</div>,
    empty: () => <div>No items</div>,
  }}
/>;
```

### Imperative with `useCommand`

```tsx
import { useCommand } from '@jswork/react-dynamic-list';

function MyControls() {
  const { state, actions } = useCommand<Item>('my-list', {
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

## Key Concepts

- **`name`** — Shared-state key. All hooks/components with the same `name` see the same list.
- **`defaults`** — Factory function `() => T` for creating new items. Required in both `<DynamicList>` and `useCommand`.
- **`slots`** — Customize rendering with `item` and `empty` slot components.
- **`min`/`max`** — Soft constraints. `canAdd` is `false` when length >= `max`, `canRemove` is `false` when length <= `min`.

## Next Steps

- [Architecture](/guide/architecture) - Understand the internal design
- [DynamicList API](/components/dynamic-list) - Full component reference
- [useCommand API](/components/use-command) - Hook reference
- [Playground](/playground) - Interactive examples
