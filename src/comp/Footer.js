import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white p-6 shadow-2xl min-h-32 lg:min-h-[12rem] flex flex-col lg:flex-row lg:items-center">
      <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center lg:items-center">
        {/* القسم الأول */}
        <div className="flex flex-col text-center sm:text-left mb-6 lg:mb-0 lg:mr-28 lg:items-center">
          <p className="font-bold text-sm mb-4">
            <strong>Piroll Design, Inc.</strong>
          </p>
          <p className="text-xs mb-1 text-gray-400">
            &copy; 2017 Piroll. All rights reserved
          </p>
          <p className="text-xs text-gray-400">Designed by ....</p>
        </div>

        {/* القسم الثاني */}
        <div className="flex flex-col text-center sm:text-left mb-6 pb-10 lg:mb-0 lg:ml-14 lg:items-center">
          <p className="text-xs mb-1 text-gray-400">hello@pirolltheme.com</p>
          <p className="text-xs text-gray-400">+34 23432423432</p>
        </div>

        {/* القسم الثالث */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto lg:gap-12 text-gray-400">
          {/* العمود الأول - الروابط */}
          <div className="flex flex-col text-center sm:text-left mb-6 lg:mb-0 lg:items-center">
            <a href="/project-single" className="text-xs mb-1 hover:underline">
              Projects
            </a>
            <a href="/service" className="text-xs mb-1 hover:underline">
              Service
            </a>
            <a href="/about" className="text-xs mb-1 hover:underline">
              About
            </a>
            <p className="text-xs">Career</p>
          </div>
          {/* العمود الثاني */}
          <div className="flex flex-col text-center sm:text-left mb-6 lg:mb-0 lg:items-center">
            <a href="/main" className="text-xs mb-1 hover:underline">
              News
            </a>
            <p className="text-xs mb-1">Events</p>
            <a href="/contact" className="text-xs mb-1 hover:underline">
              Contact
            </a>
            <p className="text-xs">Legals</p>
          </div>
          {/* العمود الثالث */}
          <div className="flex flex-col text-center sm:text-left lg:ml-auto lg:items-center text-gray-400">
            <a
              href="https://www.facebook.com"
              className="text-xs mb-1 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              className="text-xs mb-1 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              className="text-xs mb-1 hover:underline"
            >
              Twitter
            </a>
            <p className="text-xs">Dribbble</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
