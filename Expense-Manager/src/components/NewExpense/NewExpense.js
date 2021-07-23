import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseHandler = (expense) => {
    props.onNewExpense({
      ...expense,
      id: Math.random().toString(),
    });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
