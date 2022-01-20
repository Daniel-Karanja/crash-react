import React, { useEffect, useState } from "react";

const EffectComp = () => {
  const [age, setAge] = useState(0);
  const [cat, setCat] = useState({ age: 23, name: "kelly" });
  const [bColor, setbColor] = useState("w3-blue");
  const [wSize, setWSize] = useState(1080);
  const [k, setk] = useState(0);

  function increment() {
    setCat({ ...cat, age: cat.age + 1 });
    setAge(age + 1);
  }

  function decrement() {
    setAge(age - 1);
  }

  function r() {
    console.log("Jeeas");
  }

  useEffect(() => {
    if (age > 5) {
      setbColor("w3-green");
    }
  }, [age]);

  useEffect(() => {
    function handleResize() {
      setWSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <StateButton
        age={age}
        cat={cat}
        increment={increment}
        decrement={decrement}
        bColor={bColor}
      />
      <h1>The Window Size: {wSize}</h1>
    </div>
  );
};

const StateButton = ({ age, cat, increment, decrement, bColor }) => {
  return (
    <div>
      <button
        onClick={() => increment()}
        className={`w3-button w3-ripple w3-round w3-margin-left w3-margin-right ${bColor}`}
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

export default EffectComp;
