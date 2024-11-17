import React from 'react';

// definition d'un interface pour les props

interface myProps {
    nom: string;
}

// definit le composant comme une fonction react avec des props types
const MyComponents: React.FC<myProps> = ({ nom }) => {
    return <div>
       <h1> Bonjour, {nom} !</h1> 
        </div> 
}


// exportation du composant
export default MyComponents