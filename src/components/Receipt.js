import React from 'react';
import './Receipt.css';

function Receipt({ item, onClose }) {
  return (
    <div className="receipt-box">
      <button className="receipt-close" onClick={onClose}>&times;</button>
      <div className="receipt-header">
        <h3>AutoExpreso</h3>
        <p>Transit Statement Voucher</p>
      </div>
      <div className="receipt-body">
        <p><strong>Voucher ID:</strong> <span>AE-{item.id}</span></p>
        <p><strong>Timestamp Date:</strong> <span>{item.date}</span></p>
        <p><strong>Category Type:</strong> <span>{item.type === 'Toll' ? 'Toll Highway Fee' : 'Balance Replenishment'}</span></p>
        <p><strong>Location Point:</strong> <span>{item.location}</span></p>
        <p className="total-row">
          <strong>Settled Total:</strong> 
          <span>${item.amount.toFixed(2)}</span>
        </p>
      </div>
      <div className="receipt-footer">
        <p>¡Buen viaje! Drive safely on Puerto Rico highways.</p>
        <p>Keep this virtual tracking record for tax reporting purposes.</p>
      </div>
    </div>
  );
}

export default Receipt;
