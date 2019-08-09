import React, { useReducer } from 'react';

const initState = {
  count: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      return { count: state.count };
  }
}

export default function() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</button>
    </div>
  );
}
