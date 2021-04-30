import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import repair from "../../Assets/repair.png"
import Door from "../../Assets/door.png"
import CallIcon from '@material-ui/icons/Call';


const useStyles = makeStyles((theme) => ({
  sideDiv: {
    // background:`linear-gradient(10deg, rgba(255, 0, 150, 0.1), rgba(255, 0, 150, 0.8)), url(${OurServiceImage})`,
    background: `linear-gradient(90deg, rgba(37, 197, 255,0.8), rgba(37, 197, 255,0.8)), url('door.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // clipPath: "polygon(0 0, 74% 0, 100% 100%, 0 100%)",
    width: "142%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        width: "100%",
      },
  },
  call: {
    width: "180px",
    padding:"12px 30px",
    backgroundColor: "white",
    color: "blue",
    marginBottom:"60px",
    '&:hover': {
        color: 'blue',
        backgroundColor: "white"
    }
  },
  text: {
    textAlign: "left",
    color:"white"
  },
  repairImg:{
      width:"100%",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 24% 100%)",
      [theme.breakpoints.down('md')]: {
        width: "100%",
        clipPath: "none",
      },
  },
  secDiv:{
    backgroundImage:`url(${repair})`,
    height: '100%',
    backgroundPosition:"center",
    backgroundRepeat:"norepeat",
    backgroundSize:"cover",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 24% 100%)",
    // [theme.breakpoints.down('md')]: {
    //   width: "100%",
    //   height: '100%',
    //   clipPath: "none",
    // },
  },
  callNow:{
   backgroundColor:"#1A519B",
   color:"white",
   padding:"10px 20px",
   position:"fixed",
   zIndex:10,
   bottom:170,
   right:40
  }
}));

const Makes = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container alignItems="center">  
        <Grid item xs={12} md={5}>
          <div className={classes.sideDiv}>
            <div style={{ width: "70%" }}>
              <Typography
                className={classes.text}
                style={{ paddingTop: "60px" }}
              >
                Get it done right with an hour
              </Typography>
              <Typography className={classes.text} style={{margin:"20px 0px",fontFamily:'Abril Fatface'}} variant="h2">
                AGS DOORS
              </Typography>
              <Typography className={classes.text}  >
                American service Garage Doors and Gates
              </Typography>
              <Typography className={classes.text} style={{marginBottom:"20px"}}>
                Expert at your Service
              </Typography>
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <Button className={classes.call}><CallIcon style={{marginRight:"5px"}}/> +456985-632</Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7} >
        {/* <div className={classes.secDiv}></div> */}
            <img className={classes.repairImg} src={repair} />
              <Button className={classes.callNow} > <CallIcon/>  Call Now </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Makes;
