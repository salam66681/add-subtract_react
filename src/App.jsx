import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);
  const addNumber = (e) => {
    setResult(result + number);
    setNumber("");
    e.preventDefault();
  }
  const subtractNumber = (e) => {
    setResult(result - number);
    setNumber("");
    e.preventDefault();
  }
  const clearAll = (e) => {
    setResult(Number("")) ,
      setNumber(""),
      e.preventDefault();
  };


  return (
    <main>
      <div>
        <form>
          <h2>Enter a value to Add/Subtract</h2>
          <input type='number' id='entry' className='formData' placeholder='Enter a Number' value={number}
            onChange={(e) => setNumber(Number(e.target.value))} />
          <button onClick={addNumber} className='formData' id='add'>Add</button>
          <button id='subtract' onClick={subtractNumber} className='formData'>Subtract</button>
        </form>
        <h2 id='result'>Result:{result } <br />
          <button id='clear' onClick={clearAll}>Clear All</button>
        </h2>
      </div>
    </main>
  );
}

export default App;
