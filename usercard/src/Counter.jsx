import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(2);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return <h1 onClick={handleClick}>{count}</h1>;
}
