//

import { useState } from "react";

export function NameAge() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(2);
  const minimumAge = 2;
  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button
          onClick={() => setAge((prev) => Math.max(prev - 1, minimumAge))}
        >
          -
        </button>
        <span>{age}</span>
        <button onClick={() => setAge((prev) => prev + 1)}>+</button>
      </div>
      <p>
        My name is {name} and I am {age} years old.
      </p>
    </div>
  );
}
