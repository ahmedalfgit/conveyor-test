import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Helmet from 'react-helmet';

//images
import P2FirstPageBg from "../assests/P2-first-page-bg.jpg";
import Radius from "../assests/P2-pic-3.jpg";
import PositiveChain from "../assests/P2-pic-3.jpg";
import Elevate from "../assests/P2-pic-1.jpg";
import CoveredConveyor from "../assests/P2-pic-5.jpg";
import BeltingConveyor from "../assests/P2-pic-2.jpg";
import TransferPointConveyor from "../assests/P2-pic-4.jpg";
import PathwinderSketch from "../assests/pathwinder-sketch.jpg";
import ScrewSketch from "../assests/screw-sketch.jpg";

import P2n3 from "../assests/p2-14.jpg";
import P2n6 from "../assests/p2-15.jpg";
import P2n7 from "../assests/p2-7.jpg";
import P2n13 from "../assests/p2-13.jpg";

import Flex1 from "../assests/flex-1.jpg";
import Flex2 from "../assests/flex-2.jpg";
import Flex3 from "../assests/flex-3.jpg";
import Flex4 from "../assests/flex-4.jpg";
import Flex5 from "../assests/flex-5.jpg";
import Flex6 from "../assests/p2-16.jpg";

export default function Sludge() {

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
      <title>Screening Conveyor - Serpentix Pathwinder</title>
    <meta name="description" content="The Serpentix Pathwinder Conveyor System or Screening Conveyor solves difficult bulk handling problems encountered in municipal and industrial applications." />
      </Helmet>
      <div className={classes.overFlowH}>
      <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3 w-1920-with-mx-auto px-sm-30px")}>
          <Grid item md={6} sm={12} className={"p2-box px-xs-30px"}>
            <h1 className="p2-h1">
              Screening Conveyor - Pathwinder P2
            </h1>
            <p className="p2-content">
            Pathwinder conveying systems solve difficult bulk handling problems encountered in municipal and industrial applications. Unique design parameters allow the conveyor to follow horizontal, vertical, and helical paths. These diverse path capabilities provide an alternative when adapting a conveyor to an existing facility where interfacing with more permanently positioned equipment is required. 
            </p>
            <p className="p2-content">
            The Pathwinder conveyor system has an exceptional advantage of having only two bearings on the drive and tension station, exemplifying minimal maintenance requirements. The tension station has two adjustable springs to maintain constant positive pressure on the main drive chain.  
            </p>
            <p className="p2-content">
            One Serpentix Pathwinder conveyor system, when applied to a bulk handling problem, will replace several conventional flat belts or screw conveyors. 
            </p>
            <p className="p2-content">
            The Pathwinder conveyor design is low maintenance because we provide a scraper system to remove sticky material. The belt pan convolutions on the Pathwinder conveyor stretch out flat as they go around the drive or tension sprockets. A scraping device will be employed at this point to remove sticky material. 
            </p>
          </Grid>
          <Grid item md={6} sm={12} className="text-center-xs">
            <img className="p2-first-page-bg w-100 w-90-xs" src={P2FirstPageBg} alt="Pathwinder conveyor"/>
          </Grid>
          </Grid>
          <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3 mb-md-5 p2-pros-container")}>
            <Grid item md={8} sm={9} xs={12} className="screenings-pros-radius-pic-col text-right text-center-xs order-2-mobile pt-xs-0">
                <img src={Radius} className="radiusPic w-100-mobile w-75" alt="Screenings conveyor"/>
            </Grid>
            <Grid item md={3} sm={3} xs={12} className="screenings-pros-radius-title-col text-center-xs order-1-mobile pb-xs-0">
              <h4 className="screenings-pros-radius-title">
                  Minimum radius of 6-foot <span className="screenings-pros-radius-title-span"></span>
              </h4>
            </Grid>
            <Grid item md={3} sm={3} xs={12} className="screenings-pros-elevate-title-col mt-md-5 text-center-xs order-3-mobile pt-xs-2 pb-xs-0">
              <h4 className="screenings-pros-elevate-title">
                  Elevate material up 45° inclines <span className="screenings-pros-elevate-title-span"></span>
              </h4>
            </Grid>
            <Grid item md={8} sm={9} xs={12} className="screenings-pros-elevate-pic-col mt-md-5 text-center-xs order-4-mobile pt-xs-0">
                <img src={Elevate} className="elevate-pic w-100-mobile w-75" alt="Screenings conveyor"/>
            </Grid>
            
            <Grid item md={8} sm={9} xs={12} className="screenings-pros-transfer-pic-col mt-md-5 text-right text-center-xs order-6-mobile pt-xs-0">
                <img src={TransferPointConveyor} className="transferPic w-100-mobile w-75" alt="Screenings conveyor"/>
            </Grid>
            <Grid item md={3} sm={3} xs={12} className="screenings-pros-transfer-title-col mt-md-5 text-center-xs order-5-mobile pt-xs-2 pb-xs-0">
              <h4 className="screenings-pros-transfer-title">
                  Fewer transfer points <span className="screenings-pros-transfer-title-span"></span>
              </h4>
            </Grid>
            <Grid item md={3} sm={3} xs={12} className="screenings-pros-enclosed-title-col mt-md-5 text-center-xs order-7-mobile pt-xs-2 pb-xs-0">
              <h4 className="screenings-pros-enclosed-title">
                  Can be enclosed for weather <span className="screenings-pros-enclosed-title-span"></span>
              </h4>
            </Grid>
            <Grid item md={8} sm={9} xs={12} className="screenings-pros-enclosed-pic-col mt-md-5 text-center-xs order-8-mobile pt-xs-0">
                <img src={CoveredConveyor} className="enclosedPic w-100-mobile w-75" alt="Screenings conveyor"/>
            </Grid>
            
            <Grid item md={8} sm={9} xs={12} className="screenings-pros-belting-pic-col mt-md-5 text-right text-center-xs order-10-mobile pt-xs-0">
                <img src={BeltingConveyor} className="beltingPic w-100-mobile w-75" alt="Screenings conveyor"/>
            </Grid>
            <Grid item md={3} sm={3} xs={12} className="screenings-pros-belting-title-col mt-md-5 text-center-xs order-9-mobile pb-xs-0 pt-xs-2">
              <h4 className="screenings-pros-belting-title belting-h4">
                  Segmented belting allows easy replacement <span className="screenings-pros-belting-title-span"></span>
              </h4>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3 mb-md-5 p2-vs-screw w-1920-with-mx-auto mt-xs-5")}>
            <Grid item md={11} sm={12} xs={12} className="p2-vs-screw-col">
              <h2 className="p2-vs-screw-h2 text-center">
                Why choose a Model-H conveyor over a conventional flat belt for a dewatered sludge application?
              </h2>
            </Grid>
            <Grid item md={8} sm={12} className={"pt-5 mb-md-5 order-2-mobile pt-xs-0 text-center-xs"}>
              <img className="w-100" src={PathwinderSketch} alt="Screenings conveyor Pathwinder"/>
            </Grid>
            <Grid item md={3} sm={12} className="p2-list-sec order-1-mobile pt-xs-4">
              <h1 className="p2-h1">
                Pathwinder <span className="copyRight">®</span> Conveyor
              </h1>
              <ul className="p2-list">
                <li className="p2-item">
                  1 motor
                </li>
                <li className="p2-item pt-3">
                  1 gearbox
                </li>
                <li className="p2-item pt-3">
                  4 bearings
                </li>
                <li className="p2-item pt-3">
                  0 transfer point
                </li>
              </ul>
            </Grid>
            <Grid item md={9} sm={12} className={"pt-5 mb-md-5 order-4-mobile pt-xs-0"}>
              <img className={"w-100"} src={ScrewSketch} alt="Screenings conveyor model H"/>
            </Grid>
            <Grid item md={3} sm={12} className="screw-list-sec order-3-mobile mt-xs-5">
              <h1 className="screw-h1">
                Screw Conveyor
              </h1>
              <ul className="screw-list">
                <li className="screw-item">
                  3 motors
                </li>
                <li className="screw-item pt-3">
                  3 gearboxes
                </li>
                <li className="screw-item pt-3">
                  6 bearings
                </li>
                <li className="screw-item pt-3">
                  2 transfer point
                </li>
                <li className="screw-item pt-3">
                  3x the amount of electrical consumption
                </li>
              </ul>
            </Grid>
      </Grid>
      <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3 mb-md-5 pic-n-vid-cont w-1920-with-mx-auto")}>
        <Grid item md={6} sm={12} className="p2-3-col text-center-xs">
          <img src={P2n3} className="p2-3 w-100-mobile w-90-xs " alt="Screenings conveyor Pathwinder"/>
        </Grid>
        <Grid item md={4} sm={12} className="p2-6-col text-center-xs">
          <img src={P2n6} className="p2-6 w-100-mobile w-90-xs " alt="Screenings conveyor Pathwinder"/>
        </Grid>
        <Grid item md={3} sm={12} className="p2-7-col text-center-xs">
          <img src={P2n13} className="p2-7 w-100-mobile w-90-xs " alt="Screenings conveyor Pathwinder"/>
        </Grid>
        <Grid item md={6} sm={12} className="videoBox-col">
          <div className="videoBox">
          <iframe src="https://player.vimeo.com/video/509865809" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="p2-video"></iframe>
          </div>
        </Grid>
        <Grid item md={2} sm={12} className="p2-13-col text-center-xs">
          <img src={P2n7} className="p2-13 w-100-mobile w-90-xs" alt="Screenings conveyor Pathwinder"/>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-md-5 mt-md-5 p2-flex-container w-1920-with-mx-auto pt-xs-5 mt-xs-5 mt-md-10")}>
        <Grid item md={10} sm={12} className="text-center pb-md-5 pt-md-5">
          <h1 className="flex-h1">
            You have multiple bins, we have P2 FlexEnd
          </h1>
        </Grid>
        <Grid item md={5} sm={12} className="flex-content-sec px-xs-30px">
          <div className="flex-content-box">
            <h1 className="flex-content-h1">
              Pathwinder P2 FlexEnd
            </h1>
            <p className="flex-content-p">
              The Serpentix Pathwinder FlexEnd option enables the Pathwinder conveyor to distribute material over a twelve-foot arc. Controlled with a pneumatic cylinder, a control valve, and a manual control stick, the Flextrack makes it possible to evenly deposit material over a given area. No longer will plant personnel inch a track forward to completely load a trailer. 
            </p>
            <p className="flex-content-p">
              FelxEnd Rotates More to One Side than the Other: The Cylinder clamp assembly can be moved on the Pivot Frame Extension to allow equal rotation on both the right and left sides. If the conveyor rotates too far to the left, move clamp assembly away from the center towards the outside edge, of the Pivot Frame Extension. If the conveyor rotates too far to the right, move clamp assembly towards the center.
            </p>
          </div>
        </Grid>
        <Grid item md={7} xs={12} className="flex-1-img-sec text-center-xs">
          <img src={Flex1} className="flex-1-pic w-100 w-90-xs " alt="Screenings conveyor Pathwinder FlexEnd"/>
        </Grid>
        <Grid item md={5} xs={12} className="flex-pros-sec pt-md-5">
          <ul className="flex-list">
            <li className="item flex-item">
              Evenly load a track
            </li>
            <li className="item flex-item">
               Load multiple bins            
            </li>
            <li className="item flex-item">
              Create even piles of material            
            </li>
            <li className="item flex-item">
              Fewer transfer points            
            </li>
            <li className="item flex-item">
              Lower power requirements            
            </li>
            <li className="item flex-item">
              Bypass a process, such as a lime mixer            
            </li>
          </ul>
        </Grid>
        <Grid item md={6} xs={12} className="flex-2-img-sec pt-md-5 mt-md-5 z-index-1111 text-center-xs">
          <img src={Flex2} className="flex-1-pic w-100 w-90-xs " alt="Screenings conveyor Pathwinder FlexEnd"/>
        </Grid>
        <Grid item md={6} xs={12} className="flex-3-img-sec pt-md-5 mt-md-5 text-center-xs">
          <img src={Flex3} className="flex-1-pic w-100 h-100 w-90-xs " alt="Screenings conveyor Pathwinder FlexEnd"/>
        </Grid>
        <Grid item md={6} xs={12} className="flex-4-img-sec pt-md-5 mt-md-5 text-center-xs">
          <img src={Flex4} className="flex-1-pic w-100 w-90-xs" alt="Screenings conveyor Pathwinder FlexEnd"/>
        </Grid>
        <Grid item md={6} xs={12} className="flex-5-img-sec mb-md-5 pb-md-5 pt-md-5 text-center-xs">
          <img src={Flex5} className="flex-1-pic w-100 w-90-xs" alt="Screenings conveyor Pathwinder FlexEnd"/>
        </Grid>
        <Grid item md={6} xs={12} className="flex-5-img-sec mb-md-5 pb-md-5 pt-md-5 text-center-xs pb-xs-4">
          <img src={Flex6} className="flex-1-pic w-100 w-90-xs" alt="Screenings conveyor Pathwinder FlexEnd"/>
        </Grid>
      </Grid>
    </div>
    </div>
    
  )
}
