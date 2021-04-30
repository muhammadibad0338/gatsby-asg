import React from "react";
import { Container, Button, Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../Assets/Layer.png";

const useStyles = makeStyles((theme) => ({
  frstHead: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      textAlign: "center",
    },
  },
  text: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  reserved:{
    marginLeft:"20%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft:"0%"
    },
  },
  policy:{
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginTop:"30px"
      // marginLeft:"0%"
    },
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container style={{ marginTop: "100px" }}>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          {/* <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}> */}
          <img
            style={{
              width: "60%",
              height: "70px",
              //   marginLeft: "35px",
              backgroundColor: "blue",
            }}
            src={logo}
          />
          <Typography style={{ marginTop: "30px" }}> </Typography>
          <Typography>
            What makes us so awesome and why should you fill out that form?
          </Typography>
          <Typography>
            What makes us so awesome and why should you fill out that form?
          </Typography>
          <Typography>
            What makes us so awesome and why should you fill out that form?
          </Typography>
          {/* <Typography>Lorem Ipsum is simply dummy text of the </Typography> */}
          {/* </div> */}
        </Grid>
        <Grid xs={12} md={2}>
          {/* <div></div> */}
          <Typography className={classes.frstHead}>
            <b>Navigation</b>
          </Typography>
          <Typography style={{ marginTop: "30px" }} className={classes.text}>
            Home
          </Typography>
          <Typography style={{ marginTop: "10px" }} className={classes.text}>
            Service
          </Typography>
          <Typography style={{ marginTop: "10px" }} className={classes.text}>
            About us
          </Typography>
          <Typography style={{ marginTop: "10px" }} className={classes.text}>
            Book Service
          </Typography>
        </Grid>
        <Grid xs={12} md={2}>
          <Typography className={classes.frstHead}>
            <b>Company</b>
          </Typography>
          <Typography style={{ marginTop: "30px" }} className={classes.text}>
            Contact us
          </Typography>
          <Typography style={{ marginTop: "10px" }} className={classes.text}>
            Faqs
          </Typography>
        </Grid>
        <Grid xs={12} md={2}>
          <Typography className={classes.frstHead}>
            <b>Social</b>
          </Typography>
          <Typography style={{ marginTop: "30px" }} className={classes.text}>
            Facebook
          </Typography>
          <Typography style={{ marginTop: "10px" }} className={classes.text}>
            Instagram
          </Typography>
          <Typography style={{ marginTop: "10px" }} className={classes.text}>
            Google Plus
          </Typography>
          <Typography style={{ marginTop: "10px" }} className={classes.text}>
            Twitter
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ margin:"80px 0px" }}>
        {/* <div style={{ marginTop:"80px" }}> */}
        <Grid item xs={12} md={6}>
          <Typography className={classes.reserved}>
            © 2021 All Rights Reserved
          </Typography>
          {/* <Typography>Terms and Conditions Privacy Policy </Typography> */}
        </Grid>
        <Hidden mdDown>
          <Grid item md={3}></Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          md={3}
          // style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography  className={classes.policy}>Terms and Conditions Privacy Policy</Typography>
          {/* <Typography>Terms and Conditions Privacy Policy </Typography> */}
        </Grid>
      </Grid>
      {/* </div> */}
    </div>
  );
};

export default Footer;
