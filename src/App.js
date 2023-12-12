import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const add = function () {
    setCount(count + 1);
  };

  const sub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={sub}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
      {count !== 0 ? <div> {count} is {count % 2 === 0 ? 'Even' : 'Odd'} </div> : null}
    </div>
  );
}

export default App;
