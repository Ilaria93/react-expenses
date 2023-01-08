import React, { useState } from "react";
import Expenses from "./components/AllExpenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses)
  
  const addExpenseHandler= expense => {
    setExpenses((prevExpense) =>{
      return [expense, ...prevExpense]
    });

  };

// Alterntive code
// How react works
// return React.createElement('div', {}, 
//   React.createElement('h2', {}, "Let's get Started!"),
//   React.createElement(Expenses,{items: expenses})
// )

//JSX CODE conveniant mode
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
