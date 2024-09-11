import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const GridPic = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full h-full p-4">
      {/* The photos */}
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="relative aspect-square group">
          <img
            src={`/images/q${(index % 6) + 1}.PNG`} // Cycle through images 1 to 6
            alt={`صورة ${index + 1}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
            <EyeIcon className="h-8 w-8 text-white" /> {/* أيقونة العين */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridPic;
