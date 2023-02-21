import React from "react";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ slides }) {
  const IMAGE_SLIDES = slides;
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...sliderSettings}>
        {IMAGE_SLIDES.map((imgObject) => (
          // added a div container because Slider adds inline styling to to the top element, and that disables any custom inline styling
          <div key={imgObject.title}>
            <div
              className="carousel__bg-image"
              style={{ backgroundImage: `url(/assets/${imgObject.imgName})` }}
            >
              <h4 className="carousel__text">{imgObject.title}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
