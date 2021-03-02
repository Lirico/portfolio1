import React from 'react';
import styled from '@emotion/styled';

import {
    Box,
    Grid,
    Typography
} from '@material-ui/core'

const IconSize = styled.img`
    width: 3rem;
    vertical-align: middle;
    margin-right: 5px;
`;

const Technologies = () => {
    return ( 
        <Box mb={8} id="technologies">
                <Typography variant="h4" component="h2" align="center">
                    Technologies
                </Typography>
            <Grid container>
                <Grid container item sm={4} justify="center">
                    <Box display="column">
                        <Box mb={2} mt={5}>
                            <Typography variant="h5" component="h2">
                                Front-end
                            </Typography>
                        </Box >
                        <Box display="column"> 
                            <Typography component="p"><IconSize src="https://ionicframework.com/docs/assets/icons/logo-react-icon.png"></IconSize>React</Typography>
                            <Typography component="p"><IconSize src="https://www.vergic.com/wpsitefiles_de3fxs/wp-content/uploads/2017/04/logo.png"></IconSize>Redux</Typography>
                            <Typography component="p"><IconSize src="https://mercedesdavila.github.io/img/js.png"></IconSize>JavaScript</Typography>
                            <Typography component="p"><IconSize src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png"></IconSize>CSS</Typography>
                            <Typography component="p"><IconSize src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png"></IconSize>HTML</Typography>
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
                        <Typography><IconSize src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png"></IconSize>Node.js</Typography>
                        <Typography><IconSize src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"></IconSize>Express</Typography>
                        <Typography><IconSize src="https://ciberseguridadahora.files.wordpress.com/2018/03/mongodb-jpgg.jpg?w=323&h=323"></IconSize>MongoDB</Typography>
                        <Typography><IconSize src="https://img.icons8.com/color/452/firebase.png"></IconSize>Firebase</Typography>
                        <Typography><IconSize src="https://image.flaticon.com/icons/png/512/2165/2165004.png"></IconSize>API Rest</Typography>
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
                        <Typography><IconSize src="https://equinusocio.gallerycdn.vsassets.io/extensions/equinusocio/vsc-material-theme/32.5.0/1581769762885/Microsoft.VisualStudio.Services.Icons.Default"></IconSize>VS Code</Typography>
                        <Typography><IconSize src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"></IconSize>Git</Typography>
                        <Typography><IconSize src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/480px-Bootstrap_logo.svg.png"></IconSize>Bootstrap</Typography>
                        <Typography><IconSize src="https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"></IconSize>Next.js</Typography>
                        <Typography><IconSize src="https://img.icons8.com/color/452/material-ui.png"></IconSize>Material UI</Typography>
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Technologies;