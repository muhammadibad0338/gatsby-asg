import React from "react"
import {Box, IconButton, makeStyles} from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles(theme=>({
    root:{
        paddingRight:"45px",
        textAlign:"right"
    }, 
    controllerBtn:{
        border:"1px solid grey", 
        borderRadius:"25px", 
        margin:"5px", 
        padding:"5px"
    }
}))

const TestmonialSlideController = (props)=>{
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <IconButton aria-label="previous-slide" onClick={props.handlePrevSlide} className={classes.controllerBtn}>
                <ArrowBackIcon />
            </IconButton>
            <IconButton aria-label="previous-slide" onClick={props.handleNextSlide} className={classes.controllerBtn}>
                <ArrowForwardIcon />
            </IconButton>
        </Box>
    )
}

export default TestmonialSlideController