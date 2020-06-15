import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import valuecontext from './valuecontext';

function App() {
  //let [number, setNumber] = useState(45);
  let value = useState(48);
  return (
    <valuecontext.Provider value={value}>
      <div >
        Hello World
        <Parent></Parent>
      </div>
    </valuecontext.Provider>
    
  );
}

export default App;