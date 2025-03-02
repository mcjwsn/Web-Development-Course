import React, { useState } from 'react'
function Formularz(){
    const [dane,setDane] = useState('');
    return (
        <div>
            <input type = 'text' value = {dane} onChange={(e) => setDane(e.target.value)} ></input>
            <div>
                {dane}
            </div>
        </div>
    );
}

export default Formularz;