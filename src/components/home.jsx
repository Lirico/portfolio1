import React from 'react';
import Button from "./ui/button"

import styled from '@emotion/styled';
import {
    Box,
    Grid,
    Link,
    Typography
} from '@material-ui/core'

const BgImage = styled.div`
    background: url("https://wallpaperaccess.com/full/915909.jpg") no-repeat center;
    color: #fff;
    margin-bottom: 3rem;
`;



const Home = () => {
    return (
        <BgImage> 
            <Box mb={8} pb={40} pt={40}>
                <Grid container>
                    <Grid container item sm={6} alignItems="center">
                        <Box pl={5} pr={5}>
                            <Typography variant="h6" component="p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Commodi, impedit laborum! In unde quia quo. Modi assumenda ea provident tempore.
                            </Typography>
                            <Link href="/"><Button>Hire me!</Button></Link>
                        </Box>
                    </Grid>
                    <Grid container item sm={6}></Grid>
                </Grid>
            </Box>
        </BgImage>
     );
}
 
export default Home;