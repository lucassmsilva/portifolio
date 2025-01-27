import { GitHub, LinkedIn } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { Mail } from "lucide-react";
import Link from "next/link";

const Navbar = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href={"/"}>Lucas Silva</Link>
      </Typography>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href={"/blog"}>Blog</Link>
        </Typography>

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
    </Toolbar>
  </AppBar>
);

export default Navbar;
