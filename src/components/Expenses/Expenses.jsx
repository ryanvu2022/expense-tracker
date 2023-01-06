import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ expenses }) => {
   const [year, setYear] = useState(2023);

   const filterChangeHandler = (selectedYear) => {
      setYear(selectedYear);
   }

   return (
      <div>
         <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />
         <Card className="expenses">
            {expenses.map(item => (
               <ExpenseItem 
                  key={item.id}
                  date={item.date}
                  title={item.title}
                  price={item.amount}
               />
            ))}
         </Card>
      </div>
   )
}

export default Expenses;