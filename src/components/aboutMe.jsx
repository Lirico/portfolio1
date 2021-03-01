import React from 'react';
import ShowImage from './ui/showImages'

import {
    Box,
    Grid,
    Typography
} from '@material-ui/core'

const AboutMe = () => {
    return (
        <Box mb={4}> 
            <Box mb={3}> 
                <Typography variant="h4" component="h2" align="center">
                    About Me
                </Typography>
            </Box>
            <Grid container>
                    <Grid container item sm={6} justify="center" style={{marginBottom: "2rem"}}>
                        <ShowImage src="https://i.pinimg.com/originals/cc/42/1c/cc421cda30d74ecbee9afa0f00a1f388.jpg" alt=""></ShowImage>
                    </Grid>
                <Grid container item sm={6} alignItems="center" style={{marginBottom: "2rem"}}>
                    <Box pl={4} pr={4} >
                        <Typography variant="h6" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Molestiae perspiciatis iste corrupti magni, velit eaque cupiditate. 
                            Vel aut deserunt odit sint accusamus modi necessitatibus accusantium alias eum corporis,
                            itate quas tenetur possimus.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default AboutMe;