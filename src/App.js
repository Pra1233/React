import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import ProductList from "./components/ProductList";

function App() {
  const [userDetail, setUserDetail] = useState([]);

  const adduserHandler = (obj) => {
    setUserDetail((userDetail) => {
      return [
        ...userDetail,
        {
          id: obj.id,
          price: obj.price,
          productName: obj.productName,
        },
      ];
    });
  };

  const deleteUserHandler = (id) => {
    setUserDetail((userDetail) => {
      const updatedDetail = userDetail.filter((user) => user.id !== id);
      return updatedDetail;
    });
  };

  return (
    <div>
      <Form adduserHandler={adduserHandler} />
      <ProductList data={userDetail} deleteUserHandler={deleteUserHandler} />
    </div>
  );
}

export default App;
