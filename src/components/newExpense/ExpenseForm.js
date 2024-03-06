import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput]=useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({  //may depend in a outdated snapshot from the previous object state
    //   ...userInput, //so don't use this form
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((previousState)=>{ //**CORRECT ALTERNATIVE TO USE JUST ONE STATE!!**
    //   return {...previousState, enteredTitle: event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
          <div className="new-expense_control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense_control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense_control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense_actions">
            <button onClick={props.dismissForm}>Cancel</button>
            <button type="submit">Add expense</button>
          </div>
        </div>
      </form>
      
  );
};

export default ExpenseForm;
