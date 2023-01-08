import React from 'react'

//COMPONENTS
import ExpensiveItem from '../ExpensiveItem/ExpensiveItem';

//STYLES
import './ExpensesList.sass'

const ExpensesList = props =>{
  
    if(props.items.length === 0 ){
     return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => 
                <ExpensiveItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                />
            )}
        </ul>
    );
}
export default ExpensesList;