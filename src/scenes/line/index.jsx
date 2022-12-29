import { Box } from "@mui/system";
import Header from "../../components/header";
import LineChart from "../../components/LineChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Revenue"></Header>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Geo;
