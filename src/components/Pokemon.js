import React, { useState, useEffect } from 'react';
import { Typography, Link, CircularProgress, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
    typeTypography: {
        textTransform: "capitalize",
        textAlign: "center"
    }
})

const Pokemon = (props) => {
    const { history, match } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined);
    const classes = useStyles();

    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
          .then(function (response) {
            const { data } = response;
            setPokemon(data);
          })
          .catch(function (error) {
            setPokemon(false);
          });
      }, [pokemonId]);

    // THREE STATES
    // 1 - pokemon=undefined - getting the info
    // -> return loading bar
    // 2 - pokemon = good data, got the info
    // -> return actual info
    // 3 - pokemon = bad data/false
    // -> return pokemon not found



    const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const { front_default} = sprites;

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
    return <>
    {pokemon === undefined && <CircularProgress/>}
    {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
    {pokemon === false && <Typography>These aren't the Pokemon you're looking for. </Typography>}
    <Button variant="contained" onClick={() => history.push("/")}>
        Back to Pokedex!
    </Button>
    </>;
};

export default Pokemon;
