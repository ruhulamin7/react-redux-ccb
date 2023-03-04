import { INCREMENT, DECREMENT, RESET } from './actionTypes';

const initialState = {
  count: 0,
};

const hookCounterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload.value,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - payload.value,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default hookCounterReducer;
