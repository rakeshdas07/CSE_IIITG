import React from 'react';

const BillingHistory = ({ billingData }) => {
  return (
    <div className="dashboard-section">
      <h2>Billing History</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {billingData.map((billing, index) => (
            <tr key={index}>
              <td>{billing.studentId}</td>
              <td>{billing.amount}</td>
              <td>{billing.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingHistory;