import React, { useState } from 'react';
import Option from './ui/option';

import styled from '@emotion/styled';
import {
    Box,
    Link,
    Typography
} from '@material-ui/core'

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    transition: all 0.3s ease;
`;


const Navbar = () => {

    const [ navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return ( 
            <Nav 
                className={ navbar ? 'bgactive' : null }
            >
                <Box 
                    display="flex" 
                    justifyContent="space-between" 
                    pl={2} pr={3} 
                    alignItems="center"
                    className={ navbar ? 'bgactive' : null }
                >
                    <Box>
                        <Typography 
                            variant="h4" 
                            component="h2" 
                            style={{
                                color: '#fff',
                                fontWeight: "700",
                            }}
                        >
                            Portfolio
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <Link href="#"><Option className={ navbar ? 'optionhover' : null }>Home</Option></Link>
                        <Link href="#aboutme"><Option className={ navbar ? 'optionhover' : null }>About Me</Option></Link>
                        <Link href="#technologies"><Option className={ navbar ? 'optionhover' : null }>Technologies</Option></Link>
                        <Link href="#resume"><Option className={ navbar ? 'optionhover' : null }>Download CV</Option></Link>
                        <Link href="#projects"><Option className={ navbar ? 'optionhover' : null }>Proyects</Option></Link>
                        <Link href="#contactme"><Option className={ navbar ? 'optionhover' : null }>Contact</Option></Link>
                    </Box>
                </Box>
            </Nav>
     );
}
 
export default Navbar;