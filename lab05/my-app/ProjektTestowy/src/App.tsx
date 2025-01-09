import React from 'react';
import './App.css';

function Welcome(props: { value: number, name : string }) {
  const gender = props.name.endsWith('a') ? 'K': 'M';
  return <h1>Mam {props.value} lat i nazywam się {props.name}, moja pleć to {gender}</h1>;
}
function GoodBye(props: {name : string}){
  return <h2> Goodbye {props.name} :D</h2>;
}
function App() {
  return (
    <div>
      <Welcome value = {13} name = "Pawel" />
      <Welcome value = {14} name = "Lara" />
      <br></br>
      <GoodBye name = 'Sara'/>
    </div>
  );}


export default App;