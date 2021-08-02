import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GETPOKEMONS from '../graphql/getpokemons';

const PokemonsContainer = () => {
    const { data: {pokemons = [] } = {} } = useQuery(GETPOKEMONS , {
        variables: { first: 9}
    });
    return (
        <div className="pokemons">
            {pokemons}
        </div>
    );
}

export default PokemonsContainer;
