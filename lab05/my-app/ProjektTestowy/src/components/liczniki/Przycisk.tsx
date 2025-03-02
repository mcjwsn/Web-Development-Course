import React from 'react'

function Przycisk({inc}:{ inc: () => void }){
    return (
        <div>
            <button onClick={inc}>Dodaj</button>
        </div>
    );

};
export default Przycisk;