import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from '../redux/counter/actions';
import {
  decrement as dynamicDecrement,
  increment as dynamicIncrement,
  reset as dynamicReset,
} from '../redux/dynamicCounter/actions';

const VariableCounter = (props) => {
  const { count, title, incrementHandler, decrementHandler, resetHandler } =
    props;

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <h3>Count: {count}</h3>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { dynamic } = ownProps;
  const { counter, dynamicCounter } = state;
  return {
    count: dynamic ? dynamicCounter.count : counter.count,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { dynamic } = ownProps;
  return {
    incrementHandler: () =>
      dispatch(dynamic ? dynamicIncrement(2) : increment()),
    decrementHandler: () =>
      dispatch(dynamic ? dynamicDecrement(3) : decrement()),
    resetHandler: () => dispatch(dynamic ? dynamicReset() : reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
