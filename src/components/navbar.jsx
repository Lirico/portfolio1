import React, { useState } from 'react';
import Option from './ui/option';
import Menu from './ui/menu';
import Sidebar from './ui/sidebar';

import styled from '@emotion/styled';
import MenuIcon from '@material-ui/icons/Menu';
import {
    Box,
    Link,
    Typography
} from '@material-ui/core'

const Navbar = () => {

    const [ navbar, setNavbar] = useState(false);
    const [ toggle, setToggle ] = useState(false);

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
                    pl={3} pr={1} pt={1} pb={1}
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
                        { toggle 
                            
                            ? 
                            <Sidebar>
                                <Link href="#"><Option className={ navbar ? 'optionhover' : null }>Home</Option></Link>
                                <Link href="#aboutme"><Option className={ navbar ? 'optionhover' : null }>About Me</Option></Link>
                                <Link href="#technologies"><Option className={ navbar ? 'optionhover' : null }>Technologies</Option></Link>
                                <Link href="#resume"><Option className={ navbar ? 'optionhover' : null }>Download CV</Option></Link>
                                <Link href="#projects"><Option className={ navbar ? 'optionhover' : null }>Proyects</Option></Link>
                                <Link href="#contactme"><Option className={ navbar ? 'optionhover' : null }>Contact</Option></Link>
                            </Sidebar>

                            : 
                        
                            <Menu>
                                <Link href="#"><Option className={ navbar ? 'optionhover' : null }>Home</Option></Link>
                                <Link href="#aboutme"><Option className={ navbar ? 'optionhover' : null }>About Me</Option></Link>
                                <Link href="#technologies"><Option className={ navbar ? 'optionhover' : null }>Technologies</Option></Link>
                                <Link href="#resume"><Option className={ navbar ? 'optionhover' : null }>Download CV</Option></Link>
                                <Link href="#projects"><Option className={ navbar ? 'optionhover' : null }>Proyects</Option></Link>
                                <Link href="#contactme"><Option className={ navbar ? 'optionhover' : null }>Contact</Option></Link>
                            </Menu>
                        }    
                        
                    <NavIcon>
                        <MenuIcon
                            onClick={() => setToggle(!toggle)}
                        />
                    </NavIcon>
                </Box>
            </Nav>
     );
}
 
export default Navbar;

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    transition: all 0.3s ease;
    z-index: 99995;
`;

const NavIcon = styled.div`
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;
  @media screen and (max-width: 768px) {
    display: block;
    z-index: 999;
    margin-right: 50px;
  }
`;