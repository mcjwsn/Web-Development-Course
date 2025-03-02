import { useState } from 'react';
import './index.css';

function Otes() {
  const [szerokosc, setSzerokosc] = useState(1000);

  return (
    <>
      <div style={{ width: `${szerokosc}px`, backgroundColor: 'lightgray' }}>
        <h1>Test</h1>
      </div>
      <div style={{ backgroundColor: 'blue', color: 'white', padding: '20px' }}>
        <p>To jest kolejny div.</p>
      </div>
        
        <div style={{position: 'absolute', top: '200px', left: '30px', width: '50px', height: '50px', background: 'red'}}></div>
        <div style={{position: 'relative', width: '200px', height: '200px', background: 'lightblue',height:'100px',width:'10px',transform: 'translate(50px, 100px)',transition: 'transform 0.5s ease'}}>
      </div>
    </>
  );
}

export default Otes;
