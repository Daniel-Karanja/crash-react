import React, { useState } from "react";

const StateButton = () => {
  const [age, setAge] = useState(0);
  const [cat, setCat] = useState({ age: 23, name: "kelly" });

  function increment() {
    setCat({ ...cat, age: cat.age + 1 });
    setAge(age + 1);
  }

  function decrement() {
    setAge(age - 1);
  }

  return (
    <div>
      <button
        onClick={() => increment()}
        className="w3-button w3-ripple w3-round w3-margin-left w3-margin-right w3-blue"
      >
        Increment
      </button>
      <span className="w3-xxlarge w3-margin-left w3-margin-right">{age}</span>
      <button
        onClick={() => decrement()}
        className="w3-button w3-ripple w3-round w3-margin-left w3-margin-right w3-red"
      >
        Decrement
      </button>
      <div>
        <h1> Cat Name: {cat.name}</h1>
        <h2>Cat Age: {cat.age}</h2>
      </div>
    </div>
  );
};

export default StateButton;
