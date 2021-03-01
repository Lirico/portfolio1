import React, { Fragment } from 'react';

import {
    Grid,
    Typography
} from '@material-ui/core'

const Technologies = () => {
    return ( 
        <Fragment> 
            <Typography variant="h4" component="h2">
                Technologies
            </Typography>
            <Grid container>
                <Grid container item xs={4}>
                    1 {/* Front */}
                </Grid>
                <Grid container item xs={4}>
                    2 {/* Back */}
                </Grid>
                <Grid container item xs={4}>
                    3 {/* Others */}
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Technologies;