

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-center'>FIFA Player Cards</h1>
        <PlayersList />
      </header>
    </div>
  );
}

export default App;
