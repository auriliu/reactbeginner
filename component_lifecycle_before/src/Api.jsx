import { useState, useEffect } from "react";

// https://jsonplaceholder.typicode.com/users

export function Api() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading();
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);

  //   console.log(users);
  let jsx;

  if (loading) {
    jsx = <h2>loading...</h2>;
  } else if (error != null) {
    jsx = <h2>error!</h2>;
  } else {
    jsx = JSON.stringify(users);
  }

  return (
    <div>
      <h1>{users}</h1>
      {jsx}
    </div>
  );
}
