import { useState } from "react";
import produce from "immer";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ase", amount: 10, category: "Utilities" },
    { id: 4, description: "aw3", amount: 10, category: "Utilities" },
    { id: 5, description: "adf", amount: 10, category: "Utilities" },
  ]);

  const handleClick = () => {};

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
