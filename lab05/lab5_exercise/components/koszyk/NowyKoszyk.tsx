import React from 'react';
import Produkt from './Produkt';

function NowyKoszyk() {
  const x = ['melko1','jajka2','woda2','chleb2','maslo2'];
    return (
      <div>
      {x.map((nazwa,index) => (<Produkt key = {index} nazwa = {nazwa}></Produkt>))}
      </div>
    );}

export default NowyKoszyk;