import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import expenses from "./components/data";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpensesList(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expensesList}/>
    </div>
  )
}

export default App;
