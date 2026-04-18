import React from 'react';
import { DynamicList, useCommand } from '@jswork/react-dynamic-list';

const fruits = ['🍎 Apple', '🍐 Pear', '🍌 Banana', '🍇 Grape', '🍊 Orange'];
let fruitIdx = 0;

const defaults = (): { id: string; value: string } => ({
  id: String(fruitIdx),
  value: fruits[fruitIdx++ % fruits.length],
});

const FruitItem = ({ item, index }: any) => {
  const { actions } = useCommand('pg-string');
  const { remove } = actions;
  return (
    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
      <span>{item.value}</span>
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">✕</button>
    </div>
  );
};

export default () => {
  const { state, actions } = useCommand<{ id: string; value: string }>('pg-string', { defaults, max: 8 });
  const { add, set } = actions;
  const { canAdd, list } = state;
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add Fruit
        </button>
        <button onClick={() => { fruitIdx = 0; set([]); }} className="px-3 py-1 bg-gray-200 rounded text-sm">
          Reset
        </button>
      </div>
      {list.length === 0 ? (
        <div className="text-gray-400 text-center p-4 text-sm">Click "+ Add Fruit" to start</div>
      ) : (
        <div className="space-y-1">
          {list.map((item, i) => (
            <FruitItem key={item.id} item={item} index={i} />
          ))}
        </div>
      )}
      <div className="text-xs text-gray-400">{list.length} / 8</div>
    </div>
  );
};
