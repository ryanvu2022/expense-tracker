import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
   const [filteredYear, setFilteredYear] = useState("2023");

   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
   }

   const filteredExpenses = expenses.filter(item => new Date(item.date).getFullYear().toString() === filteredYear)

   return (
      <Card className="expenses">
         <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}             
         />
         <ExpensesList items={filteredExpenses}/>        
      </Card> 
   )
}

export default Expenses;