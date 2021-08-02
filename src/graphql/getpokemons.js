import gql from 'graphql-tag';


export const GETPOKEMONS = gql `
query pokemons($first: Int!) {
    pokemons(first: $first) {
        id
        name
        image
        maxHP
        maxCP
        attacks {
            special {
                name
                damage
            }
        }
    }
}`

export default GETPOKEMONS;