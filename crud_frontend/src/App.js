import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './App.css';
import logo from './mylogo.png'; // Import the logo image

function App() {
  const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Logo image */}
        <h1>
          Welcome To User-Link!
        </h1>
        <button className="users-button" onClick={() => navigate('/users')}><h1>Users</h1></button>
      </header>
    </div>
  );
}

export default App;
