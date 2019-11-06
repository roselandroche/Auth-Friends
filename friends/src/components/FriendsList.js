import React, { useEffect, useState } from 'react';
import api from '../utils/api';

function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        api()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h3>Friends List</h3>
            {friends.map((item) => {
                return (
                    <div className='friend'>
                        <h5>{item.name}</h5>
                        <h5>{item.age}</h5>
                        <h5>{item.email}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList;