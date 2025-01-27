// src/components/home/AnimatedText.tsx
import { Paper, Typography } from '@mui/material';
import { useTypewriter } from './use-type-writter';

interface AnimatedTextProps {
  texts: string[];
}

const AnimatedText = ({ texts }: AnimatedTextProps) => {
  const displayText = useTypewriter({
    texts,
    typeDelay: 150,
    backspaceDelay: 100
  });

  return (
    <Paper elevation={1} sx={{ p: 2, bgcolor: '' }}>
      <Typography 
        component="code"
        sx={{ 
          fontFamily: 'monospace',
          fontSize: '1.125rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        I&apos;m a {displayText}
        <span style={{ 
          marginLeft: '2px',
          animation: 'blink 1s step-end infinite'
        }}>|</span>
      </Typography>
    </Paper>
  );
};

export default AnimatedText;
