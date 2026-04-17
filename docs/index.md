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
  - title: Global Store
    emoji: 🗂️
    description: List data lives outside React, shared across components by name
  - title: Event-Driven
    emoji: 📡
    description: Pub/sub system propagates changes to all subscribers
  - title: Slot-Based Rendering
    emoji: 🧩
    description: Customize item and empty states via slots
  - title: Constraints
    emoji: 🔒
    description: min/max bounds with canAdd/canRemove flags
  - title: Change Tracking
    emoji: 📊
    description: Every mutation emits a ChangeEvent with action, data, and index
  - title: SSR Safe
    emoji: 🌐
    description: Works with server-side rendering, no window dependency
---

## Installation

```bash
npm install @jswork/react-dynamic-list @jswork/react-list
```

## Quick Start

```tsx
import { DynamicList } from '@jswork/react-dynamic-list';

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

<DynamicList<Todo>
  name="todos"
  defaults={defaults}
  data={[{ id: '1', title: 'Hello', done: false }]}
  slots={{
    item: ({ item }) => <div>{item.title}</div>,
    empty: () => <div>No items</div>,
  }}
/>;
```
