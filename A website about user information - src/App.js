import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
      setUsersList((prevUsersList) => {
          return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
      });
  }

  return (
    <React.Fragment>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
