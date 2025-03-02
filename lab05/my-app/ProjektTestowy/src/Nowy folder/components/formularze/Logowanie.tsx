import React, { useState } from 'react'
function Logowanie(){
    const [dane1,setDane1] = useState('');
    const [dane2,setDane2] = useState('');
    const [dane3,setDane3] = useState('');
    
    const allowed = () => {
        if (!dane1 || !dane2 || !dane3){
            return true;
        }
        return false;
    };

    const Check = ()=>{
            if(dane1 != dane2){alert ('Hasla nie są zgodne');}
            else{alert ('Zalogowano pomyslnie');}
        };
    
    return (
        <div>
            <div>Nazwa użytkownika
            <input type = 'text' value = {dane3} onChange={(e) => setDane3(e.target.value)} ></input>
            </div>
            <div>Haslo</div>
            <input type = 'text' value = {dane1} onChange={(e) => setDane1(e.target.value)} ></input>
            <div>Powtorz Haslo</div>
            <input type = 'text' value = {dane2} onChange={(e) => setDane2(e.target.value)} ></input>
            <div>
                <button disabled = {allowed()} onClick={Check} >Zaloguj</button>
            </div>
        </div>
    );
}

export default Logowanie;