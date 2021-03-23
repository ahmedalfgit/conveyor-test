import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Grid from '@material-ui/core/Grid';

// images 
import PhoneIcon from "../assests/phone-icon.jpg";
import AddressIcon from "../assests/address-icon.jpg";
import EmailIcon from "../assests/email-icon.jpg";


class Quote extends Component {


  render() {
    return (
      <div>
        <Helmet>
          <title>Serpentix Contact Us</title>
          <meta name="description" content="Contact us today"/>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Helmet>
        <div>
          <Grid container className="quote-container">
            <Grid item md={6} sm={12} xs={12} className="pt-sm-5 pt-xs-5 pl-xs-5">
              <div className="elfsight-app-f65555dc-0b73-4093-80ad-e3eb68ff0b1b pt-md-5 mt-md-5 pb-md-5 mb-md-5"></div>
            </Grid>
            <Grid item md={5} sm={12} xs={12} className="pt-md-5 mt-md-5 pt-sm-5 pl-sm-5 pt-xs-5">
              <ul className="contact-list list-style-none pt-md-5">
                <li className="contact-item">
                  <a href="tel:303-430-8427" className="phone-number">303.430.8427</a>
                </li>
                <li className="contact-item pt-md-5">
                  <a href="mailto:sales@serpentix.com" className="email">sales@serpentix.com</a>
                </li>
                <li className="contact-item pt-md-5">
                  <a href="https://goo.gl/maps/3vyrigdMAUVVWaH6A" className="location">11821 Huron St Westminster, CO 80234</a>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container className="form-container">
            <Grid item md={6} sm={12} xs={12} className="form-col">
                <form name="contact" method="POST" data-netlify="true" className="form" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                    <p>
                      <input type="text" name="name" placeholder="Name" className="form-input name"/>
                    </p>
                    <p>
                      <input type="email" name="email" placeholder="Email" className="form-input email"/>
                    </p>
                    <p>
                      <textarea name="message" placeholder="Message" className="form-input message"></textarea>
                    </p>
                    <p>
                      <button type="submit" className="btn">Send</button>
                    </p>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Quote;

