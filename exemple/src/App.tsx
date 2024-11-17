import React from 'react';
import MyComponents from './components/MyComponents';
import Compteur from './components/Compteur';

const App : React.FC = () => {
//declaration de la constante nom
  const name = "My cute cat"
// declaration de la valeur initial du compteur a 12
  const numbers = 12;

  return (
    <div>
      {/* rendu des deux composants */}
      <MyComponents nom={name}/>
      <Compteur StartValue={numbers}/>
    </div>
  );
};


// exportation du composant app.tsx
export default App;