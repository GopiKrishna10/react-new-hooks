import React, { useState, useContext } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
// import { ColorContext } from './colorContext';
import './App.css';

const App = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const initialFormState = {
    id: null, name: '', username: ''
  }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user]);
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
    setEditing(false);
  }
  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  // const colors = {
  //   blue: "#03619c",
  //   yellow: "#8c8f03",
  //   red: "#9c0312"
  // }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          {/*<ColorContext.Provider value={colors}>*/}
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
          {/*</ColorContext.Provider>*/}
        </div>
      </div>
    </div>
  )
}

export default App;



