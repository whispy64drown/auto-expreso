import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, type: 'Toll', location: 'Plaza Tejas (PR-53)', amount: 1.50, date: '2026-07-10' },
    { id: 2, type: 'Recharge', location: 'Online Mobile Portal', amount: 20.00, date: '2026-07-11' },
    { id: 3, type: 'Toll', location: 'Plaza Buchanan (PR-22)', amount: 0.75, date: '2026-07-12' }
  ]);

  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const stats = useMemo(() => {
    let totalTolls = 0;
    let totalRecharges = 0;
    expenses.forEach(exp => {
      if (exp.type === 'Toll') totalTolls += exp.amount;
      if (exp.type === 'Recharge') totalRecharges += exp.amount;
    });
    return {
      tolls: totalTolls,
      recharges: totalRecharges,
      balance: totalRecharges - totalTolls
    };
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
    if (selectedReceipt && selectedReceipt.id === id) {
      setSelectedReceipt(null);
    }
  };

  return (
    <div>
      <Header />
      <main className="app-container">
        <section className="dashboard-summary">
          <div className="card">
            <h3>Total Toll Expenses</h3>
            <p>${stats.tolls.toFixed(2)}</p>
          </div>
          <div className="card recharge-card">
            <h3>Total Recharges</h3>
            <p>${stats.recharges.toFixed(2)}</p>
          </div>
          <div className="card" style={{ borderTopColor: stats.balance >= 0 ? '#4caf50' : '#f44336' }}>
            <h3>Virtual Tracker Balance</h3>
            <p>${stats.balance.toFixed(2)}</p>
          </div>
        </section>

        <div className="main-layout">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseList 
            expenses={expenses} 
            onDelete={handleDeleteExpense} 
            onViewReceipt={setSelectedReceipt} 
          />
          {selectedReceipt && (
            <div className="receipt-preview-section">
              <Receipt item={selectedReceipt} onClose={() => setSelectedReceipt(null)} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
