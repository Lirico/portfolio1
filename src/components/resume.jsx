import React, { Fragment } from 'react';

import {
    Grid
} from '@material-ui/core'

const Resume = () => {
    return ( 
        <Fragment> 
            <Grid container>
                <Grid container item xs={6}>
                    1 {/* Images */}
                </Grid>
                <Grid container item xs={6}>
                    2 {/* Buttons */}
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Resume;