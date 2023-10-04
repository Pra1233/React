import "./App.css";
import React, { useState } from "react";
import FormInput from "./components/Form/FormInput";
import FormList from "./components/FormList/FormList";

function App() {
  const [userDetail, setUserDetail] = useState([]);

  const adduserHandler = (name, age, collegeName) => {
    //function called from FormInput
    setUserDetail((prevarray) => {
      return [
        ...prevarray,
        {
          name: name,
          age: age,
          collegeName: collegeName,
          id: Math.random().toString(),
        },
      ];
    });
  };
  const deleteItemHandler = (Id) => {
    setUserDetail((prevDetail) => {
      //rmove from array
      const updatedDetails = prevDetail.filter((user) => user.id !== Id);
      return updatedDetails;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (userDetail.length > 0) {
    content = (
      <FormList users={userDetail} deleteItemHandler={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <FormInput adduserHandler={adduserHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
