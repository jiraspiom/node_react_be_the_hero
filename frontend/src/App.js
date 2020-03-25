import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function incremente() {
    setCounter(counter + 1);
    
  }

  return (
    <div>
      <Header> semana de terste: {counter}</Header>
      <button onClick={incremente}>Incrementar</button>
    </div>
  );
}

export default App;
