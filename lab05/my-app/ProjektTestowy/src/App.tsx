import React from 'react';
import './App.css';
import Koszyk from './components/koszyk/Koszyk';
import NowyKoszyk from './components/koszyk/NowyKoszyk';
import Licznik from './components/liczniki/Licznik';
import NowyLicznik from './components/liczniki/NowyLicznik';
import Formularz from './components/formularze/Formularz';
import Haslo from './components/formularze/Haslo';
import Logowanie from './components/formularze/Logowanie';
import Ternary from './components/inne/Ternary';
import Aktualizacja from './components/inne/Aktualizacja';


function App() {
  return (
    <div>
      {/*<Koszyk></Koszyk>*/}
      {/*<NowyKoszyk></NowyKoszyk>*/}
      {/*<Licznik></Licznik>*/}
      {/*<NowyLicznik></NowyLicznik>*/}
      {/*<Formularz></Formularz>*/}
      {/*<Haslo></Haslo>*/}
      {/*<Logowanie></Logowanie>*/}
      {/*<Ternary></Ternary>*/}
      <Aktualizacja></Aktualizacja>
    </div>
  );}


export default App;