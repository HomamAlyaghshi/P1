import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    // Speed of autoplay in milliseconds
    responsive: [
      {
        breakpoint: 768, // Screen size for tablet and below
        settings: {
          slidesToShow: 3, // Show 2 logos on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Screen size for mobile and below
        settings: {
          slidesToShow: 2, // Show 1 logo on very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white px-4">
      {" "}
      {/* Add padding to the outer container */}
      <Slider {...settings} className="m-6 pl-16 ">
        {/* Images */}
        <div className="flex justify-center p-2">
          {" "}
          {/* Use `justify-center` and adjust padding */}
          <img
            alt="logo3"
            src="/images/l4.png"
            className="w-16 sm:w-40 mx-2"
          />{" "}
          {/* Add margin to images */}
        </div>
        <div className="flex justify-center p-2">
          <img alt="logo4" src="/images/l5.png" className="w-16 sm:w-40 mx-2" />
        </div>
        <div className="flex justify-center p-2">
          <img alt="logo1" src="/images/l1.png" className="w-16 sm:w-40 mx-2" />
        </div>
        <div className="flex justify-center p-2">
          <img alt="logo2" src="/images/l3.png" className="w-16 sm:w-40 mx-2" />
        </div>
        <div className="flex justify-center p-2">
          <img alt="logo3" src="/images/l4.png" className="w-16 sm:w-40 mx-2" />
        </div>
        <div className="flex justify-center p-2">
          <img alt="logo4" src="/images/l5.png" className="w-16 sm:w-40 mx-2" />
        </div>
        <div className="flex justify-center p-2">
          <img
            alt="logo1"
            src="/images/l6.png"
            className="w-16 sm:w-48 pt-3 mx-2"
          />
        </div>
        <div className="flex justify-center p-2">
          <img alt="logo2" src="/images/l7.png" className="w-16 sm:w-40 mx-2" />
        </div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
