import React from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const ItemSlot = ({ item, index }) => {
  const { remove, update } = useListContext<Item>('pg-constraints');
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <span className="text-gray-400 text-xs w-6">#{index + 1}</span>
      <input
        value={item.label}
        onChange={(e) => update(index, (prev) => ({ ...prev, label: e.target.value }))}
        placeholder="Item label..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">✕</button>
    </div>
  );
};

const Controls = () => {
  const { add, canAdd, canRemove, list } = useListContext<Item>('pg-constraints', { defaults, min: 1, max: 4 });
  return (
    <div className="space-y-2 mb-3">
      <div className="flex gap-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add
        </button>
      </div>
      <div className="flex gap-3 text-xs">
        <span className="text-gray-500">Count: {list.length} / 4</span>
        <span className={canAdd ? 'text-green-500' : 'text-gray-400'}>canAdd: {canAdd ? '✓' : '✗'}</span>
        <span className={canRemove ? 'text-green-500' : 'text-gray-400'}>canRemove: {canRemove ? '✓' : '✗'}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div className="bg-blue-500 h-1.5 rounded-full transition-all" style={{ width: `${(list.length / 4) * 100}%` }} />
      </div>
    </div>
  );
};

export default () => (
  <div>
    <Controls />
    <DynamicList<Item>
      name="pg-constraints"
      defaults={defaults}
      data={[{ id: '1', label: 'First item' }]}
      min={1}
      max={4}
      slots={{
        item: ItemSlot,
        empty: () => <div className="text-gray-400 text-center p-4">No items</div>,
      }}
    />
  </div>
);
