import React from "react";
import { Container, Button, Grid, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import tool from "../../Assets/tool.png";

const useStyles = makeStyles((theme) => ({
  txtCntnr: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    marginLeft:"15%",
    [theme.breakpoints.down("md")]: {
        marginLeft:"0px",
      width: "100%",
    },
  },
  Pic: {
    maxHeight: "550px",
    // height:"auto",
    width: "90%",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
        marginLeft:"0px",
      width: "100%",
    },
    // clipPath: "polygon(0 0, 73% 0, 100% 100%, 0% 100%)"
    // clipPath: "polygon(0 0, 84% 0, 100% 100%, 0% 100%)",
  },
  SrvcCntnr: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItem: "center",
    },
  },
  Service: {
    backgroundColor: "#1A519B",
    color: "white",
    padding: "10px 30px",
    marginTop: "30px",
    marginLeft: "10px",
    '&:hover': {
      color: 'white',
      backgroundColor: "#1A519B"
  }
  },
}));

const Repair = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container style={{margin:"100px 0px"}}>
        <Grid item lg={6} xs={12} md={6} style={{marginBottom:"20px"}}>
          <div className={classes.txtCntnr}>
          <Typography variant="h4" style={{marginBottom:"35px",fontFamily:'Abril Fatface'}}>Why US? </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took Lorem Ipsum is
              simply dummy text of
            </Typography>
            <Typography style={{ marginTop: "30px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's 
            </Typography>
            <Typography style={{ marginTop: "30px" }}>
              Lorem Ipsum is simply dummy text of t,he printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took Lorem Ipsum is
              simply dummy text of.
            </Typography>
            <div className={classes.SrvcCntnr}>
              <Button className={classes.Service}>Our Services</Button>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <img className={classes.Pic} src={tool} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Repair;
