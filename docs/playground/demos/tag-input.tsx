import React, { useState } from 'react';
import { DynamicList, useCommand } from '@jswork/react-dynamic-list';

interface Tag {
  id: string;
  text: string;
}

const defaults = (): Tag => ({ id: crypto.randomUUID(), text: '' });

const TagItem = ({ item, index }: any) => {
  const { actions } = useCommand<Tag>('pg-tags');
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
      {item.text}
      <button onClick={() => actions.remove(index)} className="text-blue-400 hover:text-blue-600">✕</button>
    </span>
  );
};

export default () => {
  const { state, actions } = useCommand<Tag>('pg-tags', { defaults, max: 10 });
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const text = input.trim();
    if (!text || !state.canAdd) return;
    actions.add();
    actions.update(state.list.length, () => ({ id: crypto.randomUUID(), text }));
    setInput('');
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Type a tag, press Enter..."
          className="flex-1 px-2 py-1 border rounded text-sm"
        />
        <button onClick={handleAdd} disabled={!state.canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-1">
        <DynamicList<Tag>
          name="pg-tags"
          defaults={defaults}
          max={10}
          slots={{
            item: TagItem,
            empty: () => <div className="text-gray-400 text-sm">No tags yet</div>,
          }}
        />
      </div>
    </div>
  );
};
