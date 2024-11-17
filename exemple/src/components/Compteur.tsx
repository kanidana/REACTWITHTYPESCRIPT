import React, { Component } from 'react';

// Définir une interface pour les props
interface InitialCompt {
    StartValue: number; // Attention au type : utiliser `number` et non `Number`
}

// Définir une interface pour le state
interface CountEtat {
    count: number; // Valeur actuelle du compteur
}

// Déclarer un composant de classe avec des props et un state
class Compteur extends Component<InitialCompt, CountEtat> {
    constructor(props: InitialCompt) {
        super(props);

        // Initialiser le state
        this.state = {
            count: props.StartValue, // Le compteur commence à sa valeur initiale
        };
    }

    // Méthode pour incrémenter le compteur
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Compteur;
