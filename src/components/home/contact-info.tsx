import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";
import { Mail } from "lucide-react";

const ContactInfo = () => (
  <Box>
        <IconButton
      color="inherit"
      href={"https://wa.me/5565993013302?text=" + encodeURIComponent("Olá, vim pelo website e gostaria de ...")}
      target="_blank"
    >
      <WhatsApp />
    </IconButton>
    <IconButton
      color="inherit"
      href="https://github.com/lucassmsilva"
      target="_blank"
    >
      <GitHub />
    </IconButton>
    <IconButton
      color="inherit"
      href="https://linkedin.com/in/lucassmsilva"
      target="_blank"
    >
      <LinkedIn />
    </IconButton>
    <IconButton color="inherit" href="mailto:lucassmsilvadev@gmail.com">
      <Mail />
    </IconButton>
  </Box>
);

export default ContactInfo;
