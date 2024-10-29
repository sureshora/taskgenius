// SoftwareDevelopment.jsx
import React, { useState } from 'react';
import axios from 'axios';

function SoftwareDevelopment() {
    const [stage, setStage] = useState("Planning");

    const handleNextPhase = async () => {
        try {
            const response = await axios.post('http://localhost:5000/move_to_next_phase', {
                projectId: "project123",
            });
            setStage(response.data.newStage); // Assuming backend sends the new stage
        } catch (error) {
            console.error("Error moving to next phase:", error);
        }
    };

    return (
        <div>
            <h3>Software Development Lifecycle</h3>
            <p>Current Stage: {stage}</p>
            <button onClick={handleNextPhase}>Move to Next Phase</button>
        </div>
    );
}

export default SoftwareDevelopment;
