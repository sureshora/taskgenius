// InfrastructureManagement.js
import React, { useState } from 'react';
import { executeTransaction, getStatus } from '../services/nearService';

function InfrastructureManagement() {
    const [status, setStatus] = useState("");

    const handleProvision = async () => {
        await executeTransaction("provision_resources");
        const newStatus = await getStatus();
        setStatus(newStatus);
    };

    const handleScale = async () => {
        await executeTransaction("scale_resources");
        const newStatus = await getStatus();
        setStatus(newStatus);
    };

    const handleDecommission = async () => {
        await executeTransaction("decommission");
        const newStatus = await getStatus();
        setStatus(newStatus);
    };

    return (
        <div>
            <h3>Computer Infrastructure Management</h3>
            <p>Current Status: {status}</p>
            <button onClick={handleProvision}>Provision Resources</button>
            <button onClick={handleScale}>Scale Resources</button>
            <button onClick={handleDecommission}>Decommission</button>
        </div>
    );
}

export default InfrastructureManagement;
