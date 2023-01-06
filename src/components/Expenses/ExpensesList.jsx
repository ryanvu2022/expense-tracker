import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
   if (items.length === 0) 
      return <h2 className="expenses-list__fallback">No expenses found.</h2>

   return (
      <ul className="expenses-list">
         {items.map(item =>
            <ExpenseItem 
               key={item.id}
               date={item.date}
               title={item.title}
               price={item.amount}
            />
         )}
      </ul>
   )
}

export default ExpensesList;