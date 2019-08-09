import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';

function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} {...props} />;
}

const ChildInput = forwardRef(ChildInputComponent);

export default function() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h2>useImperativeHandle 透传 Ref</h2>
      <ChildInput ref={inputRef} onChange={handleChange} />
    </div>
  );
}
