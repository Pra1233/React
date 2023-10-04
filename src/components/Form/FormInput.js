import React, { useState } from "react";
import classes from "./FormInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const FormInput = (props) => {
  //App.js
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Enter Valid Name And Age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Enter Valid Age",
      });
      return;
    }
    props.adduserHandler(name, age); //function calling
    setName("");
    setAge("");
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <div className="form-control">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="name"
              onChange={nameHandler}
              value={name}
            ></input>
            <label htmlFor="age">Age</label>
            <input type="number" onChange={ageHandler} value={age}></input>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default FormInput;
