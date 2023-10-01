import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // console.log(classes,);
  return <div className={classes}>{props.children}</div>;
  //childern is content of custom component
};

export default Card;
