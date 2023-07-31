import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{ mb: "5px" }}
        variant="h2"
        color={{ color: theme.palette.secondary[100] }}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h5" color={{ color: theme.palette.secondary[300] }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
