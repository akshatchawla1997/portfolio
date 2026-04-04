import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { projects } from "./workData";
import WorkPopUp from "./WorkPopUp";
import { GiRead } from "react-icons/gi";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  features: string[];
  organisationWorkedWith: string;
  organisationLogo?: string; // Make organisationLogo optional
}

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    // Set a slight delay to simulate loading
    const timer = setTimeout(() => {
      setShowGrid(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const gridVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.6 } },
  };

  return (
    <div className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-8 lg:px-0 bg-white dark:bg-slate-950 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 md:mb-12 text-slate-900 dark:text-slate-100">
        Explore My Portfolio
      </h1>
      {showGrid && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          initial="initial"
          animate="animate"
          variants={gridVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card block rounded-lg overflow-hidden shadow-md dark:shadow-black/20 hover:shadow-lg transition duration-300 relative bg-slate-50 dark:bg-slate-900"
              variants={projectVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover object-center cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#FDF7E4] via-[#EBE3D5] to-transparent text-[#3e4355] p-2">
                  <h2 className="text-lg font-semibold">{project.name}</h2>
                </div>
              </div>
              <div className="p-4">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {`${project.description.slice(0, 150)}`}
                  {project.description.length > 150 ? (
                    <button
                      className="text-emerald-500 dark:text-emerald-400"
                      onClick={() => openModal(project)}
                    >
                      <span className="text-slate-700 dark:text-slate-300 mr-2">...</span>
                      See More
                    </button>
                  ) : (
                    ""
                  )}
                </p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.features &&
                  project.features.length > 0 &&
                  project.features.some(
                    (feature) => feature !== null && feature.trim() !== ""
                  ) && (
                    <div className="relative mt-2">
                      <p className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Features</p>
                      <div className="flex flex-wrap">
                        {project.features.map((feature, tagIndex) => {
                          if (feature !== null && feature.trim() !== "") {
                            return (
                              <span
                                className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                                key={tagIndex}
                              >
                                {feature}
                              </span>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  )}
              </div>
              <div
                className="pt-4 pb-2 px-3 absolute bottom-0 right-0"
                onClick={() => openModal(project)}
              >
                <GiRead className="text-3xl text-slate-900 dark:text-slate-100 hover:scale-110 transform transition-transform duration-300 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {selectedProject && (
        <WorkPopUp selectedProject={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Work;
