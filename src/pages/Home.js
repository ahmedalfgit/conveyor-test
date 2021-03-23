import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx'

import FitWWTP from '../assests/fit-wwtp.jpg';
import ThreeConveyors from './secctions/ThreeConveyors';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  paper: {
    padding: 20,
    textAlign: 'center',
    boxShadow: 'none',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  itemHeader: {
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'left',
  },
  itemContent: {
    fontSize: '1.2rem',
    textAlign: 'left',
    paddingTop: '2rem',
  },
  img: {
    width: '100%',
    height: '799px',
  },
}));

export default function Home() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.justifyCenter}>
        <Grid item xs={12} md={12}>
        <div className="vimeo-wrapper">
        <iframe className="main-video" src="https://player.vimeo.com/video/485667902?background=1&autoplay=1&loop=1&byline=0&title=0"
        webkitAllowFullScreen="" mozAllowFullScreen="" allowFullScreen="" frameBorder="0"></iframe>
        <div className="video-title">
        <h1 className="title">
          Building Conveyors Since 1969
        </h1>
        </div>
        </div>

        </Grid>
      </Grid>
      <Grid container spacing={4} className={ clsx(classes.justifyCenter, "pt-md-5 w-1920-with-mx-auto pt-md-5 mb-md-5 pb-md-5")}> 
      <Grid item xs={12} md={7} sm={12}>
          <CardMedia image={FitWWTP} className={clsx(classes.img, "model-h-img")} />
        </Grid>
        <Grid item xs={12} md={4} sm={11} className="">
          <h1 className="fit-title">
                Designed to fit your layout
            </h1>
            <p className="fit-content line-height-xs-24px line-height-24">
                We design and build conveyors to fit the layout
                of your Wastewater Treatment Plant. This way you save
                money on potential building expanding
            </p>
        </Grid>
      </Grid>
      <Grid conainer spacing={2} className={ clsx(classes.justifyCenter, "pt-md-5")}>
        <ThreeConveyors />
      </Grid>
    </div>
  );
}
