import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from '../redux/dynamicCounter/actions';

const DynamicCounter = (props) => {
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
  return {
    count: state.dynamicCounter.count,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementHandler: () => dispatch(increment(2)),
    decrementHandler: () => dispatch(decrement(3)),
    resetHandler: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DynamicCounter);
