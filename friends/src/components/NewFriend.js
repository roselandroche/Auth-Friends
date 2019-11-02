import React, { useState } from 'react';
import api from '../utils/api';

function NewFriend(props) {
    const [newFriend, createNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: 1,
        email: '',
    })

    const handleChange = event => {
        createNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        api()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Make a New Friend!</label>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={newFriend.name}
                onChange={handleChange}
            />
            <input
                type='number'
                name='age'
                placeholder='Age'
                value={newFriend.age}
                onChange={handleChange}
            />
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={newFriend.email}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NewFriend;