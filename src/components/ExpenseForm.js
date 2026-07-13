import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [type, setType] = useState('Toll');
  const [location, setLocation] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !amount || !date) return;

    onAddExpense({
      id: Date.now(),
      type,
      location,
      amount: parseFloat(amount),
      date
    });

    setLocation('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="form-panel">
      <h2>Log Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Transaction Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Toll">Toll Highway Deduction</option>
            <option value="Recharge">Account Balance Recharge</option>
          </select>
        </div>

        <div className="form-group">
          <label>Location / Channel</label>
          <input 
            type="text" 
            placeholder="e.g. Plaza Toa Baja (PR-22) / App Portal" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Cost / Amount ($)</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Date of Event</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Save Entry</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
