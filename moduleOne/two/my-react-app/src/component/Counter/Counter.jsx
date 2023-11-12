import React, { useState } from "react";
import "../../App.css";

const Counter = ({ id, count, increment, decrement }) => {
  return (
    <div>
      <div class="first-div">
        <h1 id="count">{count}</h1>

        <button
          onClick={() => increment(id)}
          id="increase"
          className="button-style"
        >
          increase
        </button>
        <button
          onClick={() => decrement(id)}
          id="decrease"
          className="button-style"
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
