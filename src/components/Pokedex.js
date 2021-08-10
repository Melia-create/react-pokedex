import React from 'react';
import { AppBar, Toolbar, Grid, Card, CardContent, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MockData from '../data/MockData';

const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
});

const getPokemonCard = () => {
    return (
        <Grid item xs={4}>
            <Card>
                <CardContent>HELLO</CardContent>
            </Card>
        </Grid>
    );

};

const Pokedex = () => {
    const classes = useStyles();

    const [pokemonData, setPokemonData] = useState(MockData)

    return (
        <>
            <AppBar position="static">
                <Toolbar />
            </AppBar>
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {getPokemonCard()}
                    {getPokemonCard()}
                    {getPokemonCard()}
                    {getPokemonCard()}
                </Grid>
            ) : (
                    <CircularProgress />
                )}
        </>
    );
}

export default Pokedex;
