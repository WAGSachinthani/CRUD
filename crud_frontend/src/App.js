import './App.css';
import logo from './mylogo.png'; // Import the logo image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Logo image */}
        <h1>
          Welcome To User-Link!
        </h1>
        <button className="users-button"><h1>Users</h1></button>
      </header>
    </div>
  );
}

export default App;
