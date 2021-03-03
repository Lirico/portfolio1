import React from 'react';

import ReactLogo from '../images/react.png';
import Redux from '../images/redux.png';
import Javascript from '../images/javascript.png';
import Css from '../images/css.png';
import Html from '../images/html.png';
import Node from '../images/node.png';
import Express from '../images/express.png';
import MongoDB from '../images/mongo.png';
import Firebase from '../images/firebase.png';
import Api from '../images/api.png';
import VisualCode from '../images/visualcode.png';
import Git from '../images/git.png';
import Bootstrap from '../images/bootstrap.png';
import Next from '../images/next.png';
import MaterialUi from '../images/materialui.png';

import styled from '@emotion/styled';
import {
    Box,
    Grid,
    Typography
} from '@material-ui/core'

const IconSize = styled.img`
    width: 3rem;
    vertical-align: middle;
    margin-right: 0.5rem;
`;

const Technologies = () => {
    return ( 
        <Box mb={12} id="technologies">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography style={{  borderBottom: "solid 3px #0276FD", width: "1.5rem"}}></Typography>
                <Typography variant="h4" component="h2" align="center" style={{margin:"0 3px 0 3px"}}>
                    Technologies
                </Typography>
                <Typography style={{  borderBottom: "solid 3px #0276FD", width: "1.5rem"}}></Typography>
            </Box>
            <Grid container>
                <Grid container item sm={4} justify="center">
                    <Box display="column">
                        <Box mb={2} mt={5}>
                            <Typography variant="h5" component="h2">
                                Front-end
                            </Typography>
                        </Box >
                        <Box display="column"> 
                            <Typography component="p"><IconSize src={ReactLogo}></IconSize>React</Typography>
                            <Typography component="p"><IconSize src={Redux}></IconSize>Redux</Typography>
                            <Typography component="p"><IconSize src={Javascript}></IconSize>JavaScript</Typography>
                            <Typography component="p"><IconSize src={Css}></IconSize>CSS</Typography>
                            <Typography component="p"><IconSize src={Html}></IconSize>HTML</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item sm={4} justify="center">
                <Box display="column">
                    <Box mb={2} mt={5}>
                        <Typography variant="h5" component="h2">
                            Back-end
                        </Typography>
                    </Box>
                    <Box display="column"> 
                        <Typography><IconSize src={Node}></IconSize>Node.js</Typography>
                        <Typography><IconSize src={Express}></IconSize>Express</Typography>
                        <Typography><IconSize src={MongoDB}></IconSize>MongoDB</Typography>
                        <Typography><IconSize src={Firebase}></IconSize>Firebase</Typography>
                        <Typography><IconSize src={Api}></IconSize>API Rest</Typography>
                    </Box>
                </Box>
                </Grid>
                <Grid container item sm={4} justify="center">
                <Box display="column">
                    <Box mb={2} mt={5}>
                        <Typography variant="h5" component="h2">
                            More skills
                        </Typography>
                    </Box>
                    <Box display="column"> 
                        <Typography><IconSize src={VisualCode}></IconSize>VS Code</Typography>
                        <Typography><IconSize src={Git}></IconSize>Git</Typography>
                        <Typography><IconSize src={Bootstrap}></IconSize>Bootstrap</Typography>
                        <Typography><IconSize src={Next}></IconSize>Next.js</Typography>
                        <Typography><IconSize src={MaterialUi}></IconSize>Material UI</Typography>
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Technologies;