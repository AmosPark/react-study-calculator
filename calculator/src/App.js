import React, {useState} from 'react';
import CalButtons from './CalButtons';

function App() {
  const onClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  return (
    <>
      <p> </p>
      <CalButtons />
    </>
  );
}

export default App;
