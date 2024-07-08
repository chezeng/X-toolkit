
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// function Expenses(props){
//      return (
//       <div>
//          <ExpenseItem 
//          title={props.thing.title} 
//          amount={props.thing.amount} 
//          date={props.thing.date}></ExpenseItem>
//       </div>
//      )
// }

// export default Expenses;


function Expenses1(props){
   const [filterYear, selectFilterYear] = useState('Select A Year');

   const filterThings = selectedYear =>{
      selectFilterYear(selectedYear);
      // props.setNewYea(selectedYear);
   };

   const filteredExpenses = props.thing.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear;
   });

   

   return (
      <Card className="expenses">
         <ExpensesFilter formerOne={filterYear} filterOne={filterThings}/>
         <ExpensesChart expenses={filteredExpenses} />
         <ExpensesList thing={filteredExpenses}/>

         {/* <ExpenseItem
         title={props.thing[0].title}
         amount={props.thing[0].amount}
         date={props.thing[0].date}></ExpenseItem>
         <ExpenseItem
         title={props.thing[1].title}
         amount={props.thing[1].amount}
         date={props.thing[1].date}></ExpenseItem>
         <ExpenseItem
         title={props.thing[2].title}
         amount={props.thing[2].amount}
         date={props.thing[2].date}></ExpenseItem>
         <ExpenseItem
         title={props.thing[3].title}
         amount={props.thing[3].amount}
         date={props.thing[3].date}></ExpenseItem> */}
  
      </Card>
   );

}

export {Expenses1};
