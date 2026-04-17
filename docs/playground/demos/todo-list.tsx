import React from 'react';
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

const TodoItem = ({ item, index }: any) => {
  const { actions } = useCommand<Todo>('pg-todo');
  const { update, remove } = actions;
  return (
    <div
      className={`flex items-center gap-2 p-2 rounded ${
        item.done ? 'bg-green-50' : 'bg-gray-50'
      }`}
    >
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => {
          update(index, (prev) => {
            return { ...prev, done: !prev.done };
          });
        }}
        className="w-4 h-4"
      />
      <input
        value={item.title}
        onChange={(e) =>
          update(index, (prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Todo title..."
        className={`flex-1 px-2 py-1 border rounded text-sm ${
          item.done ? 'line-through text-gray-400' : ''
        }`}
      />
      <button
        onClick={() => remove(index)}
        className="text-red-400 hover:text-red-600 text-sm"
      >
        ✕
      </button>
    </div>
  );
};

const Controls = () => {
  const { state, actions } = useCommand<Todo>('pg-todo', {
    defaults,
    max: 8,
  });
  const { add } = actions;
  const { canAdd, list } = state;
  const remaining = list.filter((t) => !t.done).length;
  return (
    <div className="flex items-center gap-3 mb-3">
      <button
        onClick={add}
        disabled={!canAdd}
        className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40"
      >
        + Add Todo
      </button>
      <span className="text-sm text-gray-500">
        {remaining} remaining / {list.length} total
      </span>
    </div>
  );
};

const initialData = [
  { id: '1', title: 'Learn React', done: false },
  { id: '2', title: 'Build something', done: true },
];

export default () => (
  <div className="debug-red p-2">
    <Controls />
    <DynamicList<Todo>
      name="pg-todo"
      defaults={defaults}
      data={initialData}
      max={8}
      slots={{
        item: TodoItem,
        empty: () => (
          <div className="text-gray-400 text-center p-4">
            No todos — add one!
          </div>
        ),
      }}
    />
  </div>
);
