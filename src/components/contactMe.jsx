import React from 'react';
import Button from './ui/button';

import {
    Box,
    Grid,
    Typography
} from '@material-ui/core'

const ContactMe = () => {
    return ( 
        <Box pt={10} pb={8} pl={2} pr={4} mb={8} ml={5} mr={5} id="contactme" style={{backgroundColor: "#F7F7F7", borderRadius: "6px"}}>

            <Grid container>
                <Grid container item sm={5} justify="center" style={{marginBottom: "2rem"}}>
                    <Box display="flex" flexDirection="column" pl={9}>
                        <Box mb={3}>
                            <Typography 
                                variant="h3" 
                                component="h3"
                                style={{
                                    fontWeight: "bold"
                                }}
                            >
                                Has my profile been interesting to you?
                            </Typography>
                        </Box>
                        <Box 
                            mb={5}
                            style={{
                                borderBottom: "solid 3px #0276FD",
                                width: "3rem"
                            }}
                        ></Box>
                        <Box>
                            <Typography 
                                component="p"
                                style={{
                                    color: "#808080", 
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam suscipit, repudiandae, aspernatur accusantium illo nobis impedit eos maiores a culpa eveniet ipsum voluptatum ad, error dolor soluta quis nihil.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item sm={7} style={{marginBottom: "2rem"}} justify="center">
                    <form>
                        <Box display="flex">
                            <Box mr={4} mb={2}>
                                <input 
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    style={{
                                        border: "none",
                                        borderRadius: "6px",
                                        height: "2.5rem",
                                        paddingLeft: "1rem",
                                        width: "100%",
                                    }}
                                />
                            </Box>
                            <Box>
                                <input 
                                    type="text"
                                    placeholder="Your email"
                                    name="email"
                                    style={{
                                        border: "none",
                                        borderRadius: "6px",
                                        height: "2.5rem",
                                        paddingLeft: "1rem",
                                        width: "100%"
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box mb={-2}>
                            <textarea
                                placeholder="Send me a message"
                                name="msj"
                                style={{
                                    border: "none",
                                    borderRadius: "6px",
                                    height: "10rem",
                                    paddingLeft: "1rem",
                                    width: "100%"
                                }}
                            ></textarea>
                        </Box>
                        <Box display="flex" justifyContent="flex-end">
                            <Button
                                type="submit"
                                style={{ 
                                    fontWeight: "bold",
                                    fontSize: "0.8rem",
                                    marginRight: "-1.1rem",
                                    paddingTop:"8px", 
                                    paddingBottom: "8px",
                                    textAlign: "center", 
                                    textTransform: "uppercase",
                                    width: "50%"
                                }}
                            >Send message</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default ContactMe;