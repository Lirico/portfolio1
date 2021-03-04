import React from 'react';
import ShowImage from './ui/showImages';

import Project1 from '../images/project1.png';
import Project2 from '../images/project2.png';
import Project3 from '../images/project3.png';

import {
    Box,
    Link,
    Typography
} from '@material-ui/core'

const Projects = () => {
    return ( 
        <Box mb={12} id="projects"> 
            <Box mb={4}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography style={{  borderBottom: "solid 3px #00A901", width: "1.5rem"}}></Typography>
                    <Typography variant="h4" component="h2" align="center" style={{margin:"0 3px 0 3px", fontWeight: "bold"}}>
                        My Projects
                    </Typography>
                    <Typography style={{  borderBottom: "solid 3px #00A901", width: "1.5rem"}}></Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                <Box mr={0.5} mb={0.5} className="project_image">
                    <Link href="https://kind-kare-aa9d8b.netlify.app">
                            <ShowImage className="image_img"
                             src={Project1}
                            ></ShowImage>
                        <div className="image_overlay">
                            <div className="image_title">Car insurance quote</div>                              
                            <p className="image_description">Made in React</p>
                        </div>
                    </Link>
                </Box>
                <Box mr={0.5} mb={0.5} className="project_image">
                    <Link href="https://silly-babbage-8a0ffb.netlify.app">
                            <ShowImage className="image_img"
                                src={Project2}
                            ></ShowImage>
                        <div className="image_overlay">
                            <div className="image_title">Cryptocurrency quote</div>                              
                            <p className="image_description">Made in React</p>
                        </div>
                    </Link>
                </Box>                
                <Box mr={0.5} mb={0.5} className="project_image">
                    <Link href="https://adoring-lamport-49c7cf.netlify.app">
                            <ShowImage className="image_img"
                                src={Project3}
                            ></ShowImage>
                        <div className="image_overlay">
                            <div className="image_title">Beverage Finder</div>                              
                            <p className="image_description">Made in React with Axios and Context</p>
                        </div>
                    </Link>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Projects;