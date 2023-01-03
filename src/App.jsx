import Expenses from "./components/Expenses/Expenses";
import expenses from "./components/data";

const App = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
