import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import baner1 from  "../Imagenes/carrusel/baner1.jpg"

const style={
  foto: {
    width: "100%",
    height: "100%",
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
          <div >
            <img src ={baner1} style={style.foto}/>
          </div>
          <div>
            <img src ={baner1} style={style.foto}/>
          </div>
          <div>
            <img src ={baner1} style={style.foto}/>
          </div>
        </Slider>
      </div>
    );
  }
};