import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../src/pages/Register'
import Header from './pages/Header';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
    
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </div>
  );
}

export default App;
