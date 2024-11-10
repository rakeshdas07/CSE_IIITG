import React, { useEffect, useState } from 'react';
import { getPaymentStatus } from '../../services/api';
import './PaymentStatus.css'; // Import CSS for styling (if exists)

const PaymentStatus = ({ userId }) => {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const data = await getPaymentStatus(userId);
        setPaymentInfo(data);
      } catch (err) {
        setError('Failed to fetch payment status. Please try again later.'); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
    
    fetchPaymentStatus();
  }, [userId]);

  return (
    <div className="payment-status">
      {loading && <p>Loading...</p>} {/* Display loading state */}
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {paymentInfo && !loading && (
        <div>
          <h3>Payment Status</h3>
          <p>Status: {paymentInfo.status}</p>
          <p>Dues: {paymentInfo.dues}</p>
          <p>Available Balance: {paymentInfo.balance}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentStatus;
