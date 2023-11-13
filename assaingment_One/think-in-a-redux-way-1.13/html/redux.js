function addedMatches() {
  const addDiv = document.createElement("div");
  addDiv.innerHTML = `
      <div class="match">
          <div class="wrapper">
            <button class="lws-delete">
              <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match 1</h3>
          </div>
          <div class="inc-dec">
            <form class="incrementForm">
              <h4>Increment</h4>
              <input
                ${(id = "increment")}
                type="number"
                name="increment"
                class="lws-increment"
              />
            </form>
            <form class="decrementForm">
              <h4>Decrement</h4>
              <input
                 ${(id = "decrement")}
                type="number"
                name="decrement"
                class="lws-decrement"
              />
            </form>
          </div>
          <div class="numbers">
            <h2 ${(id = "total")} class="lws-singleResult">120</h2>
          </div>
        </div>
    
    `;
  const currentDiv = document.getElementById("createdDiv");
  currentDiv.appendChild(addDiv);
}

// const decrementEl = document.getElementById("decrement");

// // get increment  data

// function incrementNumber() {
//   const incrementEl = document.getElementById("increment").value;
//   const incrementToNumber = parseInt(incrementEl) || 0;

//   const totalEl = document.getElementById("total");
//   const totalToNumber = parseInt(totalEl.innerText);

//   const displayTotal = totalToNumber + incrementToNumber;
//   totalEl.innerText = displayTotal;
// }

// // click increment key

// function incrementHandleKeyPress(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     incrementNumber();
//   }
// }

// // get decrement  data

// function decrementNumber() {
//   const decrementEl = document.getElementById("decrement").value;
//   const decrementToNumber = parseInt(decrementEl) || 0;

//   const totalEl = document.getElementById("total");
//   const totalToNumber = parseInt(totalEl.innerText);

//   const displayTotal = totalToNumber - decrementToNumber;
//   totalEl.innerText = displayTotal;
// }

// // click decrement key

// function decrementHandleKeyPress(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     decrementNumber();
//   }
// }

// // reset data ===========

// function resetData() {
//   const decrementEl = document.getElementById("decrement").value;
//   decrementEl = "";
// }

const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const totalEl = document.getElementById("total");
const resetEl = document.getElementById("reset");

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

const increment = () => {
  let incValue = parseInt(incrementEl.value);
  return {
    type: INCREMENT,
    payload: incValue,
  };
};

const decrement = () => {
  let decValue = parseInt(decrementEl.value);
  return {
    type: DECREMENT,
    payload: decValue,
  };
};

const reset = () => {
  return {
    type: RESET,
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
  } else if (action.type === RESET) {
    return initialState;
  } else {
    return state;
  }
}

// create store

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  totalEl.innerText = state.value.toString();
};

render();

store.subscribe(render);

function incrementHandleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    store.dispatch(increment());
  }
}

function decrementHandleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    store.dispatch(decrement());
  }
}

resetEl.addEventListener("click", () => {
  store.dispatch(reset());
  //   store.dispatch(decrement(""));
});
