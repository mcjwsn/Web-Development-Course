import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(2.0);
  const [but,setBut] =  useState('Start');
  const [on,isOn] = useState(true);

  useEffect(() => {
    if (on && count > 0) {
      setTimeout(() => {
        setCount((prevCount) => {
          const newCount = prevCount - 0.1;
          return newCount <= 0 ? 0 : newCount;
        });
      }, 100);
    }
  }, [count, on]);

useEffect(()=>{
  setBut(()=>
    count>0 ? (on ? 'Stop':'Start'):'Odliczanie zakonczone'
)},[count,on])
const start = () => {
  isOn((prev) => !prev);
};
  return (
    <div>
      <div>{count.toFixed(1)} sek</div>
      <button onClick={start} disabled = {count==0}>{but} </button>
    </div>
  );
}
export default Timer;