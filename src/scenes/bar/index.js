import React from "react";
import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar Chart" />
      <Box m="20px auto 0 auto" height="65vh" maxWidth="99%">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
