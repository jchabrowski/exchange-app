import React from 'react';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar-panel">
      <div className="tabs">
        <div className="tab-button">
          <p className="contact">Contact</p>
          <a href="mailto:chabrowski.kuba@gmail.com" className="mail">
            chabrowski.kuba@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
