import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlueTextSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{ bottom: "10px" }}>
        {" "}
        {/* Adjust the bottom value to position the dots */}
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots slick-dots-custom", // Custom class for further styling if needed
  };

  return (
    <div className="relative">
      {" "}
      {/* Make this div relative to position the dots correctly */}
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="bg-cyan-400 h-64 flex items-center justify-center text-center">
          <div className="text-white mt-16">
            <p>
              "Outstanding job and exceeded all expectations. It was a pleasure
            </p>
            <p>to work with them on a sizable first project and am looking</p>
            <p>forward to start the next one asap</p>
            <p className="text-xs mt-6">MICHAEL HOPKINS</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="bg-cyan-400 h-64 flex items-center justify-center text-center">
          <div className="text-white mt-16">
            <p>"Another amazing testimonial text here."</p>
            <p>It was a great experience working with them.</p>
            <p>Looking forward to future collaborations.</p>
            <p className="text-xs mt-6">JANE DOE</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="bg-cyan-400 h-64 flex items-center justify-center text-center">
          <div className="text-white mt-16">
            <p>
              "Outstanding job and exceeded all expectations. It was a pleasure
            </p>
            <p>to work with them on a sizable first project and am looking</p>
            <p>forward to start the next one asap</p>
            <p className="text-xs mt-6">MICHAEL HOPKINS</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BlueTextSlider;
