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
      <div className="grid grid-cols-4 gap-4 h-full p-4 pl-20">
        {/* العمود الأول */}
        <div className="flex items-center">
          {/* تقسيم العمود إلى عمودين */}
          <div className="w-1/4 flex justify-center">
            <BriefcaseIcon className="h-8 w-8 text-white" /> {/* أيقونة */}
          </div>
          <div className="w-3/4">
            <p className="text-white font-mono font-bold">548</p>
            <p className="text-white font-mono font-bold">Projects Completed</p>
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="flex items-center">
          {/* تقسيم العمود إلى عمودين */}
          <div className="w-1/4 flex justify-center">
            <ClockIcon className="h-8 w-8 text-white" /> {/* أيقونة */}
          </div>
          <div className="w-3/4">
            <p className="text-white font-mono font-bold">1544</p>
            <p className="text-white font-mono font-bold">Hours Works </p>
          </div>
        </div>

        {/* العمود الثالث */}
        <div className="flex items-center">
          {/* تقسيم العمود إلى عمودين */}
          <div className="w-1/4 flex justify-center">
            <StarIcon className="h-8 w-8 text-white" /> {/* أيقونة */}
          </div>
          <div className="w-3/4">
            <p className="text-white font-mono font-bold">612</p>
            <p className="text-white font-mono font-bold">Positve Feedback</p>
          </div>
        </div>

        {/* العمود الرابع */}
        <div className="flex items-center">
          {/* تقسيم العمود إلى عمودين */}
          <div className="w-1/4 flex justify-center">
            <HeartIcon className="h-8 w-8 text-white" /> {/* أيقونة */}
          </div>
          <div className="w-3/4">
            <p className="text-white font-bold font-mono">752</p>
            <p className="text-white font-mono font-bold">Happy Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueSlide;
