import React, { useState } from 'react';

function LogIn(props) {
    // save users data in state
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    // control inputs 
    const handleChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    // control inputs
    const handleSubmit = event => {
        event.preventDefault();

        // sign in api post call here

    }

    return (
        <form onSubmit={}>
            <input 
                type='text'
                name='username'
                placeholder='Username'
                value={data.username}
                onChange={handleChange}
            />
            <input 
                type='password'
                name='password'
                placeholder='Password'
                value={data.password}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default LogIn;