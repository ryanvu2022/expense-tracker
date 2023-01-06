import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {

   const saveExpenseDataHandler = (input) => {
      const expenseData = {
         ...input,
         id: Math.random().toString()
      };
      onAddExpense(expenseData);
   };

   return (
      <div className="new-expense">
         <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
   )
}

export default NewExpense;