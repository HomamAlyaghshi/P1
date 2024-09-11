import React from "react";
import Header from "../comp/Header";
import InputForm from "../comp/inputForm";
import Footer from "../comp/Footer";
import Map from "../comp/Map";
const Contact = () => {
  return (
    <>
      <Header />
      <div className="h-screen grid grid-rows-2 pt-3 bg-gray-100 ">
        {/* القسم العلوي */}
        <div className="flex-1  grid grid-cols-2  ">
          <div className=" flex justify-start items-start p-20 flex-col  ">
            <p className=" text-3xl pb-5 font-bold  ">Contact Info:</p>
            <p className="text-zinc-500 font-sans">
              To give beginning divide, cattle. Give moving
            </p>
            <p className="text-zinc-500 font-sans">
              won't, there the abundantly she'd brought air
            </p>
            <p className="text-zinc-500 font-sans">
              upon. Light hath subdue. Life days creature upon
            </p>
            <p className="text-zinc-500 font-sans">
              first heaven gathering dry
            </p>

            <div className=" flex flex-row mt-2 ">
              <div className=" flex flex-col mr-2">
                <label className="font-bold ">Address:</label>
                <label className="font-bold ">Phone:</label>
                <label className="font-bold ">Email:</label>
                <label className="font-bold ">Fax:</label>
              </div>

              <div className=" flex flex-col w-full ">
                <label className="text-zinc-500">
                  10111 Santa Monica Boulevard, LA
                </label>
                <label className="text-zinc-500">+44 987 065 908</label>
                <label className="text-zinc-500">info@Eample.com</label>
                <label className="text-zinc-500">+44 987 065 908</label>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center ">
            <InputForm />
          </div>
        </div>

        {/* القسم السفلي */}
        <div className=" flex justify-center items-center mt-60 ">
          <Map></Map>
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
