import React from 'react';

import {
    Box,
    Link,
    Typography
} from '@material-ui/core'

const Navbar = () => {
    return ( 
        <nav>
            <Box display="flex" justifyContent="space-between" pl={2} pr={3} pt={2} pb={2} alignItems="center">
                <Box>
                    <Typography variant="h4" component="h2" >
                        Portfolio
                    </Typography>
                </Box>
                <Box display="flex" >
                    <Link href="#" style={{paddingRight:"15px"}}>Home</Link>
                    <Link href="#" style={{paddingRight:"15px"}}>About Me</Link>
                    <Link href="#" style={{paddingRight:"15px"}}>Technologies</Link>
                    <Link href="#" style={{paddingRight:"15px"}}>Download CV</Link>
                    <Link href="#" style={{paddingRight:"15px"}}>Proyects</Link>
                    <Link href="#" style={{paddingRight:"15px"}}>Contact</Link>
                </Box>
            </Box>
        </nav>
     );
}
 
export default Navbar;