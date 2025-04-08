import './App.css';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { CSSIcon, JSIcon, MaterialUiIcon, NodeIcon, PostgreSqlIcon, ReactIcon, TypescriptIcon } from './assets/icons';

export function Technologies() {
  return (
    <Box sx={{ color: 'text.primary', display: 'Flex', flexDirection: 'column', alignItems: 'center' }}>
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
            Technologies
          </Typography>
          <Box sx={{
            alignSelf: 'center', paddingTop: 4, display: 'flex', gap: 2, flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <ReactIcon width={80} height={80} />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <MaterialUiIcon width={80} height={80} />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <JSIcon width={80} height={80} />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <CSSIcon width={80} height={80} />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <PostgreSqlIcon width={80} height={80} />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <TypescriptIcon width={80} height={80} />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <NodeIcon width={80} height={80} />
            </motion.div>
          </Box>
        </Container>

      </motion.div>
    </Box>
  );
}

