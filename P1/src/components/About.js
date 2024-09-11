import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";

import BlueSlide from "../comp/BlueSlide";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      {/* السلايد تبع الصورة مع كتابة */}

      <div className="relative w-full h-80">
        <img
          src="/images/ab2.jpg"
          alt="ab1"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4 ">
            <h1 className="text-3xl font-bold"> Amelia Woods</h1>
            <p className="mt-2 text-lg">
              i am a Graphic & web Designer based in New York,specializing
            </p>
            <p className="mt-2 text-lg">
              in User interface Design and Develpoment
            </p>
          </div>
        </div>
      </div>

      {/* السلايد تبع اللون الازرق مع الايقونات */}
      <BlueSlide />

      <div className="w-full h-screen flex">
        {/* النصف الأيسر: الصورة */}
        <div className="w-1/2 h-full">
          <img
            src="/images/ab1.PNG"
            alt="صورة 2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* النصف الأيمن: المحتوى النصي */}
        <div className="w-1/2 h-full bg-white flex items-center justify-center">
          <div className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-left font-mono">
              About Me
            </h1>
            {/* TODO: قرب الأسطر الثلاثة الأولى من بعض وبعدهم عن آخر اثنين */}
            <div className="text-left space-y-4">
              <div>
                Given, let waters air sea had you'll, may seed abundantly fish.
              </div>
              <div>
                Were, you'll earth forth winged above brought. Own darkness.
              </div>
              <div>They're, him can't fourth sea place have.</div>
              <div>
                So the above, may stars cattle fruitful face shall. Tree it,
                winged.
              </div>
              <div>Every sign's male firmament us. Morning him.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 flex flex-col items-center justify-center h-72 p-4">
        <h1 className="text-2xl font-mono font-bold text-gray-800 mb-2">
          Need a Project?
        </h1>
        <p className="text-center mb-1">
          Let us know what you're looking for in an agency. We'll take a look
          and see
        </p>
        <p className="text-center">
          if this could be the start of something beautiful
        </p>
        <Link to="/project-single">
          <button className="bg-cyan-500 text-white p-3 m-5 pl-12 pr-12">
            Let's Talk
          </button>
        </Link>
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default About;
