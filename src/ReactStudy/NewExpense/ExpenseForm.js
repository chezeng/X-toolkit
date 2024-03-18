import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // document.getElementById('').addEventListener('click', () => {})
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })


        // IMPORTANT!!!!!!!!
        // THE ABOVE ONE IS RECOMMENDED WHEN YOU NEED TO REPLACE THE FORMER STATE!
        // REACT WILL GUARANTEE THE STATE COPIED WILL ALWAYS BE THE LASTEST STATE!

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate(''); // TWO WAY BINDING -> THE VALUE WILL BE CLEAR AFTER RENDERING THE OBEJCT WHICH
        // CONTAINS THE ORIGINAL VALUE
    };

    const [formerValue, setValue] = useState('0');

    const goBack = () => {
        setValue('0');
    }

    const goIn = () => {
        setValue('1');
    }

    const content = () => {
        if (formerValue === '0')
            return (<button onClick={goIn}>Add New Expense</button> );
        if (formerValue === '1')
            return (
                <form onSubmit={submitHandler}>
                <br></br>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={goBack}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form >
            );
    }

    return (
    <div>
        {content()}

    </div>
    );
};

export default ExpenseForm;