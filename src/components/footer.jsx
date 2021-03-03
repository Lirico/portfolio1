import React from 'react';

import Whatsapp from '../images/whatsapp.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';
import Gmail from '../images/gmail.png';

import styled from '@emotion/styled';
import {
    Box,
    Grid,
    Link,
    Typography
} from '@material-ui/core'

const FooterIcons = styled.img`
    width: 3rem;
    vertical-align: middle;
    margin-right: 0.5rem;
`;

const Footer = () => {
    return ( 
        <Box pt={7} style={{backgroundColor: "#0276FD"}}>
            <Grid container>
                <Grid container item sm={4} justify="center">
                    <Box flexDirection="column" mb={6}>
                        <Typography 
                            component="h3" 
                            style={{
                                color: "#fff", 
                                fontWeight: "bold", 
                                fontSize: "1.6rem"
                            }}
                        >Location</Typography>
                        <Link href="https://www.google.com/maps/place/Hurlingham,+Provincia+de+Buenos+Aires/@-34.5910172,-58.6557366,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcb9254c083df5:0x87b633dca0937bac!8m2!3d-34.589571!4d-58.6275502">
                            <Typography component="p" style={{color: "#fff"}}>Hurlingham Bs.As.</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid container item sm={4} justify="center">
                    <Box mb={6}>
                        <Link href="#">
                            <Typography component="p" style={{fontWeight:"bold", color: "#fff"}}>
                                <FooterIcons 
                                    src={Whatsapp}
                                    alt="whatsapp" 
                                ></FooterIcons>
                                +54 11 5006 3891 
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid container item sm={4} justify="center">
                    <Box mb={6}>
                        <Link href="https://www.linkedin.com/in/dominguezmatiasadrian/">
                            <FooterIcons 
                                src={Linkedin}
                                alt="linkedin" 
                            ></FooterIcons>
                        </Link>
                        <Link href="https://github.com/Lirico">
                            <FooterIcons 
                                src={Github} 
                                alt="github"
                            ></FooterIcons>
                        </Link>
                        <Link href="mailto:dominguezmatiasadrian@gmail.com">
                            <FooterIcons
                                src={Gmail}
                                alt="gmail" 
                            ></FooterIcons>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Footer;