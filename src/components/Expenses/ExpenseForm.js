import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // console.log("Title Changed", event.target.value);
    // setUserInput({
    //   ...userInput,//depend on previous state
    //   title: event.target.value,//override
    // });

    //react schedule state update doesnt perform instantly  and therefore if lots of state update at sametime
    //could be depending on old state in this approch
    setUserInput((prevState) => {
      //react guarantee state snapshot is latest
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // console.log("Amount", event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Amount"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              steps="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2022-12-31"
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
