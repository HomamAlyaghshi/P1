import React from "react";
import Header from "../comp/Header";
import { FiGrid } from "react-icons/fi";
import Footer from "../comp/Footer";

const PropjectSingle = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-rows-[500px,auto] bg-gray-200   h-auto">
        {/* السطر الأول: عمودين */}
        <div className="grid grid-cols-2    ">
          <div className=" flex justify-start items-start p-20 flex-col  ">
            <p className=" text-3xl pb-5 font-bold  ">Light Breakfast</p>
            <p className="text-zinc-500 font-sans">
              Light his can't a creeping. Be bring blessed night. Replenish
            </p>
            <p className="text-zinc-500 font-sans">
              blessed creature good. Saw earth every creepeth lights day.{" "}
            </p>
            <p className="text-zinc-500 font-sans">
              divided abundanlty from In. Said given lights. Sixth the male.{" "}
            </p>
            <p className="text-zinc-500 font-sans">
              Upon their multiply. Kind beast. Him tree upon{" "}
            </p>
            <p className="text-zinc-500 font-sans mt-6">
              Cattle. Dominion day herb she'd creeping divide darkness.
            </p>
            <p className="text-zinc-500 font-sans">Which. Subdue had.</p>

            <div className=" flex flex-row mt-10 ">
              <div className=" flex flex-col mr-2">
                <label className="font-bold ">Client:</label>
                <label className="font-bold ">Date:</label>
                <label className="font-bold ">Share:</label>
              </div>

              <div className=" flex flex-col w-full ">
                <label className="text-zinc-500">Emma Morris</label>
                <label className="text-zinc-500">25.06.2017</label>
                <label className="text-zinc-500">
                  Facebook, Twitter, Pinterset
                </label>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/images/12.jpg"
              alt="project1"
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* السطر الثاني */}
        <div className="bg-white p-6 text-black flex justify-between items-center">
          <button className="font-mono font-bold">&lt; PREVIOUS PROJECT</button>
          <span className="text-xl font-bold">
            <FiGrid size={24} />
          </span>
          <button className="font-mono font-bold">NEXT PROJECT &gt;</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PropjectSingle;
