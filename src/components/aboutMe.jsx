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
        <Box mb={8} mt={12} id="aboutme"> 
            <Box mb={3}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography style={{  borderBottom: "solid 3px #00A901", width: "1.5rem"}}></Typography> 
                    <Typography variant="h4" component="h2" align="center" 
                        style={{
                            margin:"0 3px 0 3px", 
                            fontWeight: "bold"
                        }}>
                        About Me
                    </Typography>
                    <Typography style={{  borderBottom: "solid 3px #00A901", width: "1.5rem"}}></Typography> 
                </Box>
            </Box>
            <Grid container>
                    <Grid container item sm={6} justify="center" style={{marginBottom: "2rem"}}>
                        <ShowImage src={MyPhoto} alt=""></ShowImage>
                    </Grid>
                <Grid container item sm={6} alignItems="center" style={{marginBottom: "2rem"}}>
                    <Box pl={4} pr={5} >
                        <Typography variant="h6" component="p" style={{fontWeight: "bold"}}>
                            Hello, I am Matías Domínguez and I am a Front-end Developer.
                        </Typography>
                        <Typography variant="h6" component="p" style={{fontWeight: "bold"}}>
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