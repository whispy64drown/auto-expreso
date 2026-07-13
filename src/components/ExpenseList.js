import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDelete, onViewReceipt }) {
  return (
    <div className="list-panel">
      <h2>Transaction History Log</h2>
      {expenses.length === 0 ? (
        <p className="empty-msg">No entries found. Log a toll expense to get started.</p>
      ) : (
        <div className="table-responsive">
          <table className="expense-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Location / Source</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp) => (
                <tr key={exp.id}>
                  <td>{exp.date}</td>
                  <td>
                    <span className={`badge ${exp.type === 'Toll' ? 'toll-badge' : 'recharge-badge'}`}>
                      {exp.type.toUpperCase()}
                    </span>
                  </td>
                  <td>{exp.location}</td>
                  <td style={{ fontWeight: 'bold', color: exp.type === 'Toll' ? '#cc0000' : '#008800' }}>
                    {exp.type === 'Toll' ? '-' : '+'}${exp.amount.toFixed(2)}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-view" onClick={() => onViewReceipt(exp)}>Receipt</button>
                      <button className="btn-del" onClick={() => onDelete(exp.id)}>Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
