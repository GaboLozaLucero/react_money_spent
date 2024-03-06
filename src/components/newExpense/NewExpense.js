import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../ui/Card";
import { useState } from "react";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onSaveExpense(expenseData);
    setDisplayForm(false);
  };
  const dismissForm = () => {
    setDisplayForm(false);
  };
  const showForm = () => {
    setDisplayForm(true);
  };
  let formButton = <button onClick={showForm}>Add new expense</button>;
  if (displayForm === true) {
    formButton = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        dismissForm={dismissForm}
      />
    );
  }
  return <Card className="new-expense">{formButton}</Card>;
};

export default NewExpense;
