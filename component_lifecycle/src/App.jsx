//
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  // everytime useEffect runs, it adds an eventListener. and another one. and another one...
  // remove eventListener, everytime useEffect reruns.
  // useEffect return f() runs everytime useEffect reruns.
  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };

    document.addEventListener("resize", () => {
      handler;
    });

    return () => {
      document.removeEventListener("resize", handler);
    };
  }, []);
  return (
    <>
      <h1>{width}</h1>
    </>
  );
}

export default App;
