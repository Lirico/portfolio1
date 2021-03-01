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
                    1 {/* photo */}
                </Grid>
                <Grid container item xs={6}>
                    2 {/* texto */}
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default AboutMe;