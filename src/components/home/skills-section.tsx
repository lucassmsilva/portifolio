import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { Code, Database, Globe, GitBranch, CodeIcon } from "lucide-react";
import SkillCard from "./skill-card";

const skills = [
  {
    title: "Backend Development",
    description:
      "Expertise in C#/.NET Core and PHP/Laravel, building robust and scalable APIs",
    icon: Code,
  },
  {
    title: "Frontend Development",
    description:
      "Experience with modern frameworks like Vue, React, and Angular",
    icon: Globe,
  },
  {
    title: "Database Management",
    description:
      "Proficient in ORACLE, SQL Server, and MongoDB database systems",
    icon: Database,
  },
  {
    title: "Development Tools",
    description: "Strong command of Git, HTML, CSS, and JavaScript ecosystems",
    icon: GitBranch,
  },
];

const SkillsSection = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h5" sx={{ mb: 3 }} className="flex gap-2 items-center">
      <CodeIcon></CodeIcon>
       Main Skills
    </Typography>
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6 }}>
          <SkillCard {...skill} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SkillsSection;
