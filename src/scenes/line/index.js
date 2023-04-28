import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Line Chart" />
      <Box m="20px auto 0 auto" height="65vh" maxWidth="99%">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
