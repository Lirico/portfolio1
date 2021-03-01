import React, { Fragment } from 'react';
import Button from './ui/button'
import ShowImage from './ui/showimages'

import styled from '@emotion/styled';

import {
    Box,
    Grid,
    Link
} from '@material-ui/core'

const Resume = () => {
    return ( 
        <Box mb={8}>
            <Grid container>
                <Grid container item xs={7} justify="center">
                    <ShowImage src="https://alisondrury.com/wp-content/uploads/2016/09/square-photos-CV-02.jpg" alt=""></ShowImage>
                </Grid>
                <Grid container item xs={5} direction="column" justify="center" >
                    <Link href="/">
                        <Button>Download CV</Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Resume;