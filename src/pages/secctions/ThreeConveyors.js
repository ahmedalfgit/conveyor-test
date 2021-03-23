import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx'
import { withRouter } from 'react-router';

//images
import FD from '../../assests/fd.jpg';
import ModelH from '../../assests/model-H.jpg';
import Pathwinder from '../../assests/pathwinder.jpg';
import P2 from '../../assests/P-2.jpg';
import P2Sketch from '../../assests/P2-17-1188.jpg';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifycenter: {
    justifyContent: 'center',
  },
  textCenter: {
      textAlign: "center",
  },
  titleH2: {
    fontSize: "3rem",
    fontWeight: "400",
  },
  conveyorsList: {
    display: "inline-flex",
    width: "50%",
  },
  
  conveyorPictureH: {
    backgroundImage: "url(" + ModelH + ")",
    width: "100%",
    height: "705px",
    backgroundRepeat: "no-repeat",
  },
  conveyorPictureP2: {
    backgroundImage: "url(" + Pathwinder + ")",
    width: "100%",
    height: "705px",
    backgroundRepeat: "no-repeat",
  },
  conveyorPictureFD: {
    backgroundImage: "url(" + FD + ")",
    width: "100%",
    height: "705px",
    backgroundRepeat: "no-repeat",
  },
  conveyorPictureSecTitle: {
    backgroundColor: "#fff",
    position: "relative",
    left: "8%",
    bottom: "20%",
    fontSize: "2.7rem",
    padding: "40px",
    fontWeight: "400",
    maxWidth: "470px",
  },
  mb9: {
    marginBottom: "9rem",
  },
  conveyorPictureHContentBox: {
    left: "8%",
    bottom: "26%",
    padding: "0px 40px 40px 40px",
    position: "relative",
    height: "390px",
    maxWidth: "470px",
  },
  conveyorContentUl: {
    listStyle: "none",
    marginLeft: "0",
    paddingLeft: "0",
    fontSize: "1.3rem",
    lineHeight: "46px",
  },
  btnBox: {
    textAlign: "left",
    position: "relative",
    top: "6%",
  },
  conveyorBtn: {
    width: "65%",
    padding: "20px 2px",
    fontSize: "1.4rem",
    backgroundColor: "#fff",
    color: "#333",
    border: "0",
    borderRadius: "15px",
    cursor: "pointer",
  }
}));

const ThreeConveyors = (props) => {
  
  const { history } = props;
  const [anchorE1, setAnchorE1] = React.useState(null);
  const handleMenuClick = (pageURL) => {
      history.push(pageURL);
      setAnchorE1(null);
    };

  const [isShownH, setIsShownH] = useState(false);
  const [isShownP, setIsShownP] = useState(false);
  const [isShownF, setIsShownF] = useState(false);

  const classes = useStyle();
  return (
    <div>
    <div className="silveresh-bg">
      <div className={clsx (classes.root, "mt-md-5 pb-5 w-1920-with-mx-auto")}>
      <Grid container spacing={2} className={clsx (classes.justifyAround, "pt-3 mt-3 pt-md-5 pb-md-5")}>
        <Grid item xs={12} md={12} className={clsx(classes.textCenter, "p-0 pt-md-4")}>
            <h2 className={clsx(classes.titleH2, "choose-h2-font")}>Choose your conveyor</h2>
        </Grid>
        <Grid item xs={12} md={12} className={clsx (classes.textCenter, classes.mb9)}>
          <div className={clsx (classes.conveyorsList, "three-conveyors-h3")}>
          <h3 className={clsx(classes.conveyorTitle, "conveyor-title-sludge" , "conveyorTitle")}>Sludge</h3>
          <h3 className={clsx(classes.conveyorTitle,"conveyor-title-screenings" , "conveyorTitle")}>Screenings</h3>
          <h3 className={clsx(classes.conveyorTitle, "conveyor-title-biosolids", "conveyorTitle")}>Biosolids</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={3} sm={11} className={classes.conveyorPictureH}
        onMouseEnter={() => setIsShownH(true)}
        onMouseLeave={() => setIsShownH(false)}> 
          <h2 className={clsx(classes.conveyorPictureSecTitle, "h2-left-none", "font-2n3rem")}>
            Model-H
          </h2> 
          {isShownH && ( 
          <div className={clsx(classes.conveyorPictureHContentBox, "conveyorBox")}>
            <p className={classes.conveyorPicContent}>
              <ul className={classes.conveyorContentUl}>
                <li>Convey up to 100 tons/hour</li>
                <li>Elevate a material up to 45° inclines</li>
                <li>Turn a 9-foot radius</li>
                <li>Conveyor lengths up to 400-feet</li>
                <li>Belt widths of 20″, 26″ or 32″</li>
              </ul>
            </p>
            <div className={classes.btnBox}>
              <button className={classes.conveyorBtn}
              onClick={() => handleMenuClick("./sludge")}>Show Me More</button>
            </div>
          </div>
          )}
        </Grid>
        <Grid item xs={12} md={3} sm={11} className={clsx(classes.conveyorPictureP2, "mt-sm-10rem mt-md-0")}
        onMouseEnter={() => setIsShownP(true)}
        onMouseLeave={() => setIsShownP(false)}>
          <h2 className={clsx (classes.conveyorPictureSecTitle, "h2-left-none", "font-2n3rem")}>
            Pathwinder
          </h2>
          {isShownP && (
            <div className={clsx(classes.conveyorPictureHContentBox, "conveyorBox")}>
            <p className={classes.conveyorPicContent}>
              <ul className={classes.conveyorContentUl}>
                <li>Elevate material up 45° inclines</li>
                <li>Can turn a 6-foot radius</li>
                <li>Fewer transfer points</li>
                <li>Lower power requirements</li>
                <li>Enclosed for weather and odor control</li>
              </ul>
            </p>
            <div className={classes.btnBox}>
              <button className={classes.conveyorBtn}
              onClick={() => handleMenuClick("./screenings")}>Show Me More</button>
            </div>
          </div>
          )}
        </Grid>
        <Grid item xs={12} md={3} sm={11} className={clsx(classes.conveyorPictureFD, "mt-sm-10rem mt-md-0")}
        onMouseEnter={() => setIsShownF(true)}
        onMouseLeave={() => setIsShownF(false)}
        >
          <h2 className={clsx(classes.conveyorPictureSecTitle, "h2-left-none", "font-2n3rem")}>
            Flight Distribution
          </h2>
          {isShownF && (
            <div className={clsx(classes.conveyorPictureHContentBox, "conveyorBox")}>
            <p className={classes.conveyorPicContent}>
              <ul className={classes.conveyorContentUl}>
                <li>Evenly load a track</li>
                <li>Load multiple bins</li>
                <li>Create even piles of material</li>
                <li>Fewer transfer points</li>
                <li>Lower power requirements</li>
              </ul>
            </p>
            <div className={classes.btnBox}>
              <button className={classes.conveyorBtn}
              onClick={() => handleMenuClick("./biosolids")}>Show Me More</button>
            </div>
          </div>
           )}
        </Grid>
      </Grid>
    </div> 
    
    </div>
    <Grid container spacing={2} className={clsx ( "pt-5 mt-5 w-1920-with-mx-auto pt-md-5")}> 
        <Grid item xs={12} md={5} sm={11} className="sketch-h1-box pl-sm-2rem">
            <h1 className="sketch-h1">
              Works around complex job-sites
            </h1>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={clsx (classes.justifycenter, "pt-5 mt-5 mt-md-0 pt-sm-0 pb-md-5 mb-md-5 w-1920-with-mx-auto")}> 
        <Grid item xs={12} md={3} className="sketch-real-pic pb-md-5 mb-md-5">
           <img src={P2} className={"p2-img pl-sm-2rem"} alt="Screenings Conveyor Pathwinder"></img>
        </Grid>
        <Grid item xs={12} md={8} className="sketch-pic">
           <img src={P2Sketch} className={"w-100"} alt="conveyor sketch" ></img>
        </Grid>
      </Grid>
      </div>
  )
}

export default withRouter(ThreeConveyors);