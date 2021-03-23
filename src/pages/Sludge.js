import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import Helmet from 'react-helmet';

//images
import firstPageSlugeBg from '../assests/sludge-homepage-bg-1.jpg'
import secondPageSlugeBg from '../assests/sludge-homepage-bg-2.jpg'
import firstPageSluge from '../assests/model-h-pic-2.jpg'
import secondPageSluge from '../assests/model-h-pic-4.jpg'
import modelHBoxBg from '../assests/model-h-box-bg.jpg'
import flatBeltBg from '../assests/flat-belt-bg.jpg'
import modelHLandscape from '../assests/model-h-landscape.jpg'

export default function Sludge() {

  const useStyle = makeStyles((theme) => ({
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    sludgeBg: {
      backgroundImage: `url(${firstPageSlugeBg})`,
      display: "flex",
      height: "1080px",
    },
    secondSludgeBg: {
      backgroundImage: `url(${secondPageSlugeBg})`,
      display: "flex",
      width: "100",
      height: "800px",
    },
    h67: {
      height: "67%",
    },
    h75: {
      height: "75%",
    }, 
    thirdSludgeBg: {
      height: "100%",
      display: "flex",
      // width: "100%",
    },
    modelHBox: {
      backgroundImage: `url(${modelHBoxBg})`,
      width: "100%",
      backgroundPosition: "top",
      backgroundRepeat: "non-repeat",
      height: "867px",
    },
    flatBeltBox: {
      backgroundImage: `url(${flatBeltBg})`,
      width: "100%",
      backgroundPosition: "top",
      backgroundRepeat: "non-repeat",
      height: "867px",
    }, 
    dFlex: {
      display: "flex",
    },
    overFlowH: {
      overflowY: "hidden",
      overflowX: "hidden",
    },
    MaxWidth1048: {
      maxWidth: "1048px",
    }
  }));

  const classes = useStyle();
  return (
    <div>
      <Helmet>
    <title>Sludge Conveyor | Serpentix Sludge Handling Solutions</title>
    <meta name="description" content="The Serpentix sludge conveyor - Model H Conveyor is built to haul larger capacities of sludge over longer distances at lower horsepower." />
  </Helmet>
  <div className={classes.overFlowH}>
      <Grid container spacing={2} className={clsx(classes.justifyContentAround, "pt-3 mt-3")}>
        <div className={clsx(classes.sludgeBg, classes.justifyContentAround, "rowBg sludge-first-bg-mobile w-1920-with-mx-auto sludge-first-bg-sm")}>
        <Grid item xs={12} md={5} sm={5} className={clsx(classes.textCenter,classes.h67, "px-xs-30px bg-white-xs py-xs-5")}>
          <div className={"contentBox"}>
            <h1 className={"sludgeConveyorH1"}>
              Sludge Conveyor
            </h1>
            <p className="sludgeContent line-height-xs-24px line-height-24">
            The sludge conveyor – Model H is the heaviest duty Serpentix designed to convey sludge up to 400 tons per hour at maximum speeds on slightly more than 100 feet per minute over distances up to 300 feet. Belt widths for Model H are 20″, 26″, and 32″.
            </p>
            <p className="sludgeContent line-height-xs-24px line-height-24">
            Positive guidance and tracking for the belt are provided by roller carriages attached to and pulled through a channel track by a steel link chain. The belt is attached to and supported by the carriages and intermediate belt chain attachments. The chain is driven by a sprocket located at the drive station, and tension is set by a screw adjusted spring in the tension station. 
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={5} sm={6} className={clsx(classes.textCenter, classes.h75, "text-center-xs")}>
          <img className={"sludgeImg w-100-mobile w-100-sm w-470px-md w-90-xs"} src={firstPageSluge} alt="Sludge conveyor model H"></img>
        </Grid>
        </div>

        <div className={clsx(classes.secondSludgeBg, classes.justifyContentAround, "rowBg sludge-second-bg-mobile w-1920-with-mx-auto sludge-second-bg-sm ")}>
        <Grid item xs={12} md={5} sm={5} className={clsx(classes.textCenter,classes.h67, "px-xs-30px bg-white-xs")}>
          <div className={"secondContentBox"}>
            <h1 className={"sludgeConveyorH3"}>
              Easy repair and less maintenance
            </h1>
            <p className="sludgeContent line-height-xs-24px line-height-24">
            The sludge conveyor – Serpentix Model H Conveyor is built to haul larger capacities of sludge over longer distances. The Serpentix Model H implements the usage of rollers to permit longer hauls at a lower horsepower.
            </p>
            <p className="sludgeContent line-height-xs-24px line-height-24">
            The Model H like the Pathwinder, still gives clients the ability to make turns in three dimensions, and work around complex job-sites. The Model H also uses the same belting system as the Pathwinder for easy repair and less maintenance.
            </p>
            <p className="sludgeContent line-height-xs-24px line-height-24">
            Over the years Serpentix has designed and fabricated the Model H Conveyor. This conveyor design launched the company. For thirty years each component has been scrutinized and every opportunity has been taken to improve performance.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sm={6} className={clsx(classes.textCenter, classes.h75, "text-center text-center-xs")}>
          <img className={"w-100 sludge-second-pic w-90-xs"} src={secondPageSluge} alt="Sludge conveyor model H"></img>
        </Grid>
        </div>

        <div className={clsx(classes.thirdSludgeBg, classes.justifyContentAround, "rowBg w-100 d-inline-mobile d-inline-grid-sm w-1920-with-mx-auto")}>
        <Grid item xs={12} md={6} sm={11} className={clsx(classes.textCenter, classes.MaxWidth1048, "mt-xs-5")}>
          <div className={clsx(classes.modelHBox, "modelHBox", "pt-xs-5")}>
            <h2 className="modelH-H2 px-xs-30px ml-xs-1rem">
              Model-H
            </h2>
            <ul className="modelHList px-xs-30px list-style-none ml-xs-1rem">
              <li className="modelHItem">
                45° incline angle
              </li>
              <li className="modelHItem pt-xs-2">
                9-24 foot radius
              </li>
              <li className="modelHItem pt-xs-2 line-height-22px-xs">
                Energy efficiency by using one low horse power motor (2-10 hp)
              </li>
              <li className="modelHItem pt-xs-2">
                Chain driven conveyor
              </li>
              <li className="modelHItem pt-xs-2">
                Scaper system to clean dewatered sludge
              </li>
              <li className="modelHItem pt-xs-2 line-height-22px-xs">
                The Model-H has the ability to perform horizontal and helical turns
              </li>
              <li className="modelHItem pt-xs-2">
                Three-dimensional path
              </li>
              <li className="modelHItem pt-xs-2 line-height-22px-xs">
                Convey sludge, grit, screenings and bulk material in both municipal and industrial applications 
              </li>
              <li className="modelHItem pt-xs-2">
                Simple and easy to use and assemble 
              </li>
              <li className="modelHItem pt-xs-2">
                Belt widths of 20″, 26″ or 32″
              </li>
              <li className="modelHItem pt-xs-2">
                Low capital cost of one belt replacement
              </li>
              <li className="modelHItem pt-xs-2 line-height-22px-xs">
                Maintenance is primarily performed on drive and tension stations
              </li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={12} md={6} sm={11} className={clsx(classes.textCenter, classes.MaxWidth1048)}>
          <div className={clsx(classes.flatBeltBox, "flatBeltBox", "mt-xs-5 pt-xs-5")}>
            <h2 className="flatBelt-H2 px-xs-30px ml-xs-1rem">
              Flat Belt
            </h2>
            <ul className="flatBeltList px-xs-30px list-style-none ml-xs-1rem">
              <li className="flatBeltItem">
                Competitive
              </li>
              <li className="flatBeltItem pt-xs-2">
                Increased maintenance to lubricate the idler rollers over the length of the conveyors
              </li>
              <li className="flatBeltItem pt-xs-2">
                Routing restrictions and poor containment
              </li>
              <li className="flatBeltItem pt-xs-2">
                Need of two or more conveyors to convey an offset path
              </li>
              <li className="flatBeltItem pt-xs-2">
                Energy-consuming (more than one motor)
              </li>
              <li className="flatBeltItem pt-xs-2">
                Straight line and slight inclines (max: 20°) between transfer points
              </li>
              <li className="flatBeltItem pt-xs-2">
                High capital costs of one belt replacement
              </li>
              <li className="flatBeltItem pt-xs-2">
                Belt driven system requiring frequent attention and alignment
              </li>
            </ul>
          </div>
        </Grid>
        </div>

        <div className={clsx(classes.dFlex, classes.justifyContentAround, "h700 mt-md-5 pb-xs-5 pt-md-5 w-100 d-inline-mobile d-inline-sm w-1920-with-mx-auto")}>
          <Grid item xs={12} md={4} sm={10} className="pb-xs-4">
            <div className="sludgeAdvBox px-xs-30px ml-xs-1rem">
              <h3 className="sludgeAvdH3">
                The pros of Serpentix sludge conveyor
              </h3>
              <ul className="sludgeAdvList pl-xs-0">
                <li className="sludgeAdvItem">
                  Convey up to 100 tons/hour
                </li>
                <li className="sludgeAdvItem pt-xs-2">
                  Elevate a material up to 45° inclines
                </li>
                <li className="sludgeAdvItem pt-xs-2 line-height-22px-xs">
                  Transport of materials types from solids to near-liquid
                </li>
                <li className="sludgeAdvItem pt-xs-2">
                  Conveyor lengths up to 400-feet
                </li>
                <li className="sludgeAdvItem pt-xs-2">
                  Belt widths of 20″, 26″ or 32″
                </li>
                <li className="sludgeAdvItem pt-xs-2">
                  Turn a 9-foot radius
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={8} className={clsx(classes.dFlex, "d-inline-sm")}>
            <Grid item xs={12} sm={12} md={3} className="sludge-last-pic">
                <img className={"modelHLandscape w-100-mobile"} src={modelHLandscape} alt="Model H conveyor"/>
              </Grid>
              <Grid item xs={12} md={8} sm={11} className="sludge-last-vid">
                <iframe src="https://www.youtube.com/embed/_rLP-Q5KUqE?feature=oembed" allow="autoplay; encrypted-media" allowfullscreen="" width="500" height="281" frameborder="0" className="video-391px-mobile"></iframe>
              </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
    </div>
    
  )
}