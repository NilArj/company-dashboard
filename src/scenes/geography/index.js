import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Geography Chart" />
      <Box height="65vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
