import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import BlueSlide from "../comp/BlueSlide";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* السلايد تبع الصورة مع كتابة */}
      <div className="relative w-full h-80">
        <img
          src="/images/ab2.jpg"
          alt="ab1"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Amelia Woods
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg">
              I am a Graphic & Web Designer based in New York, specializing
            </p>
            <p className="mt-2 text-sm sm:text-base md:text-lg">
              in User Interface Design and Development
            </p>
          </div>
        </div>
      </div>

      {/* السلايد تبع اللون الأزرق مع الأيقونات */}
      <BlueSlide />

      {/* القسم النصي والصورة */}
      <div className="w-full flex flex-col md:flex-row">
        {/* النصف الأيسر: الصورة */}
        <div className="w-full md:w-1/2 h-80 md:h-full">
          <img
            src="/images/ab1.PNG"
            alt="صورة 2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* النصف الأيمن: المحتوى النصي */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 md:p-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 font-mono">
              About Me
            </h1>
            <div className="text-sm md:text-base space-y-4">
              <p>
                Given, let waters air sea had you'll, may seed abundantly fish.
              </p>
              <p>
                Were, you'll earth forth winged above brought. Own darkness.
              </p>
              <p>They're, him can't fourth sea place have.</p>
              <p>
                So the above, may stars cattle fruitful face shall. Tree it,
                winged.
              </p>
              <p>Every sign's male firmament us. Morning him.</p>
            </div>
          </div>
        </div>
      </div>

      {/* قسم التواصل */}
      <div className="w-full bg-gray-200 flex flex-col items-center justify-center h-72 p-4">
        <h1 className="text-xl sm:text-2xl font-mono font-bold text-gray-800 mb-2">
          Need a Project?
        </h1>
        <p className="text-sm sm:text-base text-center mb-1">
          Let us know what you're looking for in an agency. We'll take a look
        </p>
        <p className="text-sm sm:text-base text-center">
          if this could be the start of something beautiful
        </p>
        <Link to="/project-single">
          <button className="bg-cyan-500 text-white p-3 m-5 px-8 py-2">
            Let's Talk
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default About;
