import React from 'react';
import './Sidebar.scss';

function Sidebar(props) {
  return (
    <div className="sidebar-panel">
      <div className="tabs">
        <div className="tab-button">
          <p className="contact">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;