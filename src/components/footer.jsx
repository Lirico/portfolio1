import React, { Fragment } from 'react';

import {
    Grid
} from '@material-ui/core'

const Footer = () => {
    return ( 
        <Fragment> 
        <Grid container>
            <Grid container item sm={4}>
                1 {/* nationality */}
            </Grid>
            <Grid container item sm={4}>
                2 {/* email */}
            </Grid>
            <Grid container item sm={4}>
                3 {/* social media */}
            </Grid>
        </Grid>
    </Fragment>
     );
}
 
export default Footer;