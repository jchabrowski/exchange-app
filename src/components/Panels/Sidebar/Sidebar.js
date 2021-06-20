import React from 'react';
import './Sidebar.scss';

function Sidebar(props) {
  return (
    <div className="sidebar-panel">
      <div className="tabs">
        <div className="tab-button">
          <button className="exchange">Exchange</button>
        </div>
        <div className="tab-button">
          <button className="contact">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;