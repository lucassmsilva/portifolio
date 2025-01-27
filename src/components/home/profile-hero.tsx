"use client";

import Grid from '@mui/material/Grid2';
import { Box, Typography, Container } from '@mui/material';
import AnimatedText from './animated-text';
import SkillsSection from './skills-section';
import ContactInfo from './contact-info';

interface ProfileHeroProps {
  name: string;
  title: string;
  location: string;
}

const ProfileHero = ({ name, title, location }: ProfileHeroProps) => {
  const texts = ['passionate about coding', 'Creative problem solver', 'Results-oriented professional', 'Lifelong learner'];

  return (
    <Container maxWidth="lg" className='mt-12'>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom>
              Hello
            </Typography>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              I&apos;m {name}
            </Typography>
            <Typography variant="h4" gutterBottom color='primary'>
              {title}
            </Typography>
            <Typography variant="h5" color='gray'>
              Based in {location}
            </Typography>
          </Box>
          <SkillsSection />
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              component="img"
              src="/eu.webp"
              alt="Profile"
              sx={{
                width: '100%',
                maxWidth: 600,
                height: 'auto',
              }}
            />
            <AnimatedText texts={texts} />
            <ContactInfo></ContactInfo>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileHero;