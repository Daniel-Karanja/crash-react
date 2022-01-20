import React, { useState } from "react";
import { Bar1, Bar2 } from "./bars";

const Nav = () => {
  const [page, setPage] = useState(0);

  function nav(n) {
    setPage(n);
  }
  return (
    <div>
      <h1>Hi AM NAv</h1>
      <div>
        <button
          className="w3-button w3-round w3-blue w3-ripple w3-margin-left w3-margin-right "
          onClick={() => nav(1)}
        >
          Home
        </button>

        <button
          className="w3-button w3-round w3-blue w3-ripple w3-margin-left w3-margin-right "
          onClick={() => nav(2)}
        >
          About
        </button>
      </div>
      <div>
        <Switch n={page} />
      </div>
    </div>
  );
};

const Switch = ({ n }) => {
  if (n == 1) {
    return <Bar1 />;
  }

  if (n == 2) {
    return <Bar2 />;
  }
  return null;
};

export default Nav;
