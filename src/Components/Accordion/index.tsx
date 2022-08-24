import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FlexBox } from "../../GlobelStyle";

interface AccordionProps {
  text1: string;
  text2: string;
  width: number;
  child: React.ReactNode;
}

const ControlledAccordions: React.FC<AccordionProps> = (props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{
            padding: 0,
            width: props.width,
            textAlign: "start",
          }}
        >
          <Typography>{props.text1}</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.text2}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: 0 }}>
          {props.child}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ControlledAccordions;
