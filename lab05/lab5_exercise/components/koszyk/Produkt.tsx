import React from 'react';

function Produkt(props: {nazwa : string}){
  return <h3> Nazwa : {props.nazwa}</h3>;
}

export default Produkt;