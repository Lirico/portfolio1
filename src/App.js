import React, { Fragment } from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Technologies from './components/technologies';
import Resume from './components/resume';
import Projects from './components/projects';
import ContactMe from './components/contactMe';
import Footer from './components/footer';




function App() {
  return (
    <Fragment>
          <Navbar />
          <Home />
          <AboutMe />
          <Technologies />
          <Resume />
          <Projects />
          <ContactMe />
          <Footer />
    </Fragment>
  );
}

export default App;
