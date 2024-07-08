import './App.css';
// import Expenses from './ReactStudy/Expenses/Expense.js';
import React, { useState } from "react";
import {Expenses1} from './ReactStudy/Expenses/Expense.js';
import './ReactStudy/Expenses/Expense.css';
import NewExpense from './ReactStudy/NewExpense/NewExpense';
// Parameters can only be passed from Parent to Child or Child to Parent with methods; however, they cannot be skipped with the intermediate classes.

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },

  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },

  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() { 

  // return ( => Loose form
  //     <div>
  //       <h2>Let's get started!</h2>
  //       <p>This is also visible!</p>
  //       <div className="expenses">
  //         <Expenses thing={expenses[0]}/>
  //         <Expenses thing={expenses[1]}/>
  //         <Expenses thing={expenses[2]}/>
  //         <Expenses thing={expenses[3]}/>
  //       </div>
  //    </div>
  // );

  // return React.createElement( => This is react syntax
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let' s get started!"),
  //   React.createElement('p', {}, "This is also visible!"),
  //   React.createElement(Expenses1, {thing: expenses}, ),
  // );

    // return <div> => Tight form
    //        <h2>Let's get started!</h2>
    //        <p>This is also visible!</p>
    //       <div className="expenses">
    //         <Expenses1 thing = {expenses}></Expenses1>
    //       </div>
    //   </div>

  // const [formerYear, setYear] = useState();

  // const setNewYear = aYear => {
  //   setYear(aYear);
  // }
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <div className='expenses'>
        {/* setNewYea = {setNewYear} thing={expenses.filter(expense => expense.date.getFullYear().toString() === formerYear)} */}
        <Expenses1 thing={expenses} />
      </div>
    </div>
  )

}

export default App;
