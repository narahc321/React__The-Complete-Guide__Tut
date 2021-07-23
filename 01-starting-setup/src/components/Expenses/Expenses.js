import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const selectFilterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filterYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onSelectFilterYear={selectFilterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
