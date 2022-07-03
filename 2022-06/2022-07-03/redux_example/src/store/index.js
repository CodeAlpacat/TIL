import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const countReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'toggle') { 
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
};

const store = createStore(countReducer);

export default store;

// const countSubscriber = () => {
//   const latestState = store.getState()
// }

// store.subscribe(countSubscriber)

// store.dispatch({type: 'increment'});
// store.dispatch({ type: "decrement" });
