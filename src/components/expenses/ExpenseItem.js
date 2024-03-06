// import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate.js";
import Card from "../ui/Card.js";

const ExpenseItem = (props) => {
  // const [title, setTitle]=useState(props.title); //inside component function, not nested functions

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log("click");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseItemDate date={props.date}></ExpenseItemDate>
        <h2>{props.title}</h2>
        <div className="expense-item_description">
          <div className="expense-item_price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
