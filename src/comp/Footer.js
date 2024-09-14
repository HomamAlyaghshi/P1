import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-950 text-white p-6 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* العمود الأول */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Piroll Design, inc.</p>
            <p className="text-xs mb-1">@2017 all rights reserved</p>
            <p className="text-xs">Designed by ....</p>
          </div>
          {/* العمود الثاني */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <a
              href="/contact"
              className="font-bold text-sm mb-2 hover:underline"
            >
              Contact
            </a>
            <p className="text-xs mb-1">hello@gmail.com</p>
            <p className="text-xs">+3423432423432</p>
          </div>
          {/* العمود الثالث */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Quick Links</p>
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
          {/* العمود الرابع */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Explore</p>
            <a href="/main" className="text-xs mb-1 hover:underline">
              News
            </a>
            <p className="text-xs mb-1">Events</p>
            <a href="/contact" className="text-xs mb-1 hover:underline">
              Contact
            </a>
            <p className="text-xs">Legals</p>
          </div>
          {/* العمود الخامس */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="font-bold text-sm mb-2">Follow Us</p>
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
      </footer>
    </>
  );
};

export default Footer;
