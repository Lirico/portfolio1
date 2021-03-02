import React from 'react';
import Button from './ui/button'
import ShowImage from './ui/showImages'

import {
    Box,
    Grid,
    Link
} from '@material-ui/core'

const Resume = () => {
    return ( 
        <Box mb={8} id="resume">
            <Grid container>
                <Grid container item justify="center">
                    <ShowImage src="https://alisondrury.com/wp-content/uploads/2016/09/square-photos-CV-02.jpg" alt=""></ShowImage>
                </Grid>
                <Grid container item alignItems="center" justify="center">
                    <Link href="/">
                        <Button>Download CV</Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Resume;