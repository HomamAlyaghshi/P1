import React, { useState } from "react";
import Slider from "../comp/Slider";
import BlueSlide from "../comp/BlueSlide";
import GridPic from "../comp/GridPic";
import GraySlid from "../comp/GraySlide";
import NeedPro from "./../comp/NeedPro";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // استيراد أيقونات القائمة
import BlueTextSlider from "../comp/BlueTextSlider";
import LogoSlider from "../comp/LogoSlider";

const OnePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-screen bg-blue-500 relative">
        {/* Background Image */}
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cover.jpg')" }}
        >
          {/* Burger Menu Icon - يظهر فقط على الموبايل */}
          <div className="sm:hidden absolute top-4 right-4 z-10">
            <button onClick={toggleMenu} className="p-2">
              {!isMenuOpen ? (
                <Bars3Icon className="h-8 w-8 text-black" />
              ) : (
                <XMarkIcon className="h-8 w-8 text-black" />
              )}
            </button>
          </div>

          {/* Navigation Menu - يظهر فقط عند فتح القائمة على الموبايل */}
          <div
            className={`sm:hidden  fixed top-0 right-0 h-full w-1/2 bg-gray-100 z-20 transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black"
              onClick={toggleMenu}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col justify-center items-center mt-16 space-y-6 p-4 text-black">
              <Link to="/home-page" onClick={toggleMenu}>
                <button className="font-mono text-lg hover:text-cyan-400">
                  HOME
                </button>
              </Link>
              <Link to="/about" onClick={toggleMenu}>
                <button className="font-mono text-lg hover:text-cyan-400">
                  ABOUT
                </button>
              </Link>
              <Link to="/project-single" onClick={toggleMenu}>
                <button className="font-mono text-lg hover:text-cyan-400">
                  WORK
                </button>
              </Link>
              <button
                className="font-mono text-lg hover:text-cyan-400"
                onClick={toggleMenu}
              >
                PROCESS
              </button>
              <button
                className="font-mono text-lg hover:text-cyan-400"
                onClick={toggleMenu}
              >
                SERVICES
              </button>
              <button
                className="font-mono text-lg hover:text-cyan-400"
                onClick={toggleMenu}
              >
                TESTIMONIALS
              </button>
              <Link to="/contact" onClick={toggleMenu}>
                <button className="font-mono text-lg hover:text-cyan-400">
                  CONTACT
                </button>
              </Link>
            </div>
          </div>

          {/* Navigation Buttons for larger screens */}
          <div className="hidden sm:flex flex-wrap justify-end p-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 absolute top-0 right-0 mr-4 lg:mr-20 z-10">
            <Link to="/home-page">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded hover:bg-gray-200 transition-all duration-500 ease-out delay-100 hover:text-xl">
                HOME
              </button>
            </Link>
            <Link to="/about">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded hover:bg-gray-200 transition-all duration-500 ease-out delay-100 hover:text-xl ">
                ABOUT
              </button>
            </Link>
            <Link to="/project-single">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded hover:bg-gray-200 transition-all duration-500 ease-out delay-100 hover:text-xl">
                WORK
              </button>
            </Link>
            <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded hover:bg-gray-200 transition-all duration-500 ease-out delay-100 hover:text-xl">
              PROCESS
            </button>
            <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded hover:bg-gray-200 transition-all duration-500 ease-out delay-100 hover:text-xl">
              SERVICES
            </button>
            <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded hover:bg-gray-200 transition-all duration-500 ease-out delay-100 hover:text-xl">
              TESTIMONIALS
            </button>
            <Link to="/contact">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded hover:bg-gray-200 transition-all duration-500 ease-out delay-100 hover:text-xl ">
                CONTACT
              </button>
            </Link>
          </div>

          {/* Hero Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center md:text-center md:items-center md:justify-center md:mr-0 md:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-gray-950">
              We Design and Develop
            </h1>
            <div className="mt-4 text-slate-500">
              <p>We are a new design studio based in the USA. We have over</p>
              <p>20 years of combined experience and know a thing or two</p>
              <p>about designing websites and mobile apps.</p>
              <Link to="/contact">
                <button className="bg-cyan-500 mt-6 px-6 py-2 text-white font-mono rounded hover:bg-cyan-600 hover:text-xl hover:text-black transition-all duration-700">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* العنصر التاني */}
      <div className="w-full h-auto">
        <div className="mt-28 mb-8 flex flex-col items-center justify-center text-center">
          <h1 className="font-bold font-mono text-4xl text-slate-950 mb-8">
            About Us
          </h1>
          <p className="text-gray-500 mb-1">
            Divide have don't man wherein air frouth. Own itself make have night
            won't make.
          </p>
          <p className="text-gray-500 mb-1">
            A you under Seed appear which good give. Own give air without fowl
            moventh dry first
          </p>
          <p className="text-gray-500 mb-1">
            heaven fruit, dominion she'd won't very all
          </p>
          <div className="h-40 w-80 mt-10 flex justify-center">
            <img
              src="/images/t1.PNG"
              alt="t1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-6">
        {/* العمود الأول */}
        <div className="flex flex-col items-start ml-4 md:ml-20 mb-8 md:mb-20">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">
            Professional Skills
          </h1>
          <div className="flex flex-col gap-16 w-full mt-5">
            <Slider initialValue={75} text={"UI/UX DESIGN"} />
            <Slider initialValue={90} text={"WEB DEVELOPMENT"} />
            <Slider initialValue={65} text={"MARKETING"} />
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="flex justify-center ">
          <img
            alt="13"
            src="/images/13.PNG"
            className=" max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
      <div className="w-full h-auto ">
        <BlueSlide />
      </div>
      <div>
        <GridPic />
      </div>
      {/* العنصر تحت الصور */}
      <div className="w-full h-auto flex justify-center items-center text-center ">
        <div className="mt-28 mb-8 flex justify-center items-center flex-col">
          <h1 className="font-bold font-mono text-4xl text-slate-950 mb-8">
            Our Work Proccess
          </h1>
          <p className=" text-gray-600 ">
            Was years it season was there form he in them together over that,
          </p>
          <p className=" text-gray-600 ">
            third sixth gathered female creeping bearing behold years.
          </p>
        </div>
      </div>
      {/**Videoooo */}
      <div className="flex flex-col items-center justify-center p-4 mb-6 ">
        <video
          className="w-full max-w-4xl h-auto shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>{" "}
      <GraySlid />
      <BlueTextSlider />
      <LogoSlider />
      <NeedPro />
      <Footer />
    </div>
  );
};

export default OnePage;
