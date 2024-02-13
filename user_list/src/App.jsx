{
  /* <h1>User List</h1>
<ul>
  <li>Leanne Graham</li>
  <li>Ervin Howell</li>
  <li>Clementine Bauch</li>
  <li>Patricia Lebsack</li>
  <li>Chelsey Dietrich</li>
  <li>Mrs. Dennis Schulist</li>
  <li>Kurtis Weissnat</li>
  <li>Nicholas Runolfsdottir V</li>
  <li>Glenna Reichert</li>
  <li>Clementina DuBuque</li>
</ul> */
}

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>user list</h1>
      <ul>
        {loading ? (
          <p>loading...</p>
        ) : (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
