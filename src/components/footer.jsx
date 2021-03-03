import React from 'react';
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
        <Box pt={8} pb={4} style={{backgroundColor: "#0276FD"}}>
            <Grid container>
                <Grid container item sm={4} justify="center">
                    <Box flexDirection="column" mb={3}>
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
                    <Box mb={3}>
                        <Link href="#">
                            <Typography component="p" style={{fontWeight:"bold", color: "#fff"}}>
                                <FooterIcons 
                                    src="https://image.flaticon.com/icons/png/512/220/220802.png" 
                                ></FooterIcons>
                                +54 11 5006 3891 
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid container item sm={4} justify="center">
                    <Box mb={3}>
                        <Link href="#">
                            <FooterIcons 
                                src="http://cdn.onlinewebfonts.com/svg/img_80278.png" 
                            ></FooterIcons>
                        </Link>
                        <Link href="#">
                            <FooterIcons 
                                src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" 
                            ></FooterIcons>
                        </Link>
                        <Link href="#">
                            <FooterIcons
                                src="https://i.pinimg.com/originals/1b/3b/ec/1b3bec070f7bb1c007dbaaeafaeb21b7.png" 
                            ></FooterIcons>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Footer;