import React from 'react';
import { defineApp } from 'dumi';

export default defineApp({
  // 修改根容器，包裹自定义组件
  rootContainer: (container, { routes, plugin, history }) => {
    return (
      <>
        {/* 你的自定义组件 */}
        <div className="custom-wrapper debug">{container}</div>
      </>
    );
  },
});
