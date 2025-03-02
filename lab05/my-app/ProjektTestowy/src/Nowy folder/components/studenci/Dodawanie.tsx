import React, { useState } from 'react'

interface Addition{
    addStudent:(imie:string,nazwisko:string,rocznik:number)=>void;
}

const Dodawanie: React.FC<Addition> = ({ addStudent }) =>{
    
    const [imie,setImie] = useState('');
    const [nazwisko,setNazwisko] = useState('');
    const [rocznik, setRocznik] = useState<number>(2004);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setRocznik(parseInt(inputValue, 10));
      };
    
    const add= () => {
        if (!imie || imie ==' ' || !nazwisko || nazwisko == ' ' || rocznik < 1900 || rocznik > 2025) {
            alert("Proszę wypełnić wszystkie pola poprawnymi danymi!");
            return;
        }
        addStudent(imie,nazwisko,rocznik)
        setImie('');
        setNazwisko('');
        setRocznik(2004);
    };


    return (
            <div>
            <div> Podaj Imie <br></br> 
            <input type = 'text' value = {imie} onChange={(e) => setImie(e.target.value)} ></input>
            </div>
            <div>Podaj Nazwisko  <br></br> 
            <input type = 'text' value = {nazwisko} onChange={(e) => setNazwisko(e.target.value)} ></input>
            </div>
            <div>Podaj rocznik  <br></br> 
            <input type = 'number' value = {rocznik} onChange={handleChange} ></input>
            </div>
            <br></br>
            <button onClick={add}>Dodawanie</button>
            </div>
    );}

export default Dodawanie;
