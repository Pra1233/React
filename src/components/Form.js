import React, { useRef, useState } from "react";

const Form = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const productNameRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const price = priceRef.current.value;
    const productName = productNameRef.current.value;
    console.log(id, price, productName);
    const obj = {
      id,
      price,
      productName,
    };
    props.adduserHandler(obj);

    idRef.current.value = "";
    priceRef.current.value = "";
    productNameRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Product ID</label>
        <input type="number" placeholder="Enter ID" ref={idRef} />

        <label>Selling Price :</label>
        <input type="number" placeholder="Enter Selling Price" ref={priceRef} />

        <label>Product Name :</label>
        <input
          type="text"
          placeholder="Enter Product Name"
          ref={productNameRef}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Form;
