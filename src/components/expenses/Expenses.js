import Card from "../ui/Card.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("All");
  const yearFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    // console.log(selectedYear);
  };
  let filteredExpenses;
  if (filterYear === "All") {
    filteredExpenses = props.expenses;
  } else {
    filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filterYear;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearFilterChange={yearFilterHandler}
        selectedYear={filterYear}
      />
      {filterYear !== "All" && <ExpensesChart expenses={filteredExpenses} />}
      <ExpensesList filteredExpenses={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}      same problem, too much logic here
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}
      {/* {filteredExpenses.length === 0 ? ( too much logic in jsx
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
