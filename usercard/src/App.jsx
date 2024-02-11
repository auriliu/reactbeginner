import "./user.css";
// import data from "user.json";
import { UserCard } from "./UserCard";
import user from "./user.json";
import { Counter } from "./Counter";

function App() {
  return (
    <>
      <Counter />
      <div>
        <UserCard
          name={user.name}
          age={user.age}
          address={user.address}
          phone={user.phoneNumber}
        />
        <UserCard
          name="maximus decimus"
          age={22}
          address="bebaimiu 123"
          phone={123}
        />
      </div>
    </>
  );
}

export default App;
