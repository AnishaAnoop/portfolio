import React from 'react';
import './App.css';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <Box sx={{ paddingY: 8, color: 'text.primary', display: 'Flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#ffffff' }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ lineHeight: 1.8, fontSize: '1.1rem', mt: 2 }}
          >
            I'm a passionate Front End Developer with 8+ years of experience building web applications.
            I specialize in React, TypeScript, and modern CSS frameworks. Adept at problem-solving,
            optimizing performance, and collaborating in dynamic team environments to deliver quality
            software solutions.
          </Typography>
        </Container>

      </motion.div>
    </Box>
  );
}

