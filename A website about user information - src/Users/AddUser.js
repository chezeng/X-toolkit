import React, {useState, useRef} from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name (non-empty values).'
            });
            return;
        }

        if (+enteredUserAge < 1) {
            setError({
                title: 'Inalid age',
                message: 'Please enter a valid age (value > 0).'
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredUserAge);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }
    
    const errorHandler = () => {
        setError(null);
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const userAgeChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }


    return (
        <Wrapper>
        {error && <ErrorModal title={error.title}
            message={error.message}
            onConfirm={errorHandler}>
        </ErrorModal>}

        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    // value={enteredUsername} 
                    id="username" 
                    type="text" 
                    // onChange={usernameChangeHandler}
                    ref = {nameInputRef}
                />
                <label htmlFor="age">
                    Age (Years)
                    </label>
                <input 
                    // value={enteredAge} 
                    id="age" 
                    type="number" 
                    // onChange={userAgeChangeHandler}
                    ref = {ageInputRef}
                />                
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </Wrapper>
    );


};

export default AddUser;