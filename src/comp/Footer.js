import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-950 text-white p-6 h-72 shadow-2xl">
        <div className="grid grid-cols-5 gap-8 h-full">
          <div className="flex flex-col justify-center">
            <p className="font-bold pb-4">Piroll Design, inc.</p>
            <p>@2017 all right recerved</p>
            <p>Designed By ....</p>
          </div>
          <div className="flex flex-col justify-center ml-32">
            <p className="font-thin">hello@gmail.com</p>
            <p className="font-thin">+3423432423432</p>
          </div>
          <div className="flex flex-col justify-center ml-36">
            <p className="font-thin">Projects</p>
            <p className="font-thin">Service</p>
            <p className="font-thin">About</p>
            <p className="font-thin">Career</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-thin">News</p>
            <p className="font-thin">Events</p>
            <p className="font-thin">Contact</p>
            <p className="font-thin">Legals</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-thin">FaceBook</p>
            <p className="font-thin">Instagram</p>
            <p className="font-thin">Twitter</p>
            <p className="font-thin">Dribbble</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
