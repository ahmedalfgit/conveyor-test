import React, { Component } from 'react';
import HeaderBar from '../src/components/navBar';
import Footer from '../src/components/footer';
import './App.scss';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Sludge from './pages/Sludge';
import Screenings from './pages/Screenings';
import Biosolids from './pages/Biosolids';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import COMade from './pages/COMade';
import Submit from './pages/submit';

export default function App() {
  return (
    <div>
      <HeaderBar />
      <Home/>
      
      {/* <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact path="/sludge" render={(props) => <Sludge {...props} />} />
        <Route
          exact
          path="/screenings"
          render={(props) => <Screenings {...props} />}
        />
        <Route
          exact
          path="/biosolids"
          render={(props) => <Biosolids {...props} />}
        />
        <Route exact path="/quote" render={(props) => <Quote {...props} />} />
        <Route exact path="/submit" render={(props) => <Submit {...props} />} />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route
          exact
          path="/COMade"
          render={(props) => <COMade {...props} />}
        />
      </Switch> */}
      <Footer />
    </div>
  );
}
