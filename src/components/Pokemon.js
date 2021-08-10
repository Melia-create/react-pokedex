import React from 'react';

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;

    return (
        <div>
            {`Pokemon Page for #${pokemonId}`}
            Pokemon Page
        </div>
    );
}

export default Pokemon;
