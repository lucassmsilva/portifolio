import { useState, useEffect } from 'react';

interface TypewriterOptions {
  texts: string[];
  typeDelay?: number;
  backspaceDelay?: number;
}

export const useTypewriter = ({ texts, typeDelay = 150, backspaceDelay = 100 }: TypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typeDelay);
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
      }
    } else {
      if (displayText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, backspaceDelay);
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [displayText, currentIndex, isTyping, texts, typeDelay, backspaceDelay]);

  return displayText;
};