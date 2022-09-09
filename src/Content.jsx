import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Clement");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    // setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleNameChange}>Click Me</button>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click</button>
    </main>
  );
};

export default Content;
