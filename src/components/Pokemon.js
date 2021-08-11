import React, { useState } from 'react';
import mockData from '../data/mockData';
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
    const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);
    const classes = useStyles();

    const generatePokemonJSX = () => {
        const { name, id, species, height, weight, type, sprites } = pokemon;
        const fullImageURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;


        return (
            <>
                <Typography variant="h2" className={classes.typeTypography} >
                    {`${id}. ${name}`}
                    <img src={front_default} />
                    {/* <img style={{ width: "300px", height: "300px" }} src={fullImageURL}/> */}
                </Typography>
                <Typography className={classes.typeTypography}>
                    <p>Species: {species.name}</p></Typography>
                <Typography className={classes.typeTypography}>Height: {height} </Typography>
                <Typography className={classes.typeTypography}>Weight: {weight} </Typography>
                <Typography className={classes.typeTypography} variant="h6">Types:</Typography>
                <Typography className={classes.typeTypography} ></Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return 
                    <Typography key={name}>{`${name}`}</Typography>;

                })};
            </>
        );

    };
    return <>{generatePokemonJSX()}</>;
};

export default Pokemon;
