import React from 'react';
import { fade, makeStyles } from "@material-ui/core/styles";
import { Container, Button, Grid, Typography,Box } from "@material-ui/core";
import AsgHeader from "../components/AsgHeader/AsgHeader"
import Make from "../components/Make/Make"
import Services from "../components/Services/Services"
import Repair from "../components/Repair/Repair"
import Faqs from "../components/Faqs/Faqs"
import Footer from "../components/Footer/Footer"
import Testimonal from "../components/Testimonal/Testimonal"
import OurService from "../components/OurService/OurService"
import RepairbyAsg from "../components/RepairbyAsg/RepairbyAsg"




const useStyles = makeStyles((theme) => ({
    Pic: {
      maxHeight: "550px",
      // height:"auto",
      width: "90%",
      marginRight: "10%",
      // clipPath: "polygon(0 0, 73% 0, 100% 100%, 0% 100%)"
      clipPath: "polygon(0 0, 84% 0, 100% 100%, 0% 100%)",
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
    SrvcCntnr:{
        display:"flex",
        justifyContent:"flex-start",
        [theme.breakpoints.down('md')]: {
          justifyContent:"center",
          alignItem :"center"
        },
    },
    txtCntnr:{
        width:"70%",
        [theme.breakpoints.down('md')]: {
          width:"100%"
        },
    }
  }));
  
  export default function Asg() {
    return (
      <>
      <Grid container spacing={0}>
      <AsgHeader/>
      <Grid item xs={12}  style={{ padding: "0px 0px" }}>
              <Make/>
        </Grid>
         <RepairbyAsg/> 
         <Grid item xs={12}>
          <Services />
        </Grid>
        <Grid item xs={12} style={{ backgroundColor: "#E5E3FF" }}>
          <Repair />
        </Grid>
        <Grid item xs={12}>
          <OurService />
        </Grid>
        <Grid item xs={12}>
          <Faqs />
        </Grid>
        <Grid item xs={12}>
          <Testimonal />
        </Grid>
        <Grid item xs={12} style={{ backgroundColor: "#E5E3FF" }}>
          <Footer />
        </Grid>
      {/* // <Container maxWidth="sm">
      //   <Box my={4}>
      //     <Typography variant="h4" component="h1" gutterBottom>
      //       Happy Hacking
      //     </Typography>
      //     <Link to="/about" color="secondary">
      //       Go to the about page
      //     </Link>
      //     <ProTip />
      //     <Copyright />
      //   </Box>
      // </Container> */}
      </Grid>
      </>
    );
  }