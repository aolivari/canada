import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1a3a5c' },
    secondary: { main: '#e67e22' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h4: { fontWeight: 700, fontSize: '1.5rem' },
    h5: { fontWeight: 600, fontSize: '1.2rem' },
    h6: { fontWeight: 600, fontSize: '1rem' },
  },
  shape: { borderRadius: 12 },
});

export default theme;
