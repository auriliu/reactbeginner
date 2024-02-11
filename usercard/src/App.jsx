import "./user.css";
// import data from "user.json";
import { UserCard } from "./UserCard";
import user from "./user.json";

function App() {
  return (
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
      <UserCard
        name="aurelius meridius"
        age={17}
        address="laimiu 456"
        phone={772}
      />
    </div>
  );
}

export default App;
