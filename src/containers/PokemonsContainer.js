import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GETPOKEMONS from '../graphql/getpokemons';
import {Pokemon} from '../components/Pokemon'

const PokemonsContainer = () => {
    const { data: {pokemons = [] } = {} } = useQuery(GETPOKEMONS , {
        variables: { first: 9}
    });
    return (
        <div className="pokemons">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    );
}

export default PokemonsContainer;
