import React from 'react';
import '../App.css';

const Balance = ({ balance, totalIncomes, totalExpenses, myDate }) => {
  return (
    <>
      <div className="budget">
        <h1 className="budget__title">Account Balance Tracker</h1>
        <h3 className="budget__title">Balance in {myDate}</h3>
        <h2 className="budget__title">{balance}</h2>
        <div className="budget__list">
          <div className="budget__income clearfix">
            <div className="budget__income--text">Total Income</div>
            <div className="right">
              <div className="budget__income--value">+ {totalIncomes || 0}</div>
            </div>
          </div>
          <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Total Expenses</div>
            <div className="right clearfix">
              <div className="budget__expenses--value">- {Math.abs(totalExpenses)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
