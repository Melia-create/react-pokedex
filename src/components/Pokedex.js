import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

const Pokedex = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar />
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    Item One
                </Grid>
                <Grid item xs={2}>
                    Item Two
                </Grid>
            </Grid>
        </>
    );
}

export default Pokedex;
