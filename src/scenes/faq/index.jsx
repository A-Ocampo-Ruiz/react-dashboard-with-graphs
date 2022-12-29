import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Header title="FAQ" subtitle="Frequently asked questions:" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Which dependencies does this fontend app has?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This site was made with React, React Router, Material UI,
            FullCalendar, Formik, YUP, Nivo Graphs and the Emotion CSS library.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Which Build Tool was used?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This site used Vite as a build tool.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
