import React from "react";

const NeedPro = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Need a Project?</h1>
      </div>
      <form className="w-full max-w-4xl ">
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <input
                placeholder="Your Email"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          <div>
            <input
              placeholder="Your Title"
              id="title"
              name="title"
              type="text"
              autoComplete="title"
              className="block w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <textarea
              placeholder="Your Comment"
              id="comment"
              name="comment"
              autoComplete="comment"
              className="block w-full py-2 px-3 h-40  focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-cyan-500 text-white py-2 px-6  font-mono  focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:bg-cyan-600 hover:text-xl hover:text-black transition-all duration-700">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NeedPro;
