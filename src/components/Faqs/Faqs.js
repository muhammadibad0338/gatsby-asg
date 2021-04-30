import React from "react";
import { Container, Button, Grid, Typography} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



const useStyles = makeStyles((theme) => ({
  faqs: {
    marginBottom: "70px",
    textAlign:"center"
  },
  faqsCntnr: {
    width: "80%",
    marginBottom:"30px"
  },
  heading: {
    padding:"10px 0px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily:"Abril Fatface",
    letterSpacing:"2px"
  },
  btn: {
    backgroundColor: "#1A519B",
    color: "white",
    padding: "10px 30px",
    marginTop: "60px",
    '&:hover': {
      color: 'white',
      backgroundColor: "#1A519B"
  }
    // marginLeft: "10px",
  },
}));

const Faqs = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container >
        <Grid item xs={12}>
          <Typography className={classes.faqs} variant="h4">
            <b>FAQs</b>
          </Typography>
        </Grid>
        <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}> 
          <div className={classes.faqsCntnr}>
            <Accordion style={{border:"1px solid black"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} > My door stopped working and it’s pretty late at night. Can you have someone over now? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}> 
          <div className={classes.faqsCntnr}>
            <Accordion style={{border:"1px solid black"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} > My door stopped working and it’s pretty late at night. Can you have someone over now? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}> 
          <div className={classes.faqsCntnr}>
            <Accordion style={{border:"1px solid black"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} > My door stopped working and it’s pretty late at night. Can you have someone over now? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item xs={12} style={{display:"flex",justifyContent:"center"}}> 
          <div className={classes.faqsCntnr}>
            <Accordion style={{border:"1px solid black"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} > My door stopped working and it’s pretty late at night. Can you have someone over now? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div style={{textAlign:"center"}}>
            <Button className={classes.btn}>Get a quote now!</Button>
        </div>
        </Grid>
       
      </Grid>
    </div>
  );
};

export default Faqs;
