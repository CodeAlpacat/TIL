import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './counter';
import authSlice from './auth';

//counter, auth 각각의 slice.reducer(변화시키는것)을 저장소에 적용
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;













// // 원래 redux로 구현한 Counter

// const countReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   } else if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }

//   return state;
// };

// const store = configureStore({ reducer: counterSlice.reducer});

// export const counterActions = counterSlice.actions
// export default store;

// const countSubscriber = () => {
//   const latestState = store.getState()
// }

// store.subscribe(countSubscriber)

// store.dispatch({type: 'increment'});
// store.dispatch({ type: "decrement" });
