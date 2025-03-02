import React from 'react'

function Studenci(){
    const Students: Student[] = [{imie:'Marek',nazwisko:'Grzybowski',rocznik:2004},{imie:'Aga',nazwisko:'Kokonat',rocznik:2005},{imie:'Radomil',nazwisko:'Radziejowski',rocznik:2004},{imie:'Lech',nazwisko:'Piwowarski',rocznik:2007},{imie:'Radomil',nazwisko:'Radziejowski',rocznik:2002},{imie:'Kamila',nazwisko:'Piwowarska',rocznik:2000}]

    interface Student{
        imie: string,
        nazwisko: string,
        rocznik: number
    }

    return (
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
    );

};
export default Studenci;