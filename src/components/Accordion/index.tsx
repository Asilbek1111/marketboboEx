import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SimpleAccordion() {
  return (
    <div className="tel:block lg:hidden w-full">
      <Accordion style={{ backgroundColor: "#333", color: "white", border:"0px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
            <ul className="space-y-2">
              <li>
                <a href="#">B2B савдоси</a>
              </li>
              <li>
                <a href="#">Биз ҳақимизда</a>
              </li>
              <li>
                <a href="#">Янгиликлар ва шарҳлар</a>
              </li>
              <li>
                <a href="#">IMEI ни текшириш</a>
              </li>
            </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#333", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>

            <ul className="space-y-2">
              <li>
                <a href="#">B2B савдоси</a>
              </li>
              <li>
                <a href="#">Биз ҳақимизда</a>
              </li>
              <li>
                <a href="#">Янгиликлар ва шарҳлар</a>
              </li>
              <li>
                <a href="#">IMEI ни текшириш</a>
              </li>
            </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ backgroundColor: "#333", border: "none", color: "white" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Help</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>

            <ul className="space-y-2">
              <li>
                <a href="#">B2B савдоси</a>
              </li>
              <li>
                <a href="#">Биз ҳақимизда</a>
              </li>
              <li>
                <a href="#">Янгиликлар ва шарҳлар</a>
              </li>
              <li>
                <a href="#">IMEI ни текшириш</a>
              </li>
            </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default  SimpleAccordion