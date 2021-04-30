import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Slider from "./Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden !important",
    margin: "170px 0",
  },
  testmonialHeading: {
    // fontWeight: "bold",
    margin: "15px 0",
  },
}));

const Testimonal = () => {
    const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        <Typography
          variant="h4"
          color="initial"
          align="center"
          className={classes.testmonialHeading}
          style={{fontFamily:"Abril Fatface"}}
        >
          What Our Customer Says
        </Typography>
        <Slider />
      </Container>
    </div>
  );
};

export default Testimonal;
