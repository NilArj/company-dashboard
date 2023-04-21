import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="0px">
      <Typography
        variant="h2"
        color={colors.primary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        fontWeight="semibold"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
