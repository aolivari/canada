import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Chip,
} from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import DayCard from './components/DayCard';
import { tripData } from './data/tripData';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pb: 4 }}>
        {/* Header */}
        <AppBar position="sticky" sx={{ bgcolor: '#1a3a5c', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
          <Toolbar sx={{ px: 2 }}>
            <FlightIcon sx={{ mr: 1, color: '#e67e22' }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                🇨🇦 Canadá 2026
              </Typography>
              <Typography variant="caption" sx={{ color: '#aac', fontSize: '0.7rem' }}>
                {tripData.dates}
              </Typography>
            </Box>
            <Chip
              label="Antonio + familia"
              size="small"
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '0.65rem',
                height: 24,
              }}
            />
          </Toolbar>
        </AppBar>

        {/* Timeline */}
        <Container maxWidth="sm" sx={{ px: 1.5, mt: 2 }}>
          {tripData.days.map((day, i) => (
            <DayCard key={i} day={day} index={i} />
          ))}
        </Container>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', mt: 4, px: 2 }}>
          <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem' }}>
            🍁 Viaje familiar a Canadá — Agosto 2026
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
