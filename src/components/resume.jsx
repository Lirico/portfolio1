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
                    <Link href="https://srv-store4.gofile.io/download/ow5tgB/CVITen.pdf">
                        <Button>Download CV</Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Resume;