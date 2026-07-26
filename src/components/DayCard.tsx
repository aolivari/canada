import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Divider,
} from '@mui/material';
import type { Day } from '../data/tripData';
import ActivityCard from './ActivityCard';

interface Props {
  day: Day;
  index: number;
}

export default function DayCard({ day, index }: Props) {
  const isHighlight = (t: string) =>
    t.includes('NIAGARA') || t.includes('Clifton Hill') || t.includes('Despedida');

  return (
    <Box sx={{ mb: 3 }}>
      {/* Fecha cabecera */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          mb: 1.5,
          px: 1,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: isHighlight(day.title) ? '#e67e22' : '#1a3a5c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.75rem',
            flexShrink: 0,
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          {day.date.split(' ')[0]}
          <br />
          {day.date.split(' ')[1]}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="caption" sx={{ color: '#999', fontWeight: 600, fontSize: '0.7rem' }}>
              {day.dayName}
            </Typography>
            {isHighlight(day.title) && (
              <Chip label="🔥 IMPERDIBLE" size="small" sx={{ bgcolor: '#e67e22', color: '#fff', fontSize: '0.6rem', height: 20 }} />
            )}
          </Box>
          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1a3a5c' }}>
            {day.title.split('—')[0]}
            {day.title.includes('—') && (
              <>
                <br />
                <Typography variant="caption" sx={{ color: '#666', fontWeight: 400, fontSize: '0.8rem' }}>
                  {day.title.split('—')[1]}
                </Typography>
              </>
            )}
          </Typography>
          {day.subtitle && (
            <Typography variant="caption" sx={{ color: '#888', fontSize: '0.72rem' }}>
              {day.subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Actividades */}
      {day.activities.map((act, i) => (
        <ActivityCard key={i} activity={act} />
      ))}
    </Box>
  );
}
