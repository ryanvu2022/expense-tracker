import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
   const [filteredYear, setFilteredYear] = useState("2022");

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
         <ExpensesChart expenses={filteredExpenses}/>
         <ExpensesList items={filteredExpenses}/>        
      </Card> 
   )
}

export default Expenses;