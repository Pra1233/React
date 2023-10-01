import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    // Custom card component classname passing as properties
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetail
          title={props.title}
          amount={props.amount}
          location={props.location}
        />
      </div>
    </Card>
  );
};
export default ExpenseItem;
