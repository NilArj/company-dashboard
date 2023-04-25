import React from "react";
import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar Chart" />
      <Box m="20px 0 0 0" height="65vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
