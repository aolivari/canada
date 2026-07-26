import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  AppBar,
  Toolbar,
  Chip,
} from '@mui/material';
import {
  Flight,
  Description,
  Download,
  CheckCircle,
} from '@mui/icons-material';
import { tripData } from './data/tripData';

export default function DocsPage() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pb: 4 }}>
      <AppBar position="sticky" sx={{ bgcolor: '#1a3a5c' }}>
        <Toolbar sx={{ px: 2 }}>
          <Flight sx={{ mr: 1, color: '#e67e22' }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem' }}>
              📋 Documentación del Viaje
            </Typography>
          </Box>
          <Chip label={tripData.family} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.65rem', height: 24 }} />
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ px: 1.5, mt: 2 }}>
        <Card sx={{ mb: 2, bgcolor: '#e8f5e9', borderLeft: '4px solid #2e7d32' }}>
          <CardContent sx={{ py: 1.5 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem', color: '#2e7d32' }}>
              ¿Ya tenéis esto?
            </Typography>
            <Typography variant="caption" sx={{ color: '#555', fontSize: '0.75rem' }}>
              Marca mentalmente cada documento antes de salir de casa
            </Typography>
          </CardContent>
        </Card>

        {tripData.documents.map((doc, i) => (
          <Card key={i} sx={{ mb: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.5, '&:last-child': { pb: 1.5 } }}>
              <CheckCircle sx={{ color: '#2e7d32', fontSize: 28 }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                  {doc.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#888', fontSize: '0.72rem' }}>
                  {doc.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button
            variant="contained"
            startIcon={<Description />}
            sx={{ bgcolor: '#1a3a5c', textTransform: 'none', borderRadius: 8, px: 3 }}
            onClick={() => window.history.back()}
          >
            Volver al itinerario
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
