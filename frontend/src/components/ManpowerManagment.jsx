// ManpowerManagement.jsx
import React, { useState } from 'react';
import axios from 'axios';

function ManpowerManagement() {
    const [stage, setStage] = useState("Recruitment");

    const handleRecruit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/recruit_candidate', {
                employeeId: "emp123",
            });
            setStage(response.data.newStage); // Assuming backend sends the updated stage
        } catch (error) {
            console.error("Error in recruitment:", error);
        }
    };

    const handleOnboard = async () => {
        try {
            const response = await axios.post('http://localhost:5000/onboard_employee', {
                employeeId: "emp123",
            });
            setStage(response.data.newStage);
        } catch (error) {
            console.error("Error in onboarding:", error);
        }
    };

    const handleOffboard = async () => {
        try {
            const response = await axios.post('http://localhost:5000/offboard_employee', {
                employeeId: "emp123",
            });
            setStage(response.data.newStage);
        } catch (error) {
            console.error("Error in offboarding:", error);
        }
    };

    return (
        <div>
            <h3>Manpower Management</h3>
            <p>Current Stage: {stage}</p>
            <button onClick={handleRecruit}>Recruit Candidate</button>
            <button onClick={handleOnboard}>Onboard Employee</button>
            <button onClick={handleOffboard}>Offboard Employee</button>
        </div>
    );
}

export default ManpowerManagement;
