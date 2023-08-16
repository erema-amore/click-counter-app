import React from 'react';
import { useSelector } from 'react-redux';

const ClickCounter = () => {
  const clickCount = useSelector(state => state.counter.value);

  return (
    <div className="counter">
      <p>Click Count: {clickCount}</p>
    </div>
  );
};

export default ClickCounter;
