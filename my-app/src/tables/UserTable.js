import React, { useContext } from 'react'
import UserContext, { UserConsumer } from '../useContext';
import testContext from './testContext';
const UserTable = props => {

    const deletingUser = user => {
        props.deleteUser(user.id)
    }
    const editingRow = user => {
        props.editRow(user)
    }
    const users = React.useContext(UserContext);
    // console.log('---Users', users)
    const renderUsersData =
        users.map(user =>
            <p key={user.id}>
                {user.name}
            </p>
        );

    return (
        <div>
            {/*<UserConsumer>*/}

            <div>
                {renderUsersData}
            </div>
            {/*</UserConsumer>*/}
            < table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="button muted-button" onClick={() => editingRow(user)}>Edit</button>
                                    <button className="button muted-button" onClick={() => deletingUser(user)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                            <tr>
                                <td colSpan={3}>No Users</td>
                            </tr>
                        )}


                </tbody>
            </table >
        </div>
    )
}

//Using the Context First Approach
// That's the most basic approach of using React's Context API with a single top-level Provider component and one Consumer component in a React child component sitting somewhere below
/*<UserConsumer>

                    {users => (
                        users.map(user => (
                            <p key={user.id}>
                                {user.name}
                            </p>
                        ))
                    )}
            </UserConsumer>*/



//Using the Context Second Approach. 
// React's useContext just uses the Context object -- which you have created before -- to retrieve the most recent value from it. Using the React Hooks instead of the Consumer component, makes the code more readable, less verbose, and doesn't introduce a kinda artificial component -- the Consumer component }
// const users = React.useContext(UserContext);
/*<div>
     {users.map(user => (
                    <p key={user.id}>
                        {user.name}
                    </p>
                ))}
</div>*/

export default UserTable