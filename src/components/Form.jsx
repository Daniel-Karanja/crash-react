import React, { useState, useEffect } from "react";

const MyForm = () => {
  let int = {
    name: "",
    age: "",
  };
  const [inputs, setInputs] = useState(int);

  useEffect(() => {
    console.log(inputs);
  });

  function submit() {
    console.log(inputs);
  }

  function clear() {
    setInputs(int);
  }

  return (
    <div>
      <h1> My Cool Form</h1>
      <div style={{ margin: "auto", width: "50%" }}>
        <div className="w3-card-4 w3-padding">
          <p>
            <label>Name</label>
            <input
              value={inputs.name}
              type="text"
              className="w3-input w3-border"
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
          </p>
          <p>
            <label>Age</label>
            <input
              value={inputs.age}
              type="text"
              className="w3-input w3-border"
              onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
            />
          </p>
          <div className="w3-margin-top w3-center">
            <button
              className="w3-button w3-round w3-blue w3-ripple"
              onClick={() => submit()}
            >
              Submit
            </button>
            <button
              className="w3-button w3-round w3-red w3-ripple w3-margin-left w3-margin-right"
              onClick={() => clear()}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
