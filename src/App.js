import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from './components/Button';

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
      <Button onClick={sub}>-</Button>
      <span>{count}</span>
      <Button onClick={add}>+</Button>
      {count !== 0 ? (
        <div>
          {' '}
          {count} is {count % 2 === 0 ? 'Even' : 'Odd'}{' '}
        </div>
      ) : null}
    </div>
  );
}

export default App;
