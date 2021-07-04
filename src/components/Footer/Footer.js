import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>© Juanma Barcia {new Date().getFullYear()}</div>
    );
  }
}

export default Footer;
