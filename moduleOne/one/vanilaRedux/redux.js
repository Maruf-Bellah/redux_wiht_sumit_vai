// select dom elements
const counterEl = document.getElementById("count");
const incrementEl = document.getElementById("increase");
const decrementEl = document.getElementById("decrease");

// initial state

const initialState = {
  value: 0,
};

// create reducer function

function counterReducer(state = initialState, action) {
  if (action.type === "increase") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrease") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

// create store

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value;
};

render();

store.subscribe(render);

incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increase",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrease",
  });
});
