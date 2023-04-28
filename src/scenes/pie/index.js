import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Pie Chart" />
      <Box m="20px auto 0 auto" height="65vh" maxWidth="99%">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
