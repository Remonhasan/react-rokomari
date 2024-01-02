import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from '../src/pages/Register'
import Header from './pages/Header';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {

  const isAuthenticated = () => {
    // Check if the authentication token exists in local storage or cookies
    const authToken = localStorage.getItem('token'); // Assuming authToken is used for authentication

    return !!authToken; // Return true if authToken exists, false otherwise
  };

  return (
    <div className="App">
      {/* <Header/> */}

      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}

        {isAuthenticated() ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>

    </div>
  );
}

export default App;
