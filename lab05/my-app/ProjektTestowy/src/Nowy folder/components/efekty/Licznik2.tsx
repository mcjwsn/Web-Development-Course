import React,{useState,useEffect} from 'react'

function Licznik(){
    const [counter,add ] = useState(0); // od 0
    
    function inc () {
        add(counter+1);
    }
    useEffect(() => {
        setTimeout(() => {
            console.log("Hello world!");
        }, 1);},[]);

        useEffect(() => {
            if(counter != 0){console.log(`Licznik zwiększył się do ${counter}`);}
        }, [counter]);
    return (
        <div>
            <div>{counter}</div>
            <button onClick={inc}>Dodaj</button>
        </div>
    );

}
export default Licznik;