import React from "react";

const ProductList = (props) => {
  return (
    <div>
      {props.data.map((data) => (
        <li key={data.id}>
          {`${data.id} - ${data.price} - ${data.productName}  `}
          <button onClick={() => props.deleteUserHandler(data.id)}>
            DELETE
          </button>
        </li>
      ))}
    </div>
  );
};

export default ProductList;
