import React from 'react';
import {
  DynamicList,
  ItemContext,
  useCommand,
} from '@jswork/react-dynamic-list';

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

const TodoItem = ({ item, index }: ItemContext<Todo>) => {
  const { actions } = useCommand<Todo>('demo-todo');
  const { update, remove } = actions;
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => update(index, (prev) => ({ ...prev, done: !prev }))}
        className="w-4 h-4"
      />
      <input
        value={item.title}
        onChange={(e) =>
          update(index, (prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Todo title..."
        className="flex-1 px-2 py-1 border rounded text-sm"
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
  const { state, actions } = useCommand<Todo>('demo-todo', {
    defaults,
    max: 5,
  });
  const { add } = actions;
  const { canAdd, canRemove, list } = state;
  return (
    <div className="flex gap-2 mb-3">
      <button
        onClick={add}
        disabled={!canAdd}
        className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40"
      >
        + Add ({list.length}/5)
      </button>
    </div>
  );
};

const initialData = [{ id: '1', title: 'Learn React', done: false }];

export default () => (
  <div>
    <Controls />
    <DynamicList<Todo>
      name="demo-todo"
      defaults={defaults}
      data={initialData}
      max={5}
      slots={{
        item: TodoItem,
        empty: () => (
          <div className="text-gray-400 text-center p-4">No todos yet</div>
        ),
      }}
    />
  </div>
);
