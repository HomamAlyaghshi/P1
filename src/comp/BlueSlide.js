import React from "react";
import {
  BriefcaseIcon,
  ClockIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const BlueSlide = () => {
  return (
    <div className="relative w-full h-52 bg-cyan-400">
      <div className="flex justify-around items-center h-full p-4">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <BriefcaseIcon className="h-8 w-8 text-white" />
          </div>
          <div className="text-center mt-2">
            <p className="text-white font-mono font-bold text-lg">548</p>
            <p className="text-white font-mono font-bold text-sm">
              Projects Completed
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <ClockIcon className="h-8 w-8 text-white" />
          </div>
          <div className="text-center mt-2">
            <p className="text-white font-mono font-bold text-lg">1544</p>
            <p className="text-white font-mono font-bold text-sm">
              Hours Worked
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <StarIcon className="h-8 w-8 text-white" />
          </div>
          <div className="text-center mt-2">
            <p className="text-white font-mono font-bold text-lg">612</p>
            <p className="text-white font-mono font-bold text-sm">
              Positive Feedback
            </p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <HeartIcon className="h-8 w-8 text-white" />
          </div>
          <div className="text-center mt-2">
            <p className="text-white font-mono font-bold text-lg">752</p>
            <p className="text-white font-mono font-bold text-sm">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueSlide;
