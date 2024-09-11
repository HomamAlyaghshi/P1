import React from "react";
const InputForm = () => {
  return (
    <form className="w-full ">
      <div>
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1  gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2 mr-3 ">
              <div class="mt-2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  autocomplete="given-name"
                  class="block w-full  py-1.5 pl-3   text-gray-900 "
                />
              </div>
            </div>

            <div class="sm:col-span-2   ">
              <div class="mt-2">
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full  py-1.5 pl-3  text-gray-900  "
                />
              </div>
            </div>

            <div class="sm:col-span-4 w-full">
              <div class="mt-2 ">
                <input
                  placeholder="Title"
                  id="title"
                  name="title"
                  type="title"
                  autocomplete="title"
                  class="block w-full  py-1.5 pl-3  text-gray-900 "
                />
              </div>
            </div>

            <div class="sm:col-span-4 w-full">
              <div class="mt-2 ">
                <textarea
                  placeholder="Your Comment"
                  id="comment"
                  name="comment"
                  type="comment"
                  autocomplete="comment"
                  class="block w-full  py-1.5 pl-3  text-gray-900 "
                />
              </div>
              <button className="mt-8 bg-cyan-500 p-3 text-white font-mono">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
