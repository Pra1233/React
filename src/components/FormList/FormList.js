import React from "react";
import Card from "../UI/Card";
import classes from "./FormList.module.css";

const FormList = (props) => {
  return (
    <Card className={classes.users}>
      <ul className="goal-list">
        {props.users.map((item) => (
          <li
            key={item.id} //uniquely identify
            className="goal-item"
            onClick={() => props.deleteItemHandler(item.id)}
          >
            {`${item.name} (${item.age} years old )`}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FormList;
