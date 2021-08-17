import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    typeTypography: {
        textTransform: "capitalize",
        textAlign: "center"
    }
})

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined);
    const classes = useStyles();

    // THREE STATES
    // 1 - pokemon=undefined - getting the info
    // -> return loading bar
    // 2 - pokemon = good data, got the info
    // -> return actual info
    // 3 - pokemon = bad data/false
    // -> return pokemon not found



    const generatePokemonJSX = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const { front_default} = sprite;

        const spriteClick = () => {

        }


        return (
            <>
                <Typography variant="h2" className={classes.typeTypography} >
                    {`${id}. ${name}`}
                    {/* <img style={{ width: "300px", height: "300px" }} src={fullImageURL}/> */}
                </Typography>
                <Typography className={classes.typeTypography}>
                    <img onClick={spriteClick} src={front_default} />
                </Typography>
                <Typography className={classes.typeTypography}>
                    <p>Species: {species.name}</p></Typography>
                <Typography className={classes.typeTypography}>Height: {height} </Typography>
                <Typography className={classes.typeTypography}>Weight: {weight} </Typography>
                <Typography className={classes.typeTypography} variant="h6">Types:</Typography>
                <Typography className={classes.typeTypography}></Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;

                
                    return <Typography key={name} className={classes.typeTypography}> {`${name}`}</Typography>;
                })}
            </>
        );

    };
    return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
