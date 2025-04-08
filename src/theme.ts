// src/theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradient?: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      primary: string;
      secondary: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: '#19252d' },
    secondary: { main: '#334155' },
    common: {
      white: '#F5F5F5'
    },
    text: { primary: '#F5F5F5' },
    gradient: {
      primary: 'linear-gradient(45deg, #19252d, #2c3f4d)',
      secondary: 'linear-gradient(45deg, #ff4081, #f50057)',
    },
  },
});

export default theme;
