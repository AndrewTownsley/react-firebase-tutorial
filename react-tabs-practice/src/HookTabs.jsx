import './App.css';
import React, { useState } from 'react';
// import Tabs from './components/Tabs'

function App() {
  const [currentTab, setCurrentTab] = useState('tab1');

  const tabList =  [
    {
      name: 'tab1',
      label: 'Home',
      content: (
        <div className="tab-content">
          <h3>Home</h3>
          <p>This is the tab content of the FIRST tab.  This can be seperated as it's own Component.
          </p>
        </div>
      )
    },
    {
      name: 'tab2',
      label: 'About',
      content: (
        <div className="tab-content">
          <h3>About</h3>
          <p>This is the tab content of the SECOND tab.  This can be seperated as it's own Component.
          </p>
        </div>
      )
    },
    {
      name: 'tab3',
      label: 'Services',
      content: (
        <div className="tab-content">
          <h3>Home</h3>
          <p>This is the tab content of the THIRD tab.  This can be seperated as it's own Component.
          </p>
        </div>
      )
    },
  ]

  return (
    <div className="App">
      <h1>Tabs Component with Hooks</h1>
      <div className="tabs-list">
        {
          tabList.map((tab, i) => (
            <button 
              key={i}
              onClick={() => setCurrentTab(tab.name)}
              className={(tab.name === currentTab ? 'active' : '')}
              >
              {tab.label}
            </button>
          ))
        }
      </div>

      {
        tabList.map((tab, i) => {
          if(tab.name === currentTab) {
            return <div key={i}>{tab.content}</div>
          } else {
            return null
          }
        })
      }

    </div>
  );
}

export default App;
