import React from 'react';

export function Pokemon({ pokemon }) {
    return (
        <div className="pokemon">
            <div className="pokemon_name">
                <h2>{pokemon.name}</h2>
            </div>

            <div className="pokemon_meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>

            <div className="pokemon_image">
                <img src={pokemon.image} alt={pokemon.name}/>

            </div>


            <div className="pokemon_attack">

            </div>
        </div>
    )
}