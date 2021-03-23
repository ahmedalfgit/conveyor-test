import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Serpentix Contact Us</title>
          <meta name="description" content="Contact us today"/>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Helmet>
        <div>
          <div class="elfsight-app-f65555dc-0b73-4093-80ad-e3eb68ff0b1b"></div>
        </div>
      </div>
    );
  }
}


export default Contact;
