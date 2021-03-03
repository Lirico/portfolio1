import React from 'react';
import ShowImage from './ui/showImages'
import MyPhoto from '../images/DSC_0074.jpg';

import {
    Box,
    Grid,
    Typography
} from '@material-ui/core'

const AboutMe = () => {
    return (
        <Box mb={4} id="aboutme"> 
            <Box mb={3}> 
                <Typography variant="h4" component="h2" align="center">
                    About Me
                </Typography>
            </Box>
            <Grid container>
                    <Grid container item sm={6} justify="center" style={{marginBottom: "2rem"}}>
                        <ShowImage src={MyPhoto} alt=""></ShowImage>
                    </Grid>
                <Grid container item sm={6} alignItems="center" style={{marginBottom: "2rem"}}>
                    <Box pl={4} pr={5} >
                        <Typography variant="h6" component="p">
                        I am passionate about technology and self-taught training. 
                        I am looking forward to an opportunity where I could not 
                        only put my acquired skills to the test, but to even expand 
                        them and learn new ones. I specialize in React but I am highly 
                        interested in learning React Native.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default AboutMe;