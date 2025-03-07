import React, { useState } from 'react'
import Dodawanie from './Dodawanie';

function StudentManager(){
    const [Students, setStudents] = useState<Student[]>( [{imie:'Marek',nazwisko:'Grzybowski',rocznik:2004},{imie:'Aga',nazwisko:'Kokonat',rocznik:2005},{imie:'Radomil',nazwisko:'Radziejowski',rocznik:2004},{imie:'Lech',nazwisko:'Piwowarski',rocznik:2007},{imie:'Radomil',nazwisko:'Radziejowski',rocznik:2002},{imie:'Kamila',nazwisko:'Piwowarska',rocznik:2000}]);
    
    interface Student{
        imie: string,
        nazwisko: string,
        rocznik: number
    }

    const addStudent = (imie:string, nazwisko:string, rocznik:number) => {
        const student:Student = {imie,nazwisko,rocznik};
        setStudents([...Students, student]);

    };

    return (
        <div>
        <table>
            <tr>
                <th>Imie</th>
                <th>Nazwisko</th>
                <th>Rocznik</th>
            </tr>
            <tbody>
                {Students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.imie}</td>
                        <td>{student.nazwisko}</td>
                        <td>{student.rocznik}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <br></br> 
        <Dodawanie addStudent={addStudent}/>
        </div>
    );

};
export default StudentManager;