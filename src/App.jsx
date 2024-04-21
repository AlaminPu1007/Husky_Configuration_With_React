import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const updateCounter = () => setCount((prv) => prv);

  const decCounter = () => setCount((prv) => prv - 1);

  return (
    <>
      <div className="card">
        <button onClick={updateCounter}>+</button>
        <span style={{ padding: 20 }}>{count}</span>
        <button onClick={decCounter}>-</button>
      </div>
    </>
  );
}

export default App;
