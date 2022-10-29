import React from "react";
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@mui/material";
import { Wifi, Delete, TagFaces, PhotoCamera  } from "@mui/icons-material";
import { makeStyles } from '@mui/material/styles';
const useStyles = makeStyles(()=>{


});


const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <TagFaces />
                    <Wifi />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello everyone, this is a photo album and I'm trying to make this line as long as possible so I can see how it
                        looks like on the screen
                    </Typography>
                    <Button variant="outlined" color="success" size="large">Test Button</Button>
                    <Button variant="contained" size="large">Test Button</Button><br/>
                    <Button variant="contained" disabled size="large">Test Button</Button>
                    <Button variant="outlined" size="large" color="error" startIcon={<Delete />}>Delete</Button>
                    <div>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" size="large">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" size="large">
                                    Secundary button
                                </Button>
                            </Grid>
                        </Grid>    
                    </div>
                </Container>

            </main>
        </>
    );
    }

export default App;