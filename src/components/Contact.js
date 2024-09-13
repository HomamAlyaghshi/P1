import React from "react";
import Header from "../comp/NavBar";
import InputForm from "../comp/inputForm"; // تأكد من اسم الملف صحيح
import Footer from "../comp/Footer";
import Map from "../comp/Map";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-200 p-4 sm:p-6 lg:p-8">
        {/* القسم العلوي */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col justify-center p-4 lg:p-8  ">
            <p className="text-2xl lg:text-3xl font-bold mb-4">Contact Info:</p>
            <p className="text-zinc-500 mb-2">
              To give beginning divide, cattle. Give moving
            </p>
            <p className="text-zinc-500 mb-2">
              won't, there the abundantly she'd brought air
            </p>
            <p className="text-zinc-500 mb-2">
              upon. Light hath subdue. Life days creature upon
            </p>
            <p className="text-zinc-500 mb-4">first heaven gathering dry</p>

            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col mb-4 sm:mb-0">
                <label className="font-bold mb-1">Address:</label>
                <label className="font-bold mb-1">Phone:</label>
                <label className="font-bold mb-1">Email:</label>
                <label className="font-bold">Fax:</label>
              </div>

              <div className="flex flex-col">
                <label className="text-zinc-500 mb-1">
                  10111 Santa Monica Boulevard, LA
                </label>
                <label className="text-zinc-500 mb-1">+44 987 065 908</label>
                <label className="text-zinc-500 mb-1">info@Example.com</label>
                <label className="text-zinc-500">+44 987 065 908</label>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <InputForm />
          </div>
        </div>

        {/* القسم السفلي */}
        <div className="flex justify-center items-center">
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
