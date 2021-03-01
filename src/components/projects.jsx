import React, { Fragment } from 'react';

import {
    Grid,
    Typography
} from '@material-ui/core'

const Projects = () => {
    return ( 
        <Fragment> 
            <Typography variant="h4" component="h2">
                My Projects
            </Typography>
            <Grid container>
                <Grid container item xs={4}>
                    1 {/* Project 1 */}
                </Grid>
                <Grid container item xs={4}>
                    2 {/* Project 2 */}
                </Grid>
                <Grid container item xs={4}>
                    3 {/* Project 3 */}
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Projects;