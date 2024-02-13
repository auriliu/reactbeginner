import { useState } from "react";
import { Child } from "./Child";
import { Api } from "./Api";

export default function App() {
  // const [show, setShow] = useState(true)

  // const childComponent = show ? <Child /> : null

  return (
    <>
      <div>{<Api />}</div>
      <div>
        {/* <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {childComponent} */}
      </div>
    </>
  );
}
