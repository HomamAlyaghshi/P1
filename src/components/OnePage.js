import React from "react";
import Slider from "../comp/Slider";
import BlueSlide from "../comp/BlueSlide";
import GridPic from "../comp/GridPic";
import GraySlid from "../comp/GraySlide";
import NeedPro from "./../comp/NeedPro";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
const OnePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-screen bg-blue-500 relative">
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cover.jpg')" }}
        >
          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-end p-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 absolute top-0 right-0 mr-4 lg:mr-20">
            <Link to="/home-page">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded">
                HOME
              </button>
            </Link>
            <Link to="/about">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded">
                ABOUT
              </button>
            </Link>
            <Link to="/project-single">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded">
                WORK
              </button>
            </Link>
            <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded">
              PROCESS
            </button>
            <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded">
              SERVICES
            </button>
            <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded">
              TESTIMONIALS
            </button>
            <Link to="/contact">
              <button className="font-mono text-xs sm:text-sm hover:text-cyan-400 py-2 px-4 rounded">
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
                <button className="bg-cyan-500 mt-6 px-6 py-2 text-white font-mono rounded">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* العنصر التاني */}
      <div className="w-full h-auto ">
        <div className="mt-28 mb-8 flex justify-center items-center flex-col">
          <h1 className="font-bold font-mono text-4xl text-slate-950 mb-8">
            About us
          </h1>
          <p className=" text-gray-600 ">
            Divide have don't man wherein air frouth. Own itself make have night
            won't make.
          </p>
          <p className=" text-gray-600 ">
            A you under Seed appear which good give. Own give air without fowl
            moventh dry first
          </p>
          <p className=" text-gray-600 ">
            heaven fruit, dominion she'd won't very all
          </p>
          <div className="h-40 w-80 mt-10">
            <img src="/images/t1.PNG" alt="t1"></img>
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-6">
        {/* العمود الأول */}
        <div className="flex flex-col items-start ml-4 md:ml-20 mb-8 md:mb-20">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">
            Professional Skills
          </h1>
          <label className="mb-2 text-sm font-semibold">UI/UX DESIGN</label>
          <Slider initialValue={75} />
          <label className="mb-2 text-sm font-semibold">WEB DEVELOPMENT</label>
          <Slider initialValue={90} />
          <label className="mb-2 text-sm font-semibold">MARKETING</label>
          <Slider initialValue={65} />
        </div>

        {/* العمود الثاني */}
        <div className="flex justify-center">
          <img
            alt="13"
            src="/images/13.PNG"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
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
      <div className="w-full h-auto ">
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
      <div className="flex flex-col items-center justify-center p-4 mb-6">
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
      <div className="bg-cyan-400 h-64 flex flex-col items-center justify-center p-4 text-center">
        <div className="text-white">
          <p className="">
            " Outstanding job and exceeded all expections. it was a pleasure
          </p>
          <p>to work with them on a sizable first project and am looking</p>
          <p>forward to start the next one asap</p>
          <p className="text-xs mt-6">MICHAEL HOPKINS</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex justify-between items-center p-4 flex-wrap">
          <img alt="logo1" src="/images/l1.PNG" className="w-16 sm:w-24" />
          <img alt="logo2" src="/images/l3.PNG" className="w-16 sm:w-24" />
          <img alt="logo3" src="/images/l4.PNG" className="w-16 sm:w-24" />
          <img alt="logo4" src="/images/l5.PNG" className="w-16 sm:w-24" />
        </div>
      </div>
      <NeedPro />
      <Footer />
    </div>
  );
};

export default OnePage;
