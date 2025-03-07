import React,{useState} from 'react'

function Licznik(){
    const [counter,add ] = useState(0); // od 0
    
    function inc () {
        add(counter+1);
    }

    return (
        <div>
            <div className='count-display'>{counter}</div>
            <button onClick={inc}>Dodaj</button>
        </div>
    );

}
export default Licznik;