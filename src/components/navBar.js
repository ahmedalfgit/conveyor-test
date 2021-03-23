import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, UseLocation} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router';


import Home from '../pages/Home';
import Sludge from '../pages/Sludge';
import Screenings from '../pages/Screenings';
import Biosolids from '../pages/Biosolids';
import Quote from '../pages/Quote';
import Contact from '../pages/Contact';
import COMade from '../pages/COMade';

//logos for header
import logo from '../assests/call-icon.png';
import convLogo from '../assests/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderBar = (props) => {
  // const { history } = props;
  const classes = useStyles();
  const [anchorE1, setAnchorE1] = React.useState(null);
  const open = Boolean(anchorE1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  // const handleMenuClick = (pageURL) => {
  //   history.push(pageURL);
  //   setAnchorE1(null);
  // };

  return (
  <Router>
    <AppBar position="static" className="navBar-bg no-shadow">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="conveyor-icon"
        >
          <Link to="/">
          <img className="w-50" src={convLogo} alt="Serpentix Conveyor logo"/>
          </Link>
        </IconButton>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={(classes.menuButton, 'toggleMenu')}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorE1={anchorE1}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorE1(null)}
            >
              <MenuItem>
                <Link to="/">
                  <Home/>
                </Link>
                <Link to="/sludge">
                  Sludge
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/screenings">
                  Screenings
                </Link>
              </MenuItem>
              <MenuItem> 
                <Link to="/biosolids">
                  Biosolids
                </Link>
              </MenuItem>
              <MenuItem> 
                <Link to="/quote">
                  Get A Quote
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact">
                  Call Us
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button className="text-dark">
                <Link to="/sludge">
                    Sludge
                </Link>
            </Button>
            <Button className="text-dark">
              <Link to ="/screenings">
                  Screenings
              </Link>
            </Button>
            <Button className="text-dark">
              <Link to="/biosolids">
                  Biosolids
                </Link>
            </Button>
            <Button className="text-dark">
              <Link to="/quote">
                Get A Quote
              </Link>
            </Button> 
            <a href="tel:303-430-8427" className="call-us-btn">
               <img className="w-70" src={logo} alt="phone logo"/>
            </a>
          </>
        )}
      </Toolbar>
    </AppBar>
    <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/sludge">
              <Sludge/>
          </Route>
          <Route path="/screenings">
              <Screenings/>
          </Route>
          <Route path="/biosolids">
              <Biosolids/>
          </Route>
          <Route path="/quote">
              <Quote/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
    </Switch>
    </Router>
  );
};

export default(HeaderBar);
