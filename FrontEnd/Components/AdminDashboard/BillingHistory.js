// src/components/AdminDashboard/BillingHistory.js
import React, { useEffect, useState } from 'react';
import { getBillingHistory } from '../../services/api';

const BillingHistory = ({ userId }) => {
  const [billingHistory, setBillingHistory] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBillingHistory = async () => {
      try {
        const data = await getBillingHistory(userId);
        setBillingHistory(data);
      } catch (err) {
        setError('Failed to fetch billing history');
      } finally {
        setLoading(false);
      }
    };
    fetchBillingHistory();
  }, [userId]);

  if (loading) return <p>Loading billing history...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Billing History</h2>
      <ul>
        {billingHistory.length > 0 ? (
          billingHistory.map((bill, index) => (
            <li key={index}>
              <strong>Date:</strong> {bill.date} <br />
              <strong>Amount:</strong> ${bill.amount.toFixed(2)} {/* Format amount to 2 decimal places */}
            </li>
          ))
        ) : (
          <p>No billing history available.</p>
        )}
      </ul>
    </div>
  );
};

export default BillingHistory;
