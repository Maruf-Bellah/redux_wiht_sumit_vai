import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card text-center" style={{ width: "40rem" }}>
        <div className="card-body">
          <h1 className="mb-5 fw-bolder">{count}</h1>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-primary me-2 text-uppercase fw-bolder"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-danger me-2 text-uppercase fw-bolder"
          >
            decrement
          </button>

          <button
            onClick={() => dispatch(incrementByAmount())}
            className="btn btn-success text-end me-2 text-uppercase fw-bolder"
          >
            add number
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="btn btn-success text-end text-uppercase fw-bolder"
          >
            add number
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
