import React, { useState, useRef } from 'react';
import './index.scss';
import { Tabs, Button } from "antd"
import PaneContent from "@containers/MainPage/PaneContent"


type paneType = { title: string, content: string, key: string }

function MainPage() {
  const [activeKey, setActiveKey] = useState("")
  const [panes, setPanes] = useState<Array<paneType>>([])
  const newTabIndex = useRef(0)
  const onChange = (activeKey: string) => {
    setActiveKey(activeKey)
  }

  const add = () => {
    const activeKey = `newTab${newTabIndex.current++}`;
    setPanes(prevState => [...prevState, { title: 'New Tab', content: 'New Tab Pane', key: activeKey }])
  };

  const remove = (targetKey: string) => {
    let lastIndex: number = null!;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const _panes = panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex && lastIndex >= 0) {
        setActiveKey(panes[lastIndex].key)
      } else {
        setActiveKey(panes[0].key)
      }
    }
    setPanes(_panes)
  };

  const onEdit = (targetKey: any, action: "add" | "remove") => {
    if (action === "add") add()
    if (action === "remove") remove(targetKey)
  };
  return (
    <div className="main-page-warp">
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        tabBarExtraContent={<Button onClick={add}>ADD</Button>}
      >
        {panes.map(pane => (
          <Tabs.TabPane tab={pane.title} key={pane.key}>
            <PaneContent activeKey={pane.key}/>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default MainPage;
