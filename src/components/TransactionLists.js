import React from 'react';
import deleteMark from '../close-circle-outline.svg';
import '../App.css';

const TransactionLists = ({ incomes = [], expenses = [], deleteItem }) => {
  return (
    <div className="container">
      <div className="transaction-lists">
        <div className="income">
          <h2 className="icome__title">Income:</h2>
          {incomes.length > 0 && incomes
            .map((element, i) => {
              return (
                <div className="income__list" key={element.description + "-" + i}>
                  <div className="item clearfix" id="income-0">
                    <div className="item__description">{element.description}</div>
                    <div className="right clearfix">
                      <div className="item__value">{element.amount}</div>
                      <div className="item__percentage">
                        {element.date}{" "}{element.time}
                      </div>

                      <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => deleteItem(element.type, element.id)}><img style={{ width: '30px' }} src={deleteMark} alt="delete button" /></button>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="expenses">
          <h2 className="expenses__title">Expenses:</h2>
          {expenses.length > 0 && expenses
            .map((element, i) => {
              return (
                <div className="expenses__list" key={element.description + "-" + i}>
                  <div className="item clearfix" id="income-0">

                    <div className="item__description">{element.description}</div>
                    <div className="right clearfix">
                      <div className="item__value">{element.amount}</div>
                      <div className="item__percentage">
                        {element.date}{" "}{element.time}
                      </div>

                      <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => deleteItem(element.type, element.id)}><img style={{ width: '30px' }} src={deleteMark} alt="delete button" /></button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );

}

export default TransactionLists;
