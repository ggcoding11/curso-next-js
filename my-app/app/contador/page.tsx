"use client";

import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button onClick={() => setContador((contador) => contador + 1)}>
        Incrementar
      </button>
    </div>
  );
};

export default Contador;
