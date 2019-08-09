import React, { useState, useRef } from 'react';

export default function() {
  const nameRef = useRef();
  const [name, setName] = useState('tom');

  const handleSubmit = () => {
    const newName = nameRef.current.value;
    if(!newName) return;
    setName(newName);
    nameRef.current.value = '';
    nameRef.current.focus()
  };

  return (
    <div>
      <p>{name}</p>
      <input ref={nameRef} type="text" />
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
}
