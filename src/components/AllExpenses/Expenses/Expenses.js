import React, { useState } from "react";

// COMPONENTS
import ExpensiveItem from "../ExpensiveItem/ExpensiveItem";
import ExpenseChart from "../ExpenseChart";
import ExpensesFilter from '../ExpensesFilter/ExpenseFilter'
import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../../UI/Card/Card";

//STYLES
import './Expenses.sass'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]=useState('2020')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)

  }
  const filteredExpenses = props.items.filter((el)=> {
    return el.date.getFullYear().toString() === filteredYear;
  })
 
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* add code dynamically */}
      <ExpenseChart expenses={filteredExpenses}/>
     <ExpensesList items={filteredExpenses}/>
      {/* <ExpensiveItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpensiveItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpensiveItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpensiveItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}
export default Expenses;
