import React, { Fragment } from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Technologies from './components/technologies';
import Resume from './components/resume';
import Projects from './components/projects';
import ContactMe from './components/contactMe';
import Footer from './components/footer';

import {
  Box,
} from '@material-ui/core'


function App() {
  return (
    <Fragment>
      <Navbar />
      <Box pl={3} pr={3}>
        <Home />
        <AboutMe />
        <Technologies />
        <Resume />
        <Projects />
        <ContactMe />
      </Box>
      <Footer />
    </Fragment>
  );
}

export default App;
