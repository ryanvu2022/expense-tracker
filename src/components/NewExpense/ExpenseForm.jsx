import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
   const [input, setInput] = useState({ title: "", amount: "", date: "" })

   const handleChange = (event) => {
      const { name, value } = event.target;
      setInput(prevInput => {
         return { ...prevInput, [name]: value };
      });
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      onSaveExpenseData(input);
      setInput({ title: "", amount: "", date: "" });
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input 
                  type="text" 
                  name="title" 
                  onChange={handleChange} 
                  value={input.title}
               />
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input 
                  type="number" 
                  name="amount" 
                  onChange={handleChange} 
                  value={input.amount}
                  min="0.01" step="0.01" 
               />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input 
                  type="date" 
                  name="date" 
                  onChange={handleChange} 
                  value={input.date}
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
         </div>
      </form>
   )
}

export default ExpenseForm;