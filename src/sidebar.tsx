import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="user-info">
        <h2>John Clark</h2>
      </div>
      <ul className="menu">
        <li>Dashboard</li>
        <li>Loans</li>
        <li>Borrowers</li>
        <li>Savings</li>
        <li>Reports</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
