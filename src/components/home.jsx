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
    background-position: 50% 95%;
    color: #fff;
    margin-bottom: 3rem;
    height: 100vh;
`;



const Home = () => {
    return (
        <BgImage> 
            <Box mb={8} pb={57} pt={23}>
                <Grid container>
                    <Grid container item sm={6} alignItems="center" style={{textTransform:"uppercase"}}>
                        <Box pl={5} pr={5}>
                            <h1 
                                className="titlefonts"
                            >     
                                Matias Dominguez                           
                            </h1>
                            <Box 
                                mb={3} mt={3}
                                style={{
                                    borderBottom: "solid 0.3rem #00A901",
                                    width: "5rem"
                                }}
                            ></Box>
                            <Typography variant="h5" component="h1" style={{textTransform:"uppercase", fontWeight: "bold"}}>
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