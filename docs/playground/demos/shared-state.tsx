import React from 'react';
import {
  DynamicList,
  useListContext,
  type ItemContext,
} from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }: ItemContext<Item>) => {
  const { remove, update } = useListContext<Item>('pg-shared');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.label}
        onChange={(e) =>
          update(index, (prev) => ({ ...prev, label: e.target.value }))
        }
        placeholder="Type..."
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

const PanelA = () => {
  const { add, canAdd, list } = useListContext<Item>('pg-shared', {
    defaults,
    max: 6,
  });
  return (
    <div className="border rounded p-3">
      <div className="font-bold text-sm mb-2 text-blue-600">
        Panel A — Controls
      </div>
      <div className="flex gap-2 mb-2">
        <button
          onClick={add}
          disabled={!canAdd}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40"
        >
          + Add
        </button>
        <span className="text-xs text-gray-500 self-center">
          {list.length} items
        </span>
      </div>
      <DynamicList<Item>
        name="pg-shared"
        defaults={defaults}
        max={6}
        slots={{
          item: ItemSlot,
          empty: () => (
            <div className="text-gray-400 text-sm text-center p-2">Empty</div>
          ),
        }}
      />
    </div>
  );
};

const PanelB = () => {
  const { list } = useListContext<Item>('pg-shared', { defaults });
  return (
    <div className="border rounded p-3">
      <div className="font-bold text-sm mb-2 text-green-600">
        Panel B — Read-only mirror
      </div>
      {list.length === 0 ? (
        <div className="text-gray-400 text-sm text-center p-2">Empty</div>
      ) : (
        <ul className="space-y-1">
          {list.map((item, i) => (
            <li key={item.id} className="text-sm p-1 bg-green-50 rounded px-2">
              {item.label || '(empty)'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default () => (
  <div className="grid grid-cols-2 gap-4">
    <PanelA />
    <PanelB />
  </div>
);
