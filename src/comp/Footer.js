import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-950 text-white p-6 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* العمود الأول */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Piroll Design, inc.</p>
            <p className="text-xs mb-1">@2017 all rights reserved</p>
            <p className="text-xs">Designed by ....</p>
          </div>
          {/* العمود الثاني */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Contact</p>
            <p className="text-xs mb-1">hello@gmail.com</p>
            <p className="text-xs">+3423432423432</p>
          </div>
          {/* العمود الثالث */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Quick Links</p>
            <p className="text-xs mb-1">Projects</p>
            <p className="text-xs mb-1">Service</p>
            <p className="text-xs mb-1">About</p>
            <p className="text-xs">Career</p>
          </div>
          {/* العمود الرابع */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Explore</p>
            <p className="text-xs mb-1">News</p>
            <p className="text-xs mb-1">Events</p>
            <p className="text-xs mb-1">Contact</p>
            <p className="text-xs">Legals</p>
          </div>
          {/* العمود الخامس */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Follow Us</p>
            <p className="text-xs mb-1">Facebook</p>
            <p className="text-xs mb-1">Instagram</p>
            <p className="text-xs mb-1">Twitter</p>
            <p className="text-xs">Dribbble</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
