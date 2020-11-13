import React from 'react';

import './App.css';
import Login from './Login';

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID)
  return (
    <div className="app">

      {/*Spotify Logo*/}

      {/**Login with spotify button */}
      <Login />
    </div>
  );
}

export default App;
