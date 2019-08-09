import React, { useState, useLayoutEffect, useEffect } from 'react';
export default function() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const title = document.querySelector('#title');
    const titleWidth = title.getBoundingClientRect().width;
    console.log('useLayoutEffect');
    if (width !== titleWidth) {
      setWidth(titleWidth);
    }
  }, [width]);

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div>
      <h1>useLayoutEffect 同步执行副作用</h1>
      <h2 id="title">hello</h2>
      <h2>{width}</h2>
    </div>
  );
}
