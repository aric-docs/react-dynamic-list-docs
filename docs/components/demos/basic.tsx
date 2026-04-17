import React from 'react';
import { DynamicList } from '@jswork/react-dynamic-list';

interface Item {
  id: string;
  label: string;
}

const defaults = (): Item => ({ id: crypto.randomUUID(), label: '' });

const SlotItem = ({ item, index, onAction }) => (
  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
    <span className="text-gray-500 text-sm">#{index}</span>
    <span className="flex-1">{item.label || '(empty)'}</span>
  </div>
);

const SlotEmpty = () => <div className="text-gray-400 text-center p-4">No items yet</div>;

const initialData = [{ id: '1', label: 'Item A' }, { id: '2', label: 'Item B' }];

export default () => (
  <DynamicList<Item>
    name="demo-basic"
    defaults={defaults}
    data={initialData}
    slots={{ item: SlotItem, empty: SlotEmpty }}
    onChange={(e) => console.log(e.action, e.data)}
  />
);
