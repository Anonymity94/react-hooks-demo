import React from 'react';
const { Provider, Consumer } = React.createContext(null);

function Bar() {
  return <Consumer>{color => <span>{color}</span>}</Consumer>;
}

function Foo() {
  return <Bar />;
}

export default function() {
  return (
    <Provider value="red">
      <Foo />
    </Provider>
  );
}
