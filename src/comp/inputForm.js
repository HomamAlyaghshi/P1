import React from "react";

const InputForm = () => {
  return (
    <form className="w-full max-w-4xl mx-auto p-4">
      <div className="border-b border-gray-300 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6">
          {/* Name */}
          <div className="sm:col-span-1">
            <div className="mt-2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full py-2 px-3 border border-gray-300 rounded-md text-gray-900"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-1">
            <div className="mt-2">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full py-2 px-3 border border-gray-300 rounded-md text-gray-900"
              />
            </div>
          </div>

          {/* Title */}
          <div className="col-span-full">
            <div className="mt-2">
              <input
                type="text"
                placeholder="Title"
                id="title"
                name="title"
                autoComplete="title"
                className="block w-full py-2 px-3 border border-gray-300 rounded-md text-gray-900"
              />
            </div>
          </div>

          {/* Comment */}
          <div className="col-span-full">
            <div className="mt-2">
              <textarea
                placeholder="Your Comment"
                id="comment"
                name="comment"
                autoComplete="comment"
                className="block w-full py-2 px-3 border border-gray-300 rounded-md text-gray-900"
                rows="4"
              />
            </div>
            <button className="mt-4 bg-cyan-500 p-3 text-white font-mono rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
