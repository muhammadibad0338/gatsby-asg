import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestmonialSlideController from "./TestmonialSlideController"
import ClientReviews from "./ClientReviews"

export default class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        
      <div>
          <TestmonialSlideController handlePrevSlide = {this.previous} handleNextSlide = {this.next} />
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <ClientReviews />
          </div>
          <div key={2}>
            <ClientReviews />
          </div>
          <div key={3}>
            <ClientReviews />
          </div>
          <div key={4}>
            <ClientReviews />
          </div>
        </Slider>
        
      </div>
    );
  }
}