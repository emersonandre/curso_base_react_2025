import { useState } from "react";
export function App() {
  const [list, setList] = useState([
    { id: 1, label: "Fazer Café" },
    { id: 2, label: "Fazer Almoço" },
    { id: 3, label: "Fazer Janta" },
  ]);

  return (
    <>
      <input type="text" />
      <button>Adicionar</button>
      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </>
  );
}
