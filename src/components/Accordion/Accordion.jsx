import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function SimpleAccordion({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{ mb: 3, boxShadow: "none", "&::before": { display: "none" } }}
        >
          <AccordionSummary
            expandIcon={<AddIcon color="primary" />}
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
            sx={{
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(45deg)",
              },
              px: 0,
            }}
          >
            <Typography
              fontSize={18}
              fontWeight={700}
              color="#1B3C74"
              lineHeight={1.2}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0 }}>
            <Typography fontSize={14}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
