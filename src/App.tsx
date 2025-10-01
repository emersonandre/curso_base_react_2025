import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  return (
    <>
      {hide && <p>Texto 1</p>}
      {!hide && <p>Texto 2</p>}
      {hide ? <p>Texto 1</p> : <p>Texto 2</p>}
      <button onClick={() => setCount(count + 1)}> contar {count} </button>
      <button onClick={() => setHide(!hide)}> Toggle </button>
    </>
  );
}
