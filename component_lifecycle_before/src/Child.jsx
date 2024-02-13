import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  // re-rendering if there were any changes
  useEffect(() => {
    console.log("re-rendering");
  });

  // rendering on mount only.
  useEffect(() => {
    console.log("hi");

    return () => {
      console.log("bye");
    };
  }, []);

  // rerendering when name changes.
  useEffect(() => {
    console.log("name has changed: " + name);
    document.title = name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
