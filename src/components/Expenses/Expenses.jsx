import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {

   return (
      <Card className="expenses">
         <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].amount} />
         <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].amount} />
         <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].amount}/>
         <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].amount}/>
      </Card>
   )
}

export default Expenses;