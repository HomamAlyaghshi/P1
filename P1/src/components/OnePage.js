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
    <div className=" ">
      {/* هاد العنصر الأول */}
      <div className="w-full h-auto bg-blue-500  ">
        <div className="grid grid-flow-row">
          <div
            className="relative w-full h-screen bg-cover bg-center" //relative : مشان نحط عناصر فوق بعض
            style={{ backgroundImage: "url('/images/cover.jpg')" }}
          >
            <div className="flex flex-row justify-end m-6 gap-10 mr-20">
              <Link to="/home-page">
                <button className="font-mono text-sm  hover:text-cyan-400 py-2 px-4 rounded">
                  HOME
                </button>
              </Link>
              <Link to="/about">
                <button className="font-mono text-sm  hover:text-cyan-400 py-2 px-4 rounded">
                  ABOUT
                </button>
              </Link>
              <Link to="/project-single">
                <button className="font-mono text-sm  hover:text-cyan-400 py-2 px-4 rounded">
                  WORK
                </button>
              </Link>
              <button className="font-mono text-sm  hover:text-cyan-400 py-2 px-4 rounded">
                PROCESS
              </button>
              <button className="font-mono text-sm  hover:text-cyan-400 py-2 px-4 rounded">
                SERVICES
              </button>
              <button className="font-mono text-sm  hover:text-cyan-400 py-2 px-4 rounded">
                TESTIMONIALS
              </button>
              <Link to="/contact">
                <button className="font-mono text-sm  hover:text-cyan-400 py-2 px-4 rounded">
                  CONTACT
                </button>
              </Link>
            </div>

            <div className="absolute inset-0 flex place-items-start justify-end mr-24 mt-60  text-center p-4">
              <div>
                <h1 className="text-4xl font-bold font-mono text-gray-950 ">
                  We Design and Develop
                </h1>
                <div className="mt-4 text-left text-slate-500">
                  <p>We are a new design studio based in USA. We have over</p>
                  <p>
                    20 years of combined experience, and know a thing or two
                  </p>
                  <p>about designing websites and mobile apps</p>
                  <Link to="/contact">
                    <button className="bg-cyan-500 mt-6 pt-2 pr-6 pl-6 pb-2 text-white font-mono">
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </div>
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
      <div className="w-full h-auto grid grid-cols-2  bg-gray-100 justify-center items-center ">
        {/**العمود الاول */}
        <div className="flex flex-col items-start ml-20 mb-20">
          <h1 className="font-bold text-3xl mb-4">Professional Skills</h1>
          <label className="mb-2 text-sm font-semibold">UI/UX DESIGN</label>
          <Slider initialValue={75} />
          <label className="mb-2 text-sm font-semibold">WEB DEVELOPMENTS</label>
          <Slider initialValue={90} />
          <label className="mb-2 text-sm font-semibold">MARKETING </label>
          <Slider initialValue={65} />
        </div>
        {/**العمود الثاني */}
        <div>
          <img alt="13" src="/images/13.PNG"></img>
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
        <div className="flex justify-between items-center p-4 ">
          <img alt="logo1" src="/images/l1.PNG" className=""></img>
          <img alt="logo2" src="/images/l3.PNG " className=""></img>
          <img alt="logo3" src="/images/l4.PNG " className=""></img>
          <img alt="logo4" src="/images/l5.PNG " className=""></img>
        </div>
      </div>
      <NeedPro />
      <Footer />
    </div>
  );
};

export default OnePage;
