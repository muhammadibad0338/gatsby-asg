import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
// import logo from "../Assets/blaq_logo_text_color.png"
import logo from "../../Assets/Layer.png"
import { Container, Button } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "#f1e1e2"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginRight:"4%"
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  loginbtn: {
    backgroundColor: "black",
    color: "white",
    margin: "5px",
    padding: "5px 20px",
    '&:hover': {
      color: 'white',
      backgroundColor: "black"
    }
  },
  signBtn: {
    backgroundColor: "red",
    color: "white",
    margin: "5px",
    padding: "5px 20px",
    '&:hover': {
      color: 'red',
      backgroundColor: "white"
    }
  },
  partnerBtn: {
    color: "grey",
    margin: "5px",
    padding: "5px 20px",
    '&:hover': {
      color: 'grey'
    }
  },
  head: {
    backgroundColor: "white",
    // padding:"10px 0px"
  },
  link:{
      color:"black",
      padding :"0px 20px"
  }
}));

const AsgHeader = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {/* <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton> */}
        <p style={{ color: "grey" }}>Home</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
        <p style={{ color: "red" }}>About us</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {/* <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        <p>Service</p>
      </MenuItem>
      <MenuItem>
          <p>Testimonal</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Container style={{ backgroundColor: "#f1e1e2", marginTop: 56 }}>
        <AppBar style={{ boxShadow: "none", backgroundColor: "#f1e1e2" }} position="fixed">
          <Toolbar className={classes.head}>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            > */}
            {/* <MenuIcon /> */}
            <img style={{ width: "auto", height: "50px", marginLeft: "35px",backgroundColor:"blue" }} src={logo} />
            {/* </IconButton> */}
            {/* <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
          </Typography> */}
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <IconButton aria-label="show 4 new mails" color="inherit"> */}
              <Badge color="secondary">
                {/* <Button className={classes.partnerBtn}  >Home</Button> */}
                <a className={classes.link} >Home</a>
              </Badge>
              {/* </IconButton> */}
              {/* <IconButton aria-label="show 17 new notifications" color="inherit"> */}
              <Badge color="secondary">
              <a className={classes.link}>About us</a>
                {/* <Button className={classes.signBtn}>Signup</Button> */}
              </Badge>
              {/* </IconButton> */}
              {/* <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              > */}
              <a className={classes.link}>Service</a>
              {/* <Button className={classes.loginbtn} >Login</Button> */}
              {/* </IconButton> */}
              <a className={classes.link}>Testimonal</a>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="black"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Container>
    </div>
  );
}
export default AsgHeader