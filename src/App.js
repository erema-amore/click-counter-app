import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickButton from './components/ClickButton';

function App() {
  return (
    <div className="App">
      <h1>Click Counter App</h1>
      <ClickCounter />
      <ClickButton />
    </div>
  );
}

export default App;
