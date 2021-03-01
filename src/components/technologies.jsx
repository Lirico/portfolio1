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
                    <Typography variant="h5" component="h2">
                        Front-end
                    </Typography>
                    1 {/* Front */}
                </Grid>
                <Grid container item xs={4}>
                    <Typography variant="h5" component="h2">
                        Back-end
                    </Typography>
                    2 {/* Back */}
                </Grid>
                <Grid container item xs={4}>
                    <Typography variant="h5" component="h2">
                        Other knowledge
                    </Typography>
                    3 {/* Others */}
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Technologies;