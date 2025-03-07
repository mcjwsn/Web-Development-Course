import React, { useState } from 'react'

function Aktualizacja(){
    const [produkt,setProdukt] = useState({nazwa:'Pomidor',cena:50});

    function Change(){
        setProdukt((prev) => ({...prev, cena: 100}));
    };

    return (
        <><div>
            Aktualna cena {produkt.nazwa} wynosi {produkt.cena}
        </div><button onClick={Change}>Zmien</button></>
    );
};
export default Aktualizacja;