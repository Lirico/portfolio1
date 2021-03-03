import React from 'react';
import Button from "./ui/button"

import Mario from '../images/mario.gif';

import styled from '@emotion/styled';
import {
    Box,
    Grid,
    Link,
    Typography
} from '@material-ui/core'

const BgImage = styled.div`
    background: url(${Mario}) no-repeat center;
    background-position: bottom;
    color: #fff;
    margin-bottom: 3rem;
    height: 100vh;
`;



const Home = () => {
    return (
        <BgImage> 
            <Box mb={8} pb={40} pt={40}>
                <Grid container>
                    <Grid container item sm={6} alignItems="center">
                        <Box pl={5} pr={5}>
                            <Typography variant="h3" component="h1" style={{textTransform:"uppercase"}}>
                                Matías Domínguez                           
                            </Typography>
                            <Box 
                                mb={3} mt={3}
                                style={{
                                    borderBottom: "solid 0.3rem #0276FD",
                                    width: "5rem"
                                }}
                            ></Box>
                            <Typography variant="h4" component="h1" style={{textTransform:"uppercase"}}>
                                Front-end Developer                          
                            </Typography>
                            <Link href="#contactme"><Button>Hire me!</Button></Link>
                        </Box>
                    </Grid>
                    <Grid container item sm={6}></Grid>
                </Grid>
            </Box>
        </BgImage>
     );
}
 
export default Home;