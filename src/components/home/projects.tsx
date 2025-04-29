import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Chip, Button, Stack } from '@mui/material';
import { Launch as LaunchIcon } from '@mui/icons-material';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Prompt Generator',
      description: 'Site que cria prompts otimizados para o Claude',
      url: 'https://prompt.lucassmsilva.com.br/',
      imageUrl: '/images/prompt-builder.png',
      tags: ['React', 'AI', 'Claude']
    },
    {
      id: 2,
      title: 'JurisCalc (Nome provisório)',
      description: 'Plataforma de cálculos jurídicos',
      url: 'https://juriscalc.lucassmsilva.com.br/dashboard',
      imageUrl: '/images/juriscalc.png',
      tags: ['React', 'Direito', 'Cálculos']
    }
  ];

  return (
    <Box sx={{ py: 8}}>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom 
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Projetos
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip 
                        key={tag}
                        label={tag}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                  
                  <Button 
                    variant="text" 
                    color="primary" 
                    endIcon={<LaunchIcon />}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar projeto
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;