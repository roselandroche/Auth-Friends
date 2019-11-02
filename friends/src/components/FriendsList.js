import React, { useEffect, useState } from 'react';
import api from '../utils/api';

function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        api()
            .get('/api/friends')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>Friends List</div>
    )
}

export default FriendsList;