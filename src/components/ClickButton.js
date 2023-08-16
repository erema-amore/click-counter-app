import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, reset } from '../features/counterSlice';
import './ClickButton.css'; 
const ClickButton = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false); 

  const handleClick = () => {
    dispatch(increment());
    setClicked(true); 
    setTimeout(() => setClicked(false), 300); 
  };

  const handleReset = () => {
    dispatch(reset());
    setClicked(true); 
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div className={`button ${clicked ? 'clicked' : ''}`}>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ClickButton;
