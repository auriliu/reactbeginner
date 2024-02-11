import "./user.css";
// import data from "user.json";
import { UserCard } from "./UserCard";

function App() {
  return (
    <div>
      <UserCard name="marcus" age={22} address="bebaimiu 123" phone={123} />
      <UserCard name="aurelius" age={17} address="laimiu 456" phone={772} />
    </div>
  );
}

export default App;
