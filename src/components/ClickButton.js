import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, reset } from '../features/counterSlice';

const ClickButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="button">
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ClickButton;
