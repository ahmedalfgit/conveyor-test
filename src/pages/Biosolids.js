import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import {Helmet} from 'react-helmet';

//images
import FD from "../assests/fd.jpg";
import FDSecondPic from "../assests/df-second-pic.jpg";
import FDFirstPicGallery from "../assests/fd-pic.jpg";
import FDSecondPicGallery from "../assests/fd-pic-1.jpg";
import FDThirdPicGallery from "../assests/fd-pic-2.jpg";

export default function Biosolids() {



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

  <div>
  <Helmet>
    <title>Biosolids Conveyor | Serpentix Flight Distribution (FD)</title>
    <meta name="description" content="Biosolids Conveyor - Serpentix Flight Distribution (FD) conveyor allows for material to be distributed over a large area with multiple exit points." />
  </Helmet>
<div className={classes.overFlowH}>
    <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3 fd-bg-firstPage w-1920-with-mx-auto")}>
        <Grid item md={4} sm={11} xs={12} className={"fd-box px-xs-30px"}>
          <h1 className="fd-h1">
              Flight Distribution (FD)
          </h1>
          <p className="fd-content line-height-xs-24px">
          The Serpentix Flight Distribution (FD) Conveyor, used in conjunction with our standard conveyors, or as a stand-alone unit, allows for material to be distributed over a large area with multiple exit points. This is the ideal solution for distributing waste material to multiple bins or truck beds and allows the end user to simply open or close the exit points as needed by way of the pneumatic slide-gate system.
          </p>
        </Grid>
        <Grid item md={3} sm={11} xs={12} className="fd-pic-box text-center-xs">
          <img src={FD} alt="Flight Distribution" className="fd-pic w-100-mobile w-90-xs"/>
        </Grid>
    </Grid>
    <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3 fd-bg-secondPage w-1920-with-mx-auto")}>
        <Grid item md={5} sm={12} className={"fd-secondBox px-xs-30px"}>
          <h2 className="fd-h2 pl-md-0">
            Reasons to choose Serpentix Flight Distribution (FD)
          </h2>
          <ul className="fd-list-box">
            <li className="fd-item">
                Distributes material to multiple exit points
            </li>
            <li className="fd-item pt-2">
                Reversible operation
            </li>
            <li className="fd-item pt-2">
                Low power requirements
            </li>
            <li className="fd-item pt-2">
                Low maintenance
            </li>
            <li className="fd-item pt-2">
                Quiet operation
            </li>
            <li className="fd-item pt-2">
                Modular design for future expansion
            </li>
          </ul>
        </Grid>
        <Grid item md={5} sm={12} className="fd-second-pic-box text-center-xs">
          <img src={FDSecondPic} alt="Flight Distribution" className="fd-second-pic w-100 w-90-xs"/>
        </Grid>
    </Grid>
    <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-5 mt-5 fd-bg-thirdPage w-1920-with-mx-auto pt-xs-0 mt-xs-3")}>
        <Grid item md={3} sm={12} className="fd-first-col text-center-xs">
          <img src={FDFirstPicGallery} alt="Flight Distribution" className="fdFirstImgGallery w-100-mobile w-90-xs"/>
        </Grid>
        <Grid item md={6} sm={12} className="fd-second-col text-center-xs">
          <img src={FDSecondPicGallery} alt="Flight Distribution" className="FDSecondPicGallery w-100-mobile w-90-xs"/>
        </Grid>
        <Grid item md={6} sm={12} className="fd-video-col text-center-xs">
        <div className="FDVideoBox">
          <iframe src="https://player.vimeo.com/video/509859491" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="fd-video"></iframe>
          </div>
        </Grid>
        <Grid item md={4} sm={12} className="text-right mb-xs-5 fd-third-col text-center-xs">
        <img src={FDThirdPicGallery} alt="Flight Distribution" className="FDThirdPicGallery w-100-mobile w-90-xs"/>
        </Grid>
    </Grid>
  </div>
  </div>
  
)
}


