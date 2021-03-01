import React, { Fragment } from 'react';

import {
    Grid,
    Typography
} from '@material-ui/core'

const Technologies = () => {
    return ( 
        <Fragment> 
            <Typography variant="h4" component="h2" align="center">
                Technologies
            </Typography>
            <Grid container>
                <Grid container item xs={4} justify="center">
                    <Typography variant="h5" component="h2">
                            Front-end
                    </Typography>
                </Grid>
                <Grid container item xs={4} justify="center">
                    <Typography variant="h5" component="h2">
                            Back-end
                    </Typography>
                </Grid>
                <Grid container item xs={4} justify="center">
                    <Typography variant="h5" component="h2">
                            Other knowledge
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container item xs={4}>

                    <div>1</div>
                </Grid>
                <Grid container item xs={4}>
                    <div>2</div>
                </Grid>
                <Grid container item xs={4}>
                    <div>3</div>
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Technologies;