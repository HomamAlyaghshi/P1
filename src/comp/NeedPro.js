import React from "react";

const NeedPro = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Need a Project?</h1>
      </div>
      <form className="w-full max-w-3xl bg-gray-100 p-8 ">
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full py-2 px-3  "
              />
            </div>

            <div>
              <input
                placeholder="Your Email"
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full py-2 px-3 "
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
              className="block w-full py-2 px-3 "
            />
          </div>

          <div>
            <textarea
              placeholder="Your Comment"
              id="comment"
              name="comment"
              autoComplete="comment"
              className="block w-full py-2 px-3 "
            />
          </div>

          <button className="bg-cyan-500 p-3 text-white w-1/3  font-mono ml-60">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default NeedPro;
