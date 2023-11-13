// select dom elements
const counterEl = document.getElementById("count");
const incrementEl = document.getElementById("increase");
const decrementEl = document.getElementById("decrease");

// action identifiers =================================

const INCREMENT = "increase";
const DECREMENT = "decrease";

// action creator =======================================

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: 2,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: 2,
  };
};
// initial state

const initialState = {
  value: 0,
};

// create reducer function

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
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
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});

// reduce sob somoy pure hote hobe impure hole cholbe na

// const state = {
//   value: 5,
// };

// function impure() {
//   return (state.value = state.value * 2);
// }

// console.log(impure());
// console.log(impure());
