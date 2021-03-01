import React from 'react';
import Button from "./ui/button"

import {
    Box,
    Grid,
    Link,
    Typography
} from '@material-ui/core'

const Home = () => {
    return ( 
        <Box mb={8}>
            <Grid container>
                <Grid container item xs={6}>
                    <Typography variant="h6" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Commodi, impedit laborum! In unde quia quo. Modi assumenda ea provident tempore.
                    </Typography>
                    <Link href="/"><Button>Hire me!</Button></Link>
                </Grid>
                <Grid container item xs={6} alignItems="center"></Grid>
            </Grid>
        </Box>
     );
}
 
export default Home;