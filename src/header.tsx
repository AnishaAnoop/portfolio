import React from 'react';
import './App.css';
import { Avatar, Box, Container, Typography } from '@mui/material';
import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <Box sx={{ color: 'text.primary', display: 'Flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>

      <Avatar
        alt="Anisha C S"
        src='/images/anisha.jpeg'
        sx={{ width: 200, height: 200, objectFit: 'cover', }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <Container maxWidth="md" sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Anisha C S
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            align="center"
            gutterBottom
          >
            Front End Developer
          </Typography>
          <Box sx={{ paddingTop: 4, display: 'flex', gap: 2, flexDirection: 'row', alignSelf: 'center' }}>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.9, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <GitHub sx={{ height: 26, width: 26, color: 'text.primary' }} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anisha-c-s-2077b3135/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.9, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <LinkedIn sx={{ height: 26, width: 26, color: 'text.primary' }} />
            </motion.a>
            <motion.a
              href="mailto:anishacs94@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.9, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Email sx={{ height: 26, width: 26, color: 'text.primary' }} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ivus_mom/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.9, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Instagram sx={{ height: 26, width: 26, color: 'text.primary' }} />
            </motion.a>
          </Box>
        </Container>

      </motion.div>
    </Box>
  );
}

