import React, { useState } from 'react';
import CalButtons from './CalButtons';

function App() {
  const [result, setResult] = useState("");

  const onClick = ({screen}) => {
    setResult(result.concat(event.target.name))
  };

  return (
    <>
      <p>{result}</p>
      <CalButtons />
    </>
  );
}

export default App;
