import React from "react";
import Header from "../comp/Header";
import { FiGrid } from "react-icons/fi";
import Footer from "../comp/Footer";

const PropjectSingle = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-200 min-h-screen">
        {/* السطر الأول: عمودين */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-8">
          <div className="flex flex-col justify-start p-4 lg:p-8 bg-white shadow-md rounded-lg">
            <p className="text-2xl lg:text-3xl font-bold mb-4">
              Light Breakfast
            </p>
            <p className="text-zinc-500 mb-2">
              Light his can't a creeping. Be bring blessed night. Replenish
            </p>
            <p className="text-zinc-500 mb-2">
              blessed creature good. Saw earth every creepeth lights day.
            </p>
            <p className="text-zinc-500 mb-2">
              divided abundanlty from In. Said given lights. Sixth the male.
            </p>
            <p className="text-zinc-500 mb-2">
              Upon their multiply. Kind beast. Him tree upon
            </p>
            <p className="text-zinc-500 mt-6 mb-2">
              Cattle. Dominion day herb she'd creeping divide darkness.
            </p>
            <p className="text-zinc-500 mb-4">Which. Subdue had.</p>

            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col mb-4 sm:mb-0">
                <label className=" mb-1">
                  <strong>Client: </strong>Emma Morris
                </label>
                <label className=" mb-1">
                  {" "}
                  <strong>Date:</strong> 25.06.2017
                </label>
                <label className=" mb-1">
                  <strong>Share:</strong> Facebook, Twitter, Pinterest
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/images/12.jpg"
              alt="project1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* السطر الثاني */}
        <div className="bg-white p-4 lg:p-6 text-black flex justify-between items-center shadow-md">
          <button className="font-mono font-bold  hover:underline">
            &lt; PREVIOUS PROJECT
          </button>
          <span className="text-xl font-bold ">
            <FiGrid size={24} />
          </span>
          <button className="font-mono font-bold  hover:underline">
            NEXT PROJECT &gt;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropjectSingle;
