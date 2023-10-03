import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setisValid] = useState(true); //1

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      //4
      setisValid(true);
    } else setisValid(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false); //false //2
      return;
    }
    props.onAddGoal(enteredValue);
    // setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
