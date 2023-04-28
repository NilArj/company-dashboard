import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Geography Chart" />
      <Box m="20px auto 0 auto" height="65vh" maxWidth="99%">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
