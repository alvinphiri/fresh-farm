import React, { useState, useEffect } from 'react';
import { getSubmissions } from '../services/api';

const FarmSales = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSubmissions();
                setSubmissions(data);
            } catch (error) {
                console.error('Failed to fetch submissions');
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Submitted Information</h2>
            {submissions.length > 0 ? (
                <ul>
                    {submissions.map((submission, index) => (
                        <li key={index}>
                            <p>Name: {submission.name}</p>
                            <p>Email: {submission.email}</p>
                            <p>Message: {submission.message}</p>
                            <p>Date: {new Date(submission.date).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No submissions found.</p>
            )}
        </div>
    );
};

export default FarmSales;
