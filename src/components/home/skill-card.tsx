// src/components/home/SkillCard.tsx
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LucideIcon } from 'lucide-react';

const SkillCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) => (
  <Card 
    elevation={0} 
    sx={{ 
      height: '100%',
      bgcolor: 'grey.900',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)'
      },
    }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Icon size={24} color="white" />
        <Typography 
          variant="h6" 
          sx={{ 
            ml: 1,
            color: 'common.white'
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography 
        variant="body2" 
        sx={{ color: 'grey.400' }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default SkillCard;