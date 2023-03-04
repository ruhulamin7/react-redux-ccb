import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/hookCounter/actions';

const HookCounter = (props) => {
  const { title } = props;
  const count = useSelector((state) => state.hookCounter.count);
  const dispatch = useDispatch();

  const result = useSelector((s) => s);
  console.log(result);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default HookCounter;
