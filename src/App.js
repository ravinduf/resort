import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';

function App() {
  return (
    <div className="App">
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
     
    </div>
  );
}

export default App;
