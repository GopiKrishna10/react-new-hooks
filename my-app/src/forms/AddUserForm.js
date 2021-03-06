import React, { useState } from 'react'

const AddUserForm = props => {
    const initialFormState = { id: null, name: '', username: '' };
    const [user, setUser] = useState(initialFormState);

    const handleInputChnage = event => {
        const {name, value} = event.target
        setUser({ ...user, [name]: value });
    }
    const submitForm = event => {
        event.preventDefault();
        if (!user.name || !user.username) return
        props.addUser(user);
        setUser(initialFormState);
    }
    return (
        <form onSubmit={submitForm}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChnage} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChnage}/>
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm