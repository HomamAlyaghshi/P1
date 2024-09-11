import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import GridPic from "../comp/GridPic";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header></Header>

      {/* the text */}

      <div className="flex-grow flex flex-col items-center justify-start p-10 bg-slate-100 overflow-auto h-48 max-h-80">
        <p className="text-2xl font-bold mb-5">UI/UX & Graphic Designer</p>
        <p className="text-gray-400">
          i am a Graphic & web Designer based in New York,specializing
        </p>
        <p className="text-gray-400">
          in User interface Design and Develpoment
        </p>
      </div>

      <GridPic />

      {/* footer  */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
