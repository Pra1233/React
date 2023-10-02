import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   //react guarantee state snapshot is latest
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     date: event.target.value,
    //   };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // OBJECT
    const expenseobj = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseobj); //calling here
    // console.log(expenseobj);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={title}
              placeholder="Enter Title"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              min="1"
              steps="0.01"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2022-12-31"
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
