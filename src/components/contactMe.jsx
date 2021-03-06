import React from 'react';
import ButtonForm from './ui/buttonform';

import useForm from "../components/contact/useForm";
import validate from "./contact/validate";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

import styled from "@emotion/styled";
import {
    Box,
    Grid,
    Typography
} from '@material-ui/core';

export const Error = styled.p`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
  font-family: "Ubuntu", sans-serif;
`;

const Toast = Swal.mixin({
    toast: true,
    position: "start-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

const ContactMe = () => {
    const submit = () => {
        let templateParams = {
          from_name: values.email,
          to_name: "dominguezmatiasadrian@gmail.com",
          subject: values.name,
          message: values.msj,
        };
        emailjs
          .send(
            "gmail",
            "template_giaqfsr",
            templateParams,
            "user_yZyxeasxVmTcG19Dy1H5F"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              Toast.fire({
                icon: "success",
                title: "The data has been sent. Thanks a lot!",
              });
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
        reset();
      };
      const { values, handleChange, handleSubmit, errors, reset } = useForm(
        submit,
        validate
      );

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
                                borderBottom: "solid 3px #00A901",
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
                                If the answer is yes, please do not hesitate to contact me.
                                You can do it through this form or also through an email or whatsapp.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container item sm={7} style={{marginBottom: "2rem"}} justify="center">
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <Box display="flex">
                            <Box mr={4} mb={2}>
                                <input 
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    value={values.name}
                                    onChange={(e) => handleChange(e)}
                                    style={{
                                        border: "none",
                                        borderRadius: "6px",
                                        height: "2.5rem",
                                        paddingLeft: "1rem",
                                        width: "100%",
                                    }}
                                />
                            </Box>
                            {errors.name && <Error>{errors.name}</Error>}
                            <Box>
                                <input 
                                    type="text"
                                    placeholder="Your email"
                                    name="email"
                                    value={values.email}
                                    onChange={(e) => handleChange(e)}
                                    style={{
                                        border: "none",
                                        borderRadius: "6px",
                                        height: "2.5rem",
                                        paddingLeft: "1rem",
                                        width: "100%"
                                    }}
                                />
                            </Box>
                            {errors.email && <Error>{errors.email}</Error>}
                        </Box>
                        <Box mb={-2}>
                            <textarea
                                placeholder="Send me a message"
                                name="msj"
                                value={values.msj}
                                onChange={(e) => handleChange(e)}
                                style={{
                                    border: "none",
                                    borderRadius: "6px",
                                    height: "10rem",
                                    paddingLeft: "1rem",
                                    paddingTop: "1rem",
                                    width: "100%"
                                }}
                            ></textarea>
                        </Box>
                        {errors.msj && <Error>{errors.msj}</Error>}
                        <Box display="flex" justifyContent="flex-end">
                            <ButtonForm
                                type="submit"
                                style={{ 
                                    fontWeight: "bold",
                                    fontSize: "0.8rem",
                                    marginRight: "-1.1rem",
                                    paddingTop:"8px", 
                                    paddingBottom: "8px",
                                    textAlign: "center", 
                                    textTransform: "uppercase",
                                    width: "60%"
                                    }}
                            >Send message</ButtonForm>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default ContactMe;