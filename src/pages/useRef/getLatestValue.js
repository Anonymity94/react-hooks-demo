import React, { useRef } from 'react';

export default function() {
  const countRef = useRef(0);

  const showCount = () => {
    alert('count: ' + countRef.current);
  };

  const handleClick = number => {
    countRef.current = countRef.current + number;
    setTimeout(showCount, 3000);
  };
  
  console.log(countRef)
  return (
    <div>
      <p>Count: {countRef.current}</p>
      <button onClick={() => handleClick(1)}>增加</button>
      <button onClick={() => handleClick(-1)}>减少</button>
    </div>
  );
}
