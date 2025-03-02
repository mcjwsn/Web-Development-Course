import React, { useState } from 'react';
import BalonImage from './Balon.jpg';
const Balon2 = () => {
  const [size, setSize] = useState(100);
  const [counter,add] = useState(1);

  const changeSize = () => {
    if (size <= 25){setSize(0)}
    else{
      setSize(prevSize => (prevSize = Math.round(prevSize/2 - 0.5)))};
  };

  function inc () {
    add(counter+1);
}


  return (
    <>
    <div>
        <div>{counter}</div>
    <button onClick={inc}>Dodaj</button>
    </div>
      <div style={{ textAlign: 'center',}}>
          <img
              src={BalonImage}
              alt="Balon"
              onClick={changeSize}
              style={{ width: `${size}%`,
              }}
          />
      </div>
      </>
  );
};

export default Balon2;
