import React, { useState } from 'react';
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import {PhotoCamera} from '@materiaul-ui/icons';

import useStyles from './styles';

const cards= [1, 2, 3, 4, 5, 6, 7, 8, 9]

const MatrialUi = () => {
    const classes = useStyles
    return ( 
        <>
            <CssBaseline />
            <AppBar position= "relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant = "h6">
                        Photo Album
                    </Typography>
                </Toolbar>

            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant= "h2" align="center" color= "textPrimary" gutterBottom>
                            SocialFeed
                        </Typography>
                        <Typography variant = "h5" align="center" color= "textSecondary" paragraph>
                            Hello Everyone This is Your SocialFeed
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color= "primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color= "primary">
                                        View Comments
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map(() =>(
                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.CardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card, use this area to describe content
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color= "primary">View</Button>
                                    <Button size="small" color= "primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))} 
                    </Grid>
                </container>
            </main>
        </>
    );
}
 
export default MatrialUi;