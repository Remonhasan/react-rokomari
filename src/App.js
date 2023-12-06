import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../src/pages/Register'
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    
        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes>
      
    </div>
  );
}

export default App;
