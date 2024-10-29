// TransactionLogs.js
import React, { useEffect, useState } from 'react';
import { fetchTransactionLogs } from '../services/nearService';

function TransactionLogs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const getLogs = async () => {
            const fetchedLogs = await fetchTransactionLogs();
            setLogs(fetchedLogs);
        };
        getLogs();
    }, []);

    return (
        <div>
            <h3>Transaction Logs</h3>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {log.date}: {log.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionLogs;
