import React from 'react';
import ShowImage from './ui/showImages';

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
                    <Typography style={{  borderBottom: "solid 3px #0276FD", width: "1.5rem"}}></Typography>
                    <Typography variant="h4" component="h2" align="center" style={{margin:"0 3px 0 3px"}}>
                        My Proyects
                    </Typography>
                    <Typography style={{  borderBottom: "solid 3px #0276FD", width: "1.5rem"}}></Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                <Box mr={0.5} mb={0.5} className="project_image">
                    <Link href="#">
                            <ShowImage className="image_img"
                             src="https://www.esan.edu.pe/apuntes-empresariales/2018/10/02/1500x844_microsoft_project.jpg"
                            ></ShowImage>
                        <div className="image_overlay">
                            <div className="image_title">Title 1</div>                              
                            <p className="image_description">Lorem ipsum dolor sit.</p>
                        </div>
                    </Link>
                </Box>
                <Box mr={0.5} mb={0.5} className="project_image">
                    <Link href="#">
                            <ShowImage className="image_img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21CaCAt0_l_pubmg4P7wLHsLcX_Qw1dSQdQ&usqp=CAU"
                            ></ShowImage>
                        <div className="image_overlay">
                            <div className="image_title">Title 2</div>                              
                            <p className="image_description">Lorem ipsum dolor sit.</p>
                        </div>
                    </Link>
                </Box>                
                <Box mr={0.5} mb={0.5} className="project_image">
                    <Link href="#">
                            <ShowImage className="image_img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9nOG0GBkEXd79ae7Q5AcvpKXX0IGJjTwRw&usqp=CAU"
                            ></ShowImage>
                        <div className="image_overlay">
                            <div className="image_title">Title 3</div>                              
                            <p className="image_description">Lorem ipsum dolor sit.</p>
                        </div>
                    </Link>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Projects;