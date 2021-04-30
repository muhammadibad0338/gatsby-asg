import React from 'react';
import { fade, makeStyles } from "@material-ui/core/styles";
import { Container, Button, Grid, Typography,Box } from "@material-ui/core";
import Pic from "../../Assets/Pic.png";
// import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    Pic: {
      maxHeight: "550px",
      // height:"auto",
      width: "90%",
      marginRight: "10%",
      // clipPath: "polygon(0 0, 73% 0, 100% 100%, 0% 100%)"
      clipPath: "polygon(0 0, 84% 0, 100% 100%, 0% 100%)",
      [theme.breakpoints.down('md')]: {
        // maxWidth: "100vw",
        // width:"92%",
        clipPath: "none",
      },
    },
    Service: {
      backgroundColor: "#1A519B",
      color: "white",
      padding: "10px 30px",
      marginTop: "30px",
      marginLeft: "10px",
      "&:hover": {
        color: "white",
        backgroundColor: "#1A519B",
      },
    },
    SrvcCntnr: {
      display: "flex",
      justifyContent: "flex-start",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        alignItem: "center",
      },
    },
    txtCntnr: {
      width: "70%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  }));

const RepairbyAsg = () =>{
    const classes = useStyles()
    return(
        <>
        <Grid container spacing={0}>
        <Grid item lg={12} xs={12} style={{ padding: "50px 0px" }}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Abril Fatface", textAlign: "center" }}
          >
            Repairs by ASG Doors and Gates
          </Typography>
          <Typography
            variant="h4"
            style={{ fontFamily: "Abril Fatface", textAlign: "center" }}
          >
            It's What We Do Best !
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <img className={classes.Pic} src={Pic} />
        </Grid>
        <Grid item lg={6} xs={12} md={6}>
          <div className={classes.txtCntnr}>
            <Typography style={{ textAligin: "left" }}>
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
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took
            </Typography>
            <Typography style={{ marginTop: "30px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </Typography>
            <div className={classes.SrvcCntnr}>
              <Button className={classes.Service}>Our Services</Button>
            </div>
          </div>
        </Grid>
        </Grid>
        </>
    )
}
export default RepairbyAsg;