import React, { useState } from "react";
import Header from "../comp/Header";
import { FiGrid } from "react-icons/fi";
import Footer from "../comp/Footer";

const projects = [
  {
    id: 1,
    image: "/images/12.jpg",
    title: "Project 1",
    description: "Description for project 1.",
    client: "Emma Morris",
    date: "25.06.2017",
  },
  {
    id: 2,
    image: "/images/10.jpg",
    title: "Project 2",
    description: "Description for project 2.",
    client: "John Doe",
    date: "15.08.2018",
  },
  {
    id: 3,
    image: "/images/11.jpg",
    title: "Project 3",
    description: "Description for project 3.",
    client: "Jane Smith",
    date: "10.12.2019",
  },
];

const ProjectSingle = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div>
      <Header />
      <div className="bg-gray-200 min-h-screen">
        {/* السطر الأول: عمودين */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-8">
          <div className="flex flex-col justify-start p-4 lg:p-8 bg-white shadow-md rounded-lg">
            <p className="text-2xl lg:text-3xl font-bold mb-4">
              {currentProject.title}
            </p>
            <p className="text-zinc-500 mb-2">{currentProject.description}</p>
            <p className="text-zinc-500 mt-6 mb-2">
              Cattle. Dominion day herb she'd creeping divide darkness.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col mb-4 sm:mb-0">
                <label className=" mb-1">
                  <strong>Client: </strong>
                  {currentProject.client}
                </label>
                <label className=" mb-1">
                  {" "}
                  <strong>Date:</strong> {currentProject.date}
                </label>
                <label className=" mb-1">
                  <strong>Share:</strong> Facebook, Twitter, Pinterest
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* السطر الثاني */}
        <div className="bg-white p-4 lg:p-6 text-black flex justify-between items-center shadow-md">
          <button
            onClick={goToPreviousProject}
            className="font-mono font-bold  hover:underline hover:text-cyan-400"
          >
            &lt; PREVIOUS PROJECT
          </button>
          <span className="text-xl font-bold ">
            <FiGrid size={24} />
          </span>
          <button
            onClick={goToNextProject}
            className="font-mono font-bold  hover:underline hover:text-cyan-400"
          >
            NEXT PROJECT &gt;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectSingle;
