// select dom element

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

const marufStore = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

marufStore();

store.subscribe(marufStore);

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

console.log("amr sonar bangla ami tomay valobashi");
