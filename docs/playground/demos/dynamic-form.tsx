import React from 'react';
import { DynamicList, useCommand } from '@jswork/react-dynamic-list';

interface Field {
  id: string;
  name: string;
  value: string;
}

const defaults = (): Field => ({ id: crypto.randomUUID(), name: '', value: '' });

const FieldItem = ({ item, index }: any) => {
  const { actions } = useCommand<Field>('pg-form');
  const { update, remove } = actions;
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <input
        value={item.name}
        onChange={(e) => update(index, (prev) => ({ ...prev, name: e.target.value }))}
        placeholder="Key"
        className="w-24 px-2 py-1 border rounded text-sm"
      />
      <span className="text-gray-400">:</span>
      <input
        value={item.value}
        onChange={(e) => update(index, (prev) => ({ ...prev, value: e.target.value }))}
        placeholder="Value"
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">✕</button>
    </div>
  );
};

const initialData = [
  { id: '1', name: 'host', value: 'localhost' },
  { id: '2', name: 'port', value: '3000' },
];

export default () => {
  const { state, actions } = useCommand<Field>('pg-form', { defaults, max: 8 });
  const { add, reset } = actions;
  const { canAdd, list } = state;
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add Field
        </button>
        <button onClick={() => reset(initialData)} className="px-3 py-1 bg-gray-200 rounded text-sm">
          Reset
        </button>
      </div>
      <DynamicList<Field>
        name="pg-form"
        defaults={defaults}
        data={initialData}
        max={8}
        slots={{
          item: FieldItem,
          empty: () => <div className="text-gray-400 text-sm text-center p-2">No fields</div>,
        }}
      />
      <pre className="text-xs bg-gray-900 text-green-400 p-2 rounded mt-2">
        {JSON.stringify(
          Object.fromEntries(list.filter((f) => f.name).map((f) => [f.name, f.value])),
          null,
          2
        )}
      </pre>
    </div>
  );
};
