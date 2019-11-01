import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import { getToken } from './utils/api'
import FriendsList from './components/FriendsList';

function App() {
  const signedIn = getToken();
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/api/login'>Log In</Link>
        <Link to='/api/friends'>Friends List</Link>
      </nav>

      <Route exact path='/api/login' component={LogIn} />
    </div>
  );
}

export default App;
