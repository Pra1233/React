import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";
// import ReactDOM from "react-dom";
// const Backdrop = (props) => {
//   return <div onClick={props.onConfirm} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <ul className="goal-list">
//       {props.items.map((goal) => (
//         <CourseGoalItem
//           key={goal.id}
//           id={goal.id}
//           onDelete={props.onDeleteItem} //course GoalItems
//         >
//           {goal.text}
//         </CourseGoalItem>
//       ))}
//     </ul>
//   );
// };

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem} //course GoalItems
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

// const CourseGoalList = (props) => {
//   return (
//     <>
//       {ReactDOM.createPortal(
//         <Backdrop onClick={props.onConfirm} />,
//         document.getElementById("backdrop-root")
//       )}

//       {ReactDOM.createPortal(
//         <ModalOverlay />,
//         document.getElementById("overlay-root")
//       )}
//     </>
//   );
// };
export default CourseGoalList;
