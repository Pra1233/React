import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);

  //return array so destructuring

  const clickHandler = () => {
    console.log("Clicked");
    setTitle("update"); //async
    console.log("title-", title); //return previous value
  };
  const expenseHandler = () => {
    setExpense("$100");
  };

  const deleteHandler = () => {
    console.log("Delete");
  };
  return (
    // Custom card component classname passing as properties
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetail
          title={title}
          amount={expense}
          location={props.location}
        />
      </div>

      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={expenseHandler}>Change Expense</button>
    </Card>
  );
};
export default ExpenseItem;
