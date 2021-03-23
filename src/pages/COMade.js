import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import {Helmet} from 'react-helmet';

//images
import USFlag from "../assests/U.S-flag.jpg";
import COMadePic from "../assests/CO-made-pic.jpg";
import COFlag from "../assests/CO-flag.jpg";
import SerpentixBuilding from "../assests/serpentix-building.jpg";


export default function COMade() {



  const useStyle = makeStyles((theme) => ({
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  overFlowH: {
    overflowX :"hidden",
    overflowY :"hidden",
  }
}));

const classes = useStyle();
return (

  <div className="CO-made-main-container">
    <Helmet>
        <title>Made in U.S.A | Serpentix Colorado Made (FD)</title>
        <meta name="description" content="Made in the states products" />
    </Helmet>
    <div className={classes.overFlowH}>
        <div className="CO-made-content-box">
            <h3 className="CO-made-h3">
                Made in U.S.A
            </h3>
            <p className="CO-made-content">
            Our manufacturing facility is located in Westminster, CO (50,000 sq. feet). We pride ourselves on being an American Manucaturer and a Colorado made company. We proudly buy American Steel and hve set ourselves apart by inevesting in equipment built in the USA.
            </p>
        </div>
        <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3 w-1920-with-mx-auto pt-md-5 mt-md-5 CO-made-second-container")}>
            <Grid item md={6} sm={12} xs={12} className="serpentix-building-col">
                <img src={SerpentixBuilding} alt="Serpentix Building" className="serpentix-building w-100-mobile w-100"/>
            </Grid>
            <Grid item md={6} sm={12} xs={12} className="US-flag-col">
                <img src={USFlag} alt="USA Flag" className="US-flag w-100-mobile w-100"/>
            </Grid>
            <Grid item md={6} sm={12} xs={12} className="CO-flag-col mb-md-5 pb-md-5">
                <img src={COFlag} alt="Colorado Flag" className="CO-lag w-100-mobile w-100"/>
            </Grid>
            <Grid item md={6} sm={12} xs={12} className="CO-made-flag-col mb-md-5 pb-md-5">
                <img src={COMadePic} alt="Colorado Flag" className="CO-made-flag w-100-mobile w-100"/>
            </Grid>
        </Grid>
    </div>
  </div>
  
)
}