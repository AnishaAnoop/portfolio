import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { Header } from './header';
import { useTheme } from '@mui/material/styles';
import { About } from './about';
import { Technologies } from './technologies';
import { Experience } from './experience';
import { Projects } from './projects';
import { Footer } from './footer';
import { Education } from './education';

export const App = () => {

  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.gradient?.primary, height: '100%' }}>
      <Header />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </Box>
  );
}

export default App;
