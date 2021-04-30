import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import { fade, makeStyles } from "@material-ui/core/styles";
import { Container, Button, Grid, Typography,Box } from "@material-ui/core";
import AsgHeader from "../components/AsgHeader/AsgHeader"
import Make from "../components/Make/Make"
import Asg from "./Asg"



export default function Index() {
  return (
    <>
    <Asg/>
    {/* // <AsgHeader/>
    // <Grid item xs={12}  style={{ padding: "0px 0px" }}>
    //         <Make/>
    //     </Grid> */}
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
    </>
  );
}