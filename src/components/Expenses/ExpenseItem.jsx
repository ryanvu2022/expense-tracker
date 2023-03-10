import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ date, title, price }) => {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${price}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem;