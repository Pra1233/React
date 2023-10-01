import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetail
          title={props.title}
          amount={props.amount}
          location={props.location}
        />
      </div>
    </div>
  );
};
export default ExpenseItem;
