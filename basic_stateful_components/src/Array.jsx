//
import { useState } from "react";

export function Array() {
  const [array, setArray] = useState(["A", "B", "C"]);

  function removeFirstLetter() {
    setArray((prev) => prev.slice(1));
  }
  function addToTheFront() {
    const newElement = "W";
    setArray((prev) => [newElement, ...prev]);
  }
  function addToTheBack() {
    const newElement = "Q";
    setArray((prev) => [...prev, newElement]);
  }
  function clear() {
    setArray([]);
  }
  function reset() {
    setArray(["A", "B", "C"]);
  }
  //   remove specific letter
  //   cl that index.
  function removeSpecific(letter) {
    setArray((prev) => prev.filter((element) => element !== letter));
  }

  return (
    <div>
      <div>
        <p>the elements</p>
        <div>{array}</div>
      </div>
      <button onClick={removeFirstLetter} disabled={array.length < 1}>
        remove first letter
      </button>
      <button onClick={addToTheFront}>add to the front</button>
      <button onClick={addToTheBack}>add to the back</button>
      <button onClick={clear}>clear the array</button>
      <button onClick={reset}>reset the array</button>
      <button onClick={() => removeSpecific("B")}>remove B's</button>
    </div>
  );
}
