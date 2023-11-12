import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter/Counter";
import State from "./component/State/State";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  // const totalCount = () =>{
  //   return state.reduce((total, counter)=> total + counter.count, 0)
  // }

  const totalCount = () => {
    return state.reduce((total, counter) => {
      return total + counter.count;
    }, 0);
  };

  const increment = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });
    setState(updatedCounter);
  };

  const decrement = (id) => {
    console.log(id);
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setState(updatedCounter);
  };

  return (
    <div>
      {state.map((count) => (
        <Counter
          key={count.id}
          id={count.id}
          count={count.count}
          increment={increment}
          decrement={decrement}
        />
      ))}

      <State count={totalCount()} />
    </div>
  );
}

export default App;
