import React,{useState} from 'react'
import Przycisk from './Przycisk'

function NowyLicznik(){
    const [counter,add ] = useState(0); // od 0
    
    function inc () {
        add(counter+1);
    }
    
    return (
        <div>
            <div>{counter}</div>
            <Przycisk inc={inc}></Przycisk>
        </div>
    );

}
export default NowyLicznik;