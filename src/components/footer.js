import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableFooter from '@material-ui/core/TableFooter';
import Grid from '@material-ui/core/Grid';
import FooterAutomationPic from '../assests/footer-automation-image.jpg';
import FooterConveyorPic from '../assests/footer-conveyor-image.jpg';
import clsx from 'clsx'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router';

import Facebook from "../assests/facebook.png"
import YouTube from "../assests/YouTube.png"
import Instagram from "../assests/instagram.png"
import Linkedin from "../assests/linkedin.png"
import AWS from "../assests/AWS.png"
import MadeInCO from "../assests/CO-made.png"

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
  img: {
      height: '300px',
      maxWidth: "200px",
  },
  footerH3: {
    fontWeight: '400',
    color: '#6b6b6b',
    fontSize: '25px',
    letterSpacing: '1px',
    position: 'relative',
    bottom: '26%',
    left: '35%',
    backgroundColor: '#fff',
    padding: '15px',
    width: '50%',
  },
  textCenter: {
      textAlign: 'center',
  },
  btnBox: {
      position: "relative",
      bottom: "22%",
      textAlign: "right",
      width: "100%",
  },
  footerBtn: {
      color: "#333",
      position: "relative",
      fontSize: "25px",
      padding: "15px 10px",
      border: "none",
      backgroundColor: "#fff",
      width: "60%",
      cursor: "pointer",
      borderRadius: "15px",
  },
  btnA: {
      textDecoration: "none",
      color: "#333",
      width: "inherit",
      display: "inline-block",
      cursor: "pointer"
  },
  list: {
    position: "relative",
    listStyle: "none", 
  },
  listTitle: {
    fontSize: "1.3rem",
    color: "#fff",
    borderBottom: "1px solid #fff",
    padding: "20px 20px 13px 0px",
  },
  item: {
      color: "#fff",
      paddingTop: "1rem",
      fontSize: "16px",
      cursor: "pointer"
  },
  footerA: {
      color: "#fff",
      textDecoration: "none",
      backgroundColor: "#183a37",
      border: "none",
      padding: "0",
      margin:"0",
      fontSize: "16px",
      cursor: "pointer",
  },
  socialImgs: {
    maxWidth: "32px",
  },
  SocialA: {
    padding: "10px",
    width: "32px",
    height: "32px",
    display: "inline-block",
  },
  socialMediaTitle: {
      fontWeight: "400", 
      color: "#fff",
  },
}));


const Footer = (props) => {
    const classes = useStyles();

    const { history } = props;
    const [anchorE1, setAnchorE1] = React.useState(null);


    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
        setAnchorE1(null);
      };


  return (
    <TableFooter className="footer">
        <Grid container className="pt-5 mt-5">
            <Grid item sm={5} xs={12} md={4} className={classes.textCenter}>
                <Grid container className="justify-content-center">
                    <Grid item xs={12} md={8} className={classes.textCenter}>
                        <img src={FooterConveyorPic} className={classes.img} alt="conveyor"></img>
                        <div className={clsx(classes.btnBox)}>
                            <a className={clsx(classes.btnA)} href="https://www.serpentixfabrication.com/">
                                <button type="button" className={clsx(classes.footerBtn, "footerBtn")}>
                                    Fabrication
                                </button>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} md={2} sm={3}>
                <ul className={clsx(classes.list, "top-sm-5prec")}>
                    <span className={clsx(classes.listTitle)}>Certifications</span>
                    <li className={clsx(classes.item, "mt-3")}>
                        <a className="AWS" href="https://www.aws.org/certification" target="_blank" rel="noreferrer">
                            <img src={AWS} alt="AWS certification" className="AWS-img"/>
                        </a>
                    </li>
                    <li className={clsx(classes.item, "mt-3")}>
                        <button className="CO-made-btn" onClick={() => handleMenuClick('/COMade')}>
                            <img src={MadeInCO} alt="Colorado Made" className="co-made-img"/>
                        </button>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={6} md={2} sm={3}>
                <ul className={clsx(classes.list, "top-sm-5prec")}>
                    <span className={clsx(classes.listTitle)}>Conveyors</span>
                    <li className={clsx(classes.item, "mt-3")}>
                        <button className={clsx(classes.footerA)}
                        onClick={() => handleMenuClick('/sludge')}>
                            Sludge
                        </button>
                    </li>
                    <li className={clsx(classes.item)}>
                        <button className={clsx(classes.footerA)} 
                        onClick={() => handleMenuClick('/screenings')}>
                            Screenings
                        </button>
                    </li>
                    <li className={clsx(classes.item)}>
                        <button className={clsx(classes.footerA)} 
                        onClick={() => handleMenuClick('/biosolids')}>
                            Biosolids
                        </button>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={10} md={3} sm={4} className={"pt-xs-5"}>
                <ul className={clsx(classes.list, "top-sm-5prec")}>
                    <span className={clsx(classes.listTitle)}>Contact</span>
                    <li className={clsx(classes.item, "mt-3 line-height")}>
                        <a className={clsx(classes.footerA)} href="https://goo.gl/maps/3vyrigdMAUVVWaH6A">
                            11821 Huron St
                            Westminster, CO 80234
                        </a>
                    </li>
                    <li className={clsx(classes.item)}>
                        303-430-8427
                    </li>
                    <li className={clsx(classes.item)}>
                        sales@serpentix.com
                    </li>
                </ul>
            </Grid>
        </Grid>
        <Grid container className="mt-sm-5 footer-social-media justify-content-center-sm justify-content-right-md">
            <Grid item xs={3} md={1}>
                <h4 className={classes.socialMediaTitle}>
                    Social Media
                </h4>    
            </Grid> 
            <Grid item sx={6} md={3}>
                <a className={classes.SocialA} href="https://www.facebook.com/serpentixcorp/">
                    <img className={classes.socialImgs} alt="facebook" src={Facebook}/>
                </a> 
                <a className={classes.SocialA} href="https://www.instagram.com/serpentixcorporation/">
                    <img className={classes.socialImgs} alt="instagram" src={Instagram}/>
                </a> 
                <a className={classes.SocialA} href="https://www.youtube.com/channel/UCUll0gP9oHrR9ZEPIYwkwAw">
                    <img className={classes.socialImgs} alt="youtube" src={YouTube}/>
                </a> 
                <a className={classes.SocialA} href="http://www.linkedin.com/company/serpentix-corporation">
                    <img className={classes.socialImgs} alt="linkedin" src={Linkedin}/>
                </a> 
            </Grid>
        </Grid>
    </TableFooter>
  );
};

export default withRouter(Footer);
