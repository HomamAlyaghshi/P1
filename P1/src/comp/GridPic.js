import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const GridPic = () => {
  return (
    <div className="grid grid-cols-4 gap-0 w-full h-full">
      {/* The photos */}
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q1.PNG"
          alt="صورة 1"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q2.PNG"
          alt="صورة 2"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q3.PNG"
          alt="صورة 3"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q4.PNG"
          alt="صورة 4"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q5.PNG"
          alt="صورة 5"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q6.PNG"
          alt="صورة 6"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q3.PNG"
          alt="صورة 7"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q2.PNG"
          alt="صورة 8"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q1.PNG"
          alt="صورة 9"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q6.PNG"
          alt="صورة 10"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q5.PNG"
          alt="صورة 11"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
      <div className="relative aspect-square w-full h-full group">
        <img
          src="/images/q4.PNG"
          alt="صورة 12"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <EyeIcon className="h-12 w-12 text-white" /> {/* أيقونة العين */}
        </div>{" "}
      </div>
    </div>
  );
};

export default GridPic;
