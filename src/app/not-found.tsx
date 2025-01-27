// app/not-found.tsx
'use client';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2">404</Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>Page Not Found</Typography>
      <Button variant="contained" onClick={() => router.push('/')}>
        Go Home
      </Button>
    </Box>
  );
}
