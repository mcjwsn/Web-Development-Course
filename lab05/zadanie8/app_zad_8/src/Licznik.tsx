import React,{useEffect, useState} from 'react'

function Licznik(){
    const [counter,add ] = useState(0); // od 0

    useEffect(() => {
        const storedCounter = localStorage.getItem('licznik');
        if (storedCounter) {
          add(Number(storedCounter));
        }

      }, []);
    function inc () {
        add(counter+1);
        localStorage.setItem('licznik',String(counter+1));
    }
    //localStorage.clear();
    return (
        <div>
            <div>{counter}</div>
            <button onClick={inc}>Dodaj</button>
        </div>
    );
    
}
export default Licznik;