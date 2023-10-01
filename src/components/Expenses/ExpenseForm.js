import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log("Title Changed", event.target.value);
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
            <input type="number" min="0.01" steps="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" max="2022-12-31" />
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
