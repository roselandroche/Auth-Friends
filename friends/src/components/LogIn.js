import React, { useState } from 'react';

import api from '../utils/api';

function LogIn(props) {
    // save users data in state
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    // save error data
    const [error, setError] = useState()

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
        api() 
            .post('/api/login', data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/api/friends')
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Log In</label>
            {error && <div className='error'>{error}</div>}
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