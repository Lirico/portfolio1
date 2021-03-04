import React from 'react';
import Button from './ui/button'
import ShowImage from './ui/showImages'

import CV from '../images/cvsquare.jpg';

import {
    Box,
    Grid,
    Link
} from '@material-ui/core'

const Resume = () => {
    return ( 
        <Box mb={12} id="resume">
            <Grid container>
                <Grid container item justify="center">
                    <ShowImage src={CV} alt=""></ShowImage>
                </Grid>
                <Grid container item alignItems="center" justify="center">
                    <Link href="https://drive.google.com/file/d/1hB3xxiXDiQlMZMO6Uhf6cW6ZLkcH7VKQ/view">
                        <Button>Download CV</Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Resume;