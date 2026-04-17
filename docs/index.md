---
title: React Dynamic List
hero:
  title: React Dynamic List
  description: A React component for managing dynamic lists with shared state, event-driven updates, and slot-based rendering.
  actions:
    - text: Get Started
      link: /guide/getting-started
    - text: Components
      link: /components/dynamic-list
    - text: GitHub
      link: https://github.com/aric-tpls/react-dynamic-list-docs
features:
  - title: Shared Store
    emoji: 🗂️
    description: Global store shared across components by name, event-driven updates
  - title: Slot-Based
    emoji: 🧩
    description: Customize item and empty states via slots, min/max constraints
  - title: SSR Safe
    emoji: 🌐
    description: No window dependency, works with server-side rendering
---

## Installation

```bash
npm install @jswork/react-dynamic-list @jswork/react-list
```

## Quick Start

```tsx
import { DynamicList, useCommand } from '@jswork/react-dynamic-list';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const defaults = (): Todo => ({
  id: crypto.randomUUID(),
  title: '',
  done: false,
});

// Declarative
<DynamicList<Todo>
  name="todos"
  defaults={defaults}
  data={[{ id: '1', title: 'Hello', done: false }]}
  slots={{
    item: ({ item }) => <div>{item.title}</div>,
    empty: () => <div>No items</div>,
  }}
/>;

// Imperative
function Controls() {
  const { state, actions } = useCommand<Todo>('todos', { defaults, max: 5 });
  return (
    <>
      <button disabled={!state.canAdd} onClick={actions.add}>
        Add
      </button>
      <button
        disabled={!state.canRemove}
        onClick={() => actions.remove(state.list.length - 1)}
      >
        Remove Last
      </button>
    </>
  );
}
```
