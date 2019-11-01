import React from 'react';
import { Link, Route } from 'react-router-dom';

import LogIn from './components/LogIn';
import { getToken } from './utils/api'

function App() {
  const signedIn = getToken();
  return (
    <div className="App">
      <LogIn />
    </div>
  );
}

export default App;
