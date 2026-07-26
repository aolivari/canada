import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import {
  DirectionsCar,
  Train,
  Flight,
  LocationOn,
  LocalFireDepartment,
  Restaurant,
  Forest,
  Star,
} from '@mui/icons-material';
import type { Activity } from '../data/tripData';

const iconMap: Record<string, React.ReactNode> = {
  '✈️': <Flight />,
  '🚂': <Train sx={{ color: '#e67e22' }} />,
  '🚗': <DirectionsCar />,
};

interface Props {
  activity: Activity;
}

export default function ActivityCard({ activity }: Props) {
  const getIcon = () => {
    if (activity.isHike) return <Forest sx={{ color: '#2e7d32' }} />;
    if (activity.isRestaurant) return <Restaurant sx={{ color: '#c62828' }} />;
    if (iconMap[activity.icon]) return iconMap[activity.icon];
    return null;
  };

  const getColor = () => {
    if (activity.isHike) return '#e8f5e9';
    if (activity.isRestaurant) return '#fff3e0';
    return '#fff';
  };

  return (
    <Card
      sx={{
        mb: 1.5,
        bgcolor: getColor(),
        borderLeft: 4,
        borderColor: activity.isHighlight
          ? '#e67e22'
          : activity.isHike
            ? '#2e7d32'
            : activity.isRestaurant
              ? '#c62828'
              : '#1a3a5c',
        borderRadius: '0 12px 12px 0',
        boxShadow: activity.isHighlight ? '0 2px 12px rgba(230,126,34,0.15)' : '0 1px 4px rgba(0,0,0,0.08)',
      }}
    >
      <CardContent sx={{ py: 1.5, px: 2, '&:last-child': { pb: 1.5 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: '#666',
              minWidth: 60,
              fontFamily: 'monospace',
              fontSize: '0.75rem',
            }}
          >
            {activity.time}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flex: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '1.1rem' }}>
              {activity.icon}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: '0.88rem',
                color: activity.isHighlight ? '#e67e22' : '#333',
              }}
            >
              {activity.title}
            </Typography>
          </Box>
          {activity.isHighlight && (
            <Chip
              icon={<Star sx={{ fontSize: 14 }} />}
              label="TOP"
              size="small"
              sx={{
                bgcolor: '#e67e22',
                color: '#fff',
                fontSize: '0.65rem',
                height: 22,
                '& .MuiChip-icon': { color: '#fff', fontSize: 14 },
              }}
            />
          )}
        </Box>

        <Typography
          variant="caption"
          sx={{ color: '#666', display: 'block', ml: '60px', fontSize: '0.78rem', lineHeight: 1.4 }}
        >
          {activity.description}
        </Typography>

        {activity.location && (
          <Box sx={{ ml: '60px', mt: 0.5 }}>
            <Button
              href={activity.location.mapsUrl}
              target="_blank"
              rel="noopener"
              size="small"
              startIcon={<LocationOn sx={{ fontSize: 16 }} />}
              sx={{
                textTransform: 'none',
                fontSize: '0.72rem',
                color: '#1a73e8',
                p: 0,
                minHeight: 24,
                '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
              }}
            >
              {activity.location.name}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
