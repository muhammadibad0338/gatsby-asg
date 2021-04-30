import React from "react"
import {Card, CardContent, makeStyles, Typography, Box, Grid} from "@material-ui/core"
import TickImage from "../../Assets/tick.png"
import StarIcon from '@material-ui/icons/Star';
import ClientImage from "../../Assets/client.png"

const useStyles = makeStyles (theme=>({
    root:{
        backgroundColor:"#081221", 
        padding:"25px", 
        margin:"20px"
    }, 
    clientComment:{
        color:"white", 
        fontSize:"14px"
    }, 
    ratingIcon:{
        color:"yellow"
    }, 
    clientImage:{
        height:"46px",
        width:"46px", 
        borderRadius:"50%"
    }
}))


const ClientReviews = (props)=>{

    const classes =  useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
            <img src={TickImage} alt="tick" />
            <Box my={2}>
            <Typography variant="p" component="p" color="initial" className={classes.clientComment}>I called on a Saturday and the service men came in within hours to do the job. Excellent work and really professional!</Typography>
            </Box>
            <Box>
                <StarIcon className={classes.ratingIcon}/>
                <StarIcon className={classes.ratingIcon}/>
                <StarIcon className={classes.ratingIcon}/>
                <StarIcon className={classes.ratingIcon}/>
                <StarIcon className={classes.ratingIcon}/>
                </Box>
                <Box pt={2}>
                <Grid container>
                  <Grid item lg={2} sm={4} xs={4} md={2}>
                        <img src={ClientImage} alt="client" className={classes.clientImage}/>
                    </Grid>
                    <Grid item lg={9} sm={8} xs={8} md={9}>
                        <Typography variant="h6" color="initial" style={{color:"white", fontSize:"16px"}}>Joe Mortin</Typography>
                        <Typography variant="h6" color="initial" style={{color:"white", fontWeight:"300", fontSize:"14px"}}>CEO</Typography>
                    </Grid>
                </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}


export default ClientReviews