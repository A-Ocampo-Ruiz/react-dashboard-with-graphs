import { Box } from "@mui/system";
import PieChart from "../../components/PieChart";
import Header from "../../components/header";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Tech stack" subtitle="Programming skills"></Header>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
