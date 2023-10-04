import React, { useRef, useState } from "react";
import classes from "./FormInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const FormInput = (props) => {
  //help to establish connection between html element
  const namedInputRef = useRef(); //1
  const ageInputRef = useRef();
  const collegenameInputRef = useRef();

  //App.js
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredName = namedInputRef.current.value; //2
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegenameInputRef.current.value;
    console.log(enteredName, enteredAge, enteredCollegeName);

    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Enter Valid Name And Age and CollegeName",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Enter Valid Age",
      });
      return;
    }
    props.adduserHandler(enteredName, enteredAge, enteredCollegeName); //function calling
    namedInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegenameInputRef.current.value = "";
    // setName("");
    // setAge("");
  };

  // const nameHandler = (event) => {
  //   setName(event.target.value);
  // };
  // const ageHandler = (event) => {
  //   setAge(event.target.value);
  // };

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
              // onChange={nameHandler}
              // value={enteredName}
              ref={namedInputRef}
            ></input>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              ref={ageInputRef} //connection established //3
            ></input>
            <label htmlFor="collegeName">CollegeName</label>
            <input
              type="text"
              ref={collegenameInputRef} //connection established //3
            ></input>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default FormInput;
