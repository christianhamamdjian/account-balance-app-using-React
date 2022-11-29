import React, { useState } from "react";
import addMark from '../checkmark-circle-outline.svg';
import "../App.css";

const AddEntry = (props) => {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("income")

  const newItem = (e) => {
    e.preventDefault();
    if (description && amount) {
      const date = new Date();
      const myDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const myTime =
        date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2);
      const myTrans = {
        id: myTime.replace(/\D/g, ""),
        description: description,
        amount: Number(amount),
        type: type,
        date: myDate,
        time: myTime
      };

      props.passToList(myTrans);
      setDescription("")
      setAmount("")
    }
  }
  const addDescription = (newDescription) => {
    setDescription(newDescription)

  }
  const addAmount = (newAmount) => {
    setAmount(newAmount);
  }
  const addType = (newType) => {
    setType(newType)
  }


  return (
    <div className="add">
      <form className="add__container">
        <input
          id="desc"
          className="add__description"
          onChange={e => addDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Description"
          name="newDescription"
        />

        <input
          id="amnt"
          className="add__value"
          onChange={e => addAmount(e.target.value)}
          value={amount}
          min="0"
          type="number"
          placeholder="Amount"
          name="newAmount"
        />

        <select className="add__type" onChange={e => addType(e.target.value)}>
          <option value="income">+</option>
          <option value="expense">-</option>
        </select>

        <button
          onClick={e => newItem(e)}
          type="submit"
          className="add__btn"
        ><img style={{ width: '30px' }} src={addMark} alt="add button" />
        </button>
      </form>
    </div>
  );
}

export default AddEntry;
