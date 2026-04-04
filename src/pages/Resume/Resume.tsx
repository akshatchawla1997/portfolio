import { motion } from "framer-motion";
import experience from "./experience.json"
import education from "./education.json"

export default function Resume() {
  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const educationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-0 max-w-7xl mx-auto bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      <section className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
        <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-semibold">
          Resume
        </h2>
      </section>
      <section className="flex flex-col gap-8 mt-8 md:mt-12">
        <div className="space-y-8">
          <motion.div
            className="w-full space-y-6 sm:space-y-7"
            initial="hidden"
            animate="visible"
            variants={experienceVariants}
          >
            <h3 className="text-slate-900 dark:text-white text-left text-xl sm:text-2xl font-bold p-4 sm:p-5">Experience</h3>
            {experience.map((exp, index) => {
              return (
                <div className="" key={index}>
                  <div className="px-5 py-3 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 rounded-lg transition-transform duration-300 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-800 hover:cursor-pointer hover:shadow-xl hover:transform hover:translate-x-2">
                    <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start">
                      <div>
                        <p className="text-xl font-semibold">{exp.company_name}</p>
                        <p>{exp.job_title}</p>
                      </div>
                      <div className="flex items-center justify-start gap-3 lg:justify-end">
                        <span className="text-sm text-slate-600 dark:text-slate-400">{exp.date}</span>
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-950">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-slate-700 dark:text-slate-300"><span className="font-semibold">Tech Stack :-</span> {exp.tech_stack}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            className="w-full space-y-7"
            initial="hidden"
            animate="visible"
            variants={educationVariants}
          >
            <div className="">
              <h3 className="text-slate-900 dark:text-white text-left text-2xl font-bold p-5">Education </h3>
              {education.map((edu, index) => {
                return (
                  <div key={index} className="px-5 py-3 mb-5 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 rounded-lg transition-transform duration-300 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-800 hover:cursor-pointer hover:shadow-xl hover:transform hover:translate-x-2">
                    <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                      <div className="flex items-start gap-4">
                        <div className="pr-4">
                          <img src={edu.logo} className="h-16 w-32" alt="" />
                        </div>
                        <div>
                          <p className="text-xl font-semibold">{edu.degree}</p>
                          <p>{edu.college}</p>
                          <p>{edu.cgpa}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm text-slate-600 dark:text-slate-400">{edu.date}</span>
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-950">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
      {/* <section>
        <p className="text-darkHeadingColor text-center text-2xl font-bold p-5">
          Certifications
        </p>
        <div className="flex flex-wrap justify-between flex-grow">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="w-[24rem] py-4"
            >
              <motion.div
                className="rounded-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.1)",
                }}
              >
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="max-w-full"
                  />
                  <p className="p-2 text-darkHeadingColor font-medium text-center">
                    {certification.title}
                  </p>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
