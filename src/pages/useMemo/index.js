import React, { useMemo, useState } from 'react';

function Parent({ a, b }) {
  const child1 = useMemo(() => <span>Child1: {a}</span>, [a]);
  const child2 = useMemo(() => <span>Child2: {b}</span>, [b]);

  return (
    <div>
      {child1}
      <br />
      {child2}
    </div>
  );
}

export default function() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>只改变a</button>
      <button onClick={() => setB(b + 1)}>只改变b</button>
      <Parent a={a} b={b} />
    </div>
  );
}
