import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import GridPic from "../comp/GridPic";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* النصوص */}
      <div className="flex-grow flex flex-col items-center justify-center p-10 bg-slate-100 text-center">
        <p className="text-2xl md:text-3xl font-bold mb-5">
          UI/UX & Graphic Designer
        </p>
        <p className="text-gray-500 mb-3">
          I am a Graphic & Web Designer based in New York, specializing
        </p>
        <p className="text-gray-500">
          in User Interface Design and Development
        </p>
      </div>

      <GridPic />

      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default HomePage;
