import React, { useState } from 'react';
import { DynamicList, useListContext } from '@jswork/react-dynamic-list';
import type { ChangeEvent } from '@jswork/react-dynamic-list';

interface Task {
  id: string;
  title: string;
  priority: 'low' | 'mid' | 'high';
}

const priorities: Task['priority'][] = ['low', 'mid', 'high'];
const priorityColor: Record<Task['priority'], string> = {
  low: 'bg-gray-200 text-gray-600',
  mid: 'bg-yellow-200 text-yellow-700',
  high: 'bg-red-200 text-red-700',
};

const defaults = (): Task => ({ id: crypto.randomUUID(), title: '', priority: 'mid' });

const TaskItem = ({ item, index }: any) => {
  const { update, remove } = useListContext<Task>('pg-tracker');
  const cycle = () => {
    const next = priorities[(priorities.indexOf(item.priority) + 1) % 3];
    update(index, (prev) => ({ ...prev, priority: next }));
  };
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
      <button onClick={cycle} className={`px-2 py-0.5 rounded text-xs font-mono ${priorityColor[item.priority]}`}>
        {item.priority}
      </button>
      <input
        value={item.title}
        onChange={(e) => update(index, (prev) => ({ ...prev, title: e.target.value }))}
        placeholder="Task title..."
        className="flex-1 px-2 py-1 border rounded text-sm"
      />
      <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-sm">✕</button>
    </div>
  );
};

const initialData = [
  { id: '1', title: 'Fix login bug', priority: 'high' as const },
  { id: '2', title: 'Update README', priority: 'low' as const },
  { id: '3', title: 'Refactor API', priority: 'mid' as const },
];

export default () => {
  const { add, canAdd, list } = useListContext<Task>('pg-tracker', { defaults, max: 8 });
  const [log, setLog] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<Task>) => {
    setLog((prev) => [`${e.action}${e.index != null ? ` [${e.index}]` : ''} → ${list.length} items`, ...prev.slice(0, 9)]);
  };

  const highCount = list.filter((t) => t.priority === 'high').length;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <button onClick={add} disabled={!canAdd} className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-40">
          + Add Task
        </button>
        <span className="text-xs text-gray-500">{list.length} tasks · {highCount} high priority</span>
      </div>
      <DynamicList<Task>
        name="pg-tracker"
        defaults={defaults}
        data={initialData}
        max={8}
        onChange={handleChange}
        slots={{
          item: TaskItem,
          empty: () => <div className="text-gray-400 text-sm text-center p-2">No tasks</div>,
        }}
      />
      {log.length > 0 && (
        <div className="text-xs bg-gray-900 text-gray-300 p-2 rounded font-mono">
          <div className="text-gray-500 mb-1">Change log:</div>
          {log.map((entry, i) => <div key={i}>{entry}</div>)}
        </div>
      )}
    </div>
  );
};
