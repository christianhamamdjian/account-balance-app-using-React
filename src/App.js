import React, { useState, useEffect } from "react";
import "./App.css";
import AddEntry from "./components/AddEntry";
import TransactionLists from "./components/TransactionLists";
import Balance from "./components/Balance";

const App = () => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [totalIncomes, setTotalIncomes] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [balance, setBalance] = useState(0)

  const passToList = (transaction) => {
    if (transaction.type === "income") {
      incomes.length ? setIncomes(prevIncomes => [...prevIncomes, transaction]) : setIncomes([transaction]);
    }
    if (transaction.type === "expense") {
      expenses.length ? setExpenses(prevExpenses => [...prevExpenses, transaction]) : setExpenses([transaction]);
    }
  }

  useEffect(() => {
    const newIncomes = incomes.reduce((acc, el) => {
      return acc + el.amount
    }, 0)
    const newExpenses = expenses.reduce((acc, el) => {
      return acc + el.amount
    }, 0)
    console.log(newIncomes, newExpenses)
    console.log(incomes, expenses)
    setTotalIncomes(newIncomes)
    setTotalExpenses(newExpenses)

  }, [incomes, expenses])

  useEffect(() => {
    const newBalance = totalIncomes - totalExpenses
    setBalance(newBalance)
  }, [totalIncomes, totalExpenses])

  const date = new Date();
  const myDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const deleteItem = (type, id) => {
    let ids, index;
    const transList = type === "income" ? incomes : expenses;
    const setter = type === "income" ? setIncomes : setExpenses;
    ids = transList.map((el) => {
      return el.id;
    });
    index = ids.indexOf(id);
    if (index !== -1) {
      transList.splice(index, 1);
      setter([...transList]);
    }
  }

  return (
    <div className="app">
      <div className="top">
        <Balance balance={balance} totalIncomes={totalIncomes} totalExpenses={totalExpenses} myDate={myDate} />
      </div>
      <div className="bottom">
        <AddEntry passToList={passToList} />
        <TransactionLists incomes={incomes} expenses={expenses} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
