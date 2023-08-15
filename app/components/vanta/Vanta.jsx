'use client'
import React from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.clouds.min.js";

class Vanta extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect =  BIRDS({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xfff33f
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  render() {
    return (
      <div className="backgroundVanta" style={{ height: "100%", width: "100%"}} ref={this.vantaRef}></div>
    );
  }
}

export default Vanta;
