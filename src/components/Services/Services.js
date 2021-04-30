import React from "react";
import { Container, Button, Grid, Typography } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import calendar from "../../Assets/calendar.png";
import hours from "../../Assets/hours.png";
import licensing from "../../Assets/licensing.png";
import back from "../../Assets/back.png";
import team from "../../Assets/team.png";
import rating from "../../Assets/rating.png";

const srvcIcon = [calendar,hours,licensing,back,team,rating]

const useStyles = makeStyles((theme) => ({
  servcHead: {
    color: "white",
    opacity: "0.7",
  },
  srvcCntnr: {
    marginTop:"50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent:"center",
    marginBottom:"50px"
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ backgroundColor: "#2196f3" }}>
        <Grid item xs={12} style={{marginBottom:"30px"}}>
          <Typography variant="h3" style={{ marginTop: "50px",fontFamily:'Abril Fatface',textAlign:"center"}} className={classes.servcHead}>
            What makes us your best choice?
          </Typography>
        </Grid>
        {/* <Grid md={4} xs={12}>
          <div className={classes.srvcCntnr}>
            <img style={{ width: "61px", height: "61px" }} src={calendar} />
            <Typography
              style={{ marginTop: "20px" }}
              variant="h6"
              className={classes.servcHead}
            >
              <b>Same day service</b>{" "}
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.servcHead}
            >
              Our Services is fast and reliavle
            </Typography>
            <Typography className={classes.servcHead}>
              Our Services is fast and reliavle
            </Typography>
            <Typography className={classes.servcHead}>
              Our Services is fast and reliavle
            </Typography>
          </div>
        </Grid> */}
       {
        srvcIcon.map((val,i)=>{
            return(
                <Grid md={4} xs={12}>
          <div className={classes.srvcCntnr}>
            <img style={{ width: "61px", height: "61px" }} src={val} />
            <Typography
              style={{ marginTop: "20px", fontFamily:'Abril Fatface'}}
              variant="h5"
              className={classes.servcHead}
            >
              Same day service
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.servcHead}
            >
              Our Services is fast and reliavle
            </Typography>
            <Typography className={classes.servcHead}>
              Our Services is fast and reliavle
            </Typography>
            <Typography className={classes.servcHead}>
              Our Services is fast and reliavle
            </Typography>
          </div>
        </Grid>
            )
        })
       }
      </Grid>
    </>
  );
};

export default Services;
