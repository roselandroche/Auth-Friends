import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import { getToken } from './utils/api'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import NewFriend from './components/NewFriend';

function App() {
  const signedIn = getToken();
  return (
    <div>
      <nav>
        {!signedIn && <Link to='/login'>Log In</Link>}
        {signedIn && <Link to='/friends'>Friends List</Link>}
        {signedIn && <Link to='/newfriend'>New Friend</Link>}
      </nav>

      <Route exact path='/login' component={LogIn} />
      <PrivateRoute exact path='/friends' component={FriendsList} />
      <PrivateRoute exact path='/newfriend' component={NewFriend} />
    </div>
  );
}

export default withRouter(App);
