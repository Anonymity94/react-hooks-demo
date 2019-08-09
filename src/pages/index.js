import React, { useState, useEffect } from 'react';
import styles from './index.css';

export default function() {
  const [obj, setObject] = useState({
    count: 0,
    name: 'alife',
  });

  useEffect(() => {
    document.title = 'count changed: ' + obj.count;
  }, [obj.count]);

  return (
    <div className={styles.normal}>
      Count: {obj.count}
      <button onClick={() => setObject({ ...obj, count: obj.count + 1 })}>+</button>
      <button onClick={() => setObject({ ...obj, count: obj.count - 1 })}>-</button>
    </div>
  );
}
