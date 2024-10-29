// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>TaskGenius Dashboard</h2>
            <div>
                <Link to="/infrastructure">Computer Infrastructure Management</Link>
                <Link to="/development">Software Development Lifecycle</Link>
                <Link to="/manpower">Manpower Management</Link>
            </div>
        </div>
    );
}

export default Dashboard;
