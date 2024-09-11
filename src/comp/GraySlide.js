import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  DevicePhoneMobileIcon,
  StarIcon,
  CodeBracketIcon,
  PresentationChartLineIcon,
  CursorArrowRaysIcon,
  ArrowUpRightIcon,
  IdentificationIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
const items = [
  {
    icon: IdentificationIcon,
    text: "UI / UX DESIGN",
    subtext: "this is a test paragraph",
  },
  {
    icon: ArrowUpRightIcon,
    text: "WEB DEVELOPMENT",
    subtext: "this is a test paragraph",
  },
  {
    icon: DevicePhoneMobileIcon,
    text: "APP / MOBILE",
    subtext: "this is a test paragraph",
  },
  {
    icon: CodeBracketIcon,
    text: "GAME DESIGN",
    subtext: "this is a test paragraph",
  },
  {
    icon: PresentationChartLineIcon,
    text: "SEO / MARKETING",
    subtext: "this is a test paragraph",
  },
  { icon: StarIcon, text: "PHOTOGRAPHY", subtext: "this is a test paragraph" },
  {
    icon: ComputerDesktopIcon,
    text: "GRAPHIC DESIGN",
    subtext: "this is a test paragraph",
  },
  {
    icon: CursorArrowRaysIcon,
    text: "ILLUSTRATOR",
    subtext: "this is a test paragraph",
  },
];

const GraySlid = () => {
  return (
    <div className="w-full flex flex-wrap justify-center bg-slate-200 p-16">
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="w-1/4 p-4 flex items-center justify-center text-center"
          >
            <div className="flex flex-col items-center ">
              <IconComponent className="w-6 h-6" />
              <p className="mt-2">{item.text}</p>
              <p className="mt-2 text-gray-400">{item.subtext}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GraySlid;
