import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
// import LoanForm from './LoanForm';

function App() {
  return (
    <div className="App">
       <div className="app-container">
      <Sidebar />
      <Dashboard />
      {/* <LoanForm /> */}
    </div>
    </div>
  );
}

export default App;
