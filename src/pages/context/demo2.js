import React, { useContext } from 'react';

const colorContext = React.createContext('gray');

function Bar() {
  const color = useContext(colorContext);
  return <span>{color}</span>;
}

function Foo() {
  return <Bar />;
}

export default function() {
  return (
    <colorContext.Provider value="blue">
      <Foo />
    </colorContext.Provider>
  );
}
