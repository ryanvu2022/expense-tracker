import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
   const [expanded, setExpanded] = useState(false);

   const saveExpenseDataHandler = (input) => {
      const expenseData = {
         ...input,
         id: Math.random().toString()
      };
      onAddExpense(expenseData);
      toggleForm();
   };

   const toggleForm = () => {
      setExpanded(prevState => !prevState);
   }

   return (
      <div className="new-expense">
         {!expanded 
            ?  <button onClick={toggleForm}>Add New Expense</button>
            :  <ExpenseForm 
                  onSaveExpenseData={saveExpenseDataHandler}                   
                  onCloseForm={toggleForm}
               />
         }
      </div>
   )
   
}

export default NewExpense;