import { useState } from "react";
import UseEffectDemo from "./components/UseEffectDemo";


function App() {

  const [count, setCount] = useState(0);

  const handleClickEvenvt = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1> {count} </h1>
      <button onClick={handleClickEvenvt}> + </button>
      <UseEffectDemo count={count} />
    </>
  );
}

export default App;
