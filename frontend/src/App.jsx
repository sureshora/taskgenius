import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import InfrastructureManagement from './components/InfrastructureManagement';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/infrastructure" element={<InfrastructureManagement />} />
            </Routes>
        </Router>
    );
}

export default App;

