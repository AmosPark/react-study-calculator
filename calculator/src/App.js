import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState("");

  const onClick = (event) => {
    setResult(result.concat(event.target.name))
  };

  return (
    <>
      <p>{result}</p>
      <button name = "AC">
        AC
      </button>
      <button name = "+/-">
        +/-
      </button>
      <button name = "%" onClick={onClick}>
        %
      </button>
      <button name = "/">
        /
      </button>
      <button name = "7" onClick={onClick}>
        7
      </button>
      <button name = "8" onClick={onClick}>
        8
      </button>
      <button name = "9" onClick={onClick}>
        9
      </button>
      <button name = "X">
        X
      </button>
      <button name = "4" onClick={onClick}>
        4
      </button>
      <button name = "5" onClick={onClick}>
        5
      </button>
      <button name = "6" onClick={onClick}>
        6
      </button>
      <button name = "-">
        -
      </button>
      <button name = "1" onClick={onClick}>
        1
      </button>
      <button name = "2" onClick={onClick}>
        2
      </button>
      <button name = "3" onClick={onClick}>
        3
      </button>
      <button name = "+">
        +
      </button>
      <button name = "0" onClick={onClick}>
        0
      </button>
      <button name = "." onClick={onClick}>
        .
      </button>
      <button name = "=">
        =
      </button>
    </>
  );
}

export default App;
