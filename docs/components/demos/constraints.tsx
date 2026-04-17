import React from 'react';
import { DynamicList, useCommand } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }) => {
  const { actions } = useCommand<Item>('demo-constraints');
  const { remove, update } = actions;
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.label}
        onChange={(e) => update(index, (prev) => ({ ...prev, label: e.target.value }))}
        placeholder="Type something..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">✕</button>
    </div>
  );
};

const Controls = () => {
  const { state, actions } = useCommand<Item>('demo-constraints', { defaults, min: 1, max: 4 });
  const { add } = actions;
  const { canAdd, canRemove, list } = state;
  return (
    <div className="flex items-center gap-3 mb-3">
      <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
        + Add
      </button>
      <span className="text-sm text-gray-500">min: 1 | max: 4 | current: {list.length}</span>
      <span className="text-xs">
        {canAdd ? <span className="text-green-500">canAdd ✓</span> : <span className="text-gray-400">canAdd ✗</span>}
        {' | '}
        {canRemove ? <span className="text-green-500">canRemove ✓</span> : <span className="text-gray-400">canRemove ✗</span>}
      </span>
    </div>
  );
};

export default () => (
  <div>
    <Controls />
    <DynamicList<Item>
      name="demo-constraints"
      defaults={defaults}
      min={1}
      max={4}
      slots={{
        item: ItemSlot,
        empty: () => <div className="text-gray-400 text-center p-4">No items</div>,
      }}
    />
  </div>
);
