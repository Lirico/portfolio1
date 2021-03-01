import React, { Fragment } from 'react';

import {
    Grid,
    Typography
} from '@material-ui/core'

const AboutMe = () => {
    return (
        <Fragment> 
            <Typography variant="h4" component="h2">
                About Me
            </Typography>
            <Grid container>
                <Grid container item xs={6}>
                    <img src="https://i.pinimg.com/originals/cc/42/1c/cc421cda30d74ecbee9afa0f00a1f388.jpg" alt=""></img>
                </Grid>
                <Grid container item xs={6} alignItems="center">
                    <Typography variant="h6" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magnam labore et libero necessitatibus porro saepe, 
                        maxime dolorem quasi! 
                        Voluptatibus aut rem neque cum ut est voluptate magni aspernatur eligendi inventore.
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default AboutMe;