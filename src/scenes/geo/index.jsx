import { Box } from "@mui/system";
import Header from "../../components/header";
import GeographyChart from "../../components/GeographyChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="World chart"></Header>
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geo;
