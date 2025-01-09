import React, { useState } from 'react'
function Haslo(){
    const [dane1,setDane1] = useState('');
    const [dane2,setDane2] = useState('');
    
    function Check(dane1:string, dane2:string){
        if(!dane1 && !dane2){
            return 'Prosze wprowadzic haslo';
        }
        else{
            if(dane1 != dane2){return 'Hasla nie są takie same';}
        }
        return '';
    }
    return (
        <div>
            <div>Haslo</div>
            <input type = 'text' value = {dane1} onChange={(e) => setDane1(e.target.value)} ></input>
            <div>Powtorz Haslo</div>
            <input type = 'text' value = {dane2} onChange={(e) => setDane2(e.target.value)} ></input>
            <div>
                {Check(dane1,dane2)}
            </div>
        </div>
    );
}

export default Haslo;