import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import baner1 from  "../Imagenes/carrusel/baner1.jpg"
import baner2 from  "../Imagenes/carrusel/baner2.jpg"
import baner4 from  "../Imagenes/carrusel/baner4.jpg"
import { Link } from "react-router-dom";

const style={
  foto: {
    width: "100%",
    height: "100%",
    marginTop: "16px",
  },
}

export default class CustomSlider extends Component {
  render() {
    const settings =  {
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      centerPadding: 10,
      dots: true,
      duration: 400,
      initialSlide: true,
      shift: 10
    };
    return (
      <div>
        
        <Slider { ...settings } >
        <div>
            <img src ={baner1} style={style.foto}/>
          </div>
          <Link to="/historia">
            <img src ={baner2} style={style.foto}/>
          </Link>
          <div>
            <img src ={baner4} style={style.foto}/>
          </div>
        </Slider>
      </div>
    );
  }
};