import React from 'react';
import 'bulma/css/bulma.min.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="container is-fluid">
      <h1 className="title has-text-centered">25 + 5 Clock</h1>
      <Clock />
    </div>
  );
}

export default App;
