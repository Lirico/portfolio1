import React, { Fragment } from 'react';

import {
    Box,
    Grid,
    Typography
} from '@material-ui/core'

const Projects = () => {
    return ( 
        <Box mb={8} id="projects"> 
            <Box mb={4}>
                <Typography variant="h4" component="h2" align="center">
                    My Projects
                </Typography>
            </Box>
            <Grid container>
                <Grid container item sm={4}>
                    1 {/* Project 1 */}
                </Grid>
                <Grid container item sm={4}>
                    2 {/* Project 2 */}
                </Grid>
                <Grid container item sm={4}>
                    3 {/* Project 3 */}
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Projects;