//

import "./Todo.css";
import { useState } from "react";

export function NewItem({ item, key, handleDelete }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{item}</p>
      <button onClick={() => handleDelete(key)}>delete</button>
    </li>
  );
}

export function Todo() {
  const [newItem, setNewItem] = useState("");
  const [allItems, setAllItems] = useState([]);

  function handleDelete(index) {
    const updatedItems = allItems.filter((_, i) => i !== index);
    setAllItems(updatedItems);
  }

  function addToTheList(newItem) {
    if (newItem.trim() !== "") {
      setAllItems((prev) => [...prev, newItem]);
      setNewItem("");
    }
  }

  return (
    <>
      <ul>
        {allItems.map((item, index) => (
          <NewItem key={index} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
      <div>
        <h1>to do list</h1>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="add new item..."
        />
        <button onClick={() => addToTheList(newItem)} disabled={!newItem}>
          add todo
        </button>
      </div>
    </>
  );
}
