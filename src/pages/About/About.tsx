import { motion } from "framer-motion";
import profile from "../../assets/Profile/about.gif";
import { HiOutlineMinus } from "react-icons/hi";
import { skills } from "./skillData";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.main
      className="relative px-2 sm:px-4 md:px-8 lg:px-0 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* About Section */}
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 py-8 md:py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="w-full md:w-1/2 text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-lg font-bold mb-4 flex items-center gap-2">
            <div className="flex items-center -space-x-1.5">
              <span>
                <HiOutlineMinus />
              </span>
              <span>
                <HiOutlineMinus />
              </span>
            </div>
            <span>About Me</span>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              A dedicated systems engineer with 7+ years of diverse development experience across various technology stacks.
              I specialize in building automated web applications with frontend, backend, AI, and cloud solutions, with a passion for creating seamless and intuitive applications.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Backend Development</h3>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Strong expertise in building scalable and secure RESTful APIs and microservices using Node.js, Express.js, Django, and FastAPI. Proficient with SQL and NoSQL databases including PostgreSQL, MySQL, and MongoDB.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Frontend Development</h3>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Skilled in creating responsive and intuitive user interfaces with React.js, Next.js, and modern CSS frameworks. Experienced with state management, animations, and performance optimization.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI & Cloud Solutions</h3>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Proficient in AI model training, deployment, and orchestration. Experienced with AWS, GCP, and Docker/Kubernetes for building scalable cloud-native applications.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/Contact"
                className="inline-block bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={profile}
            alt="About profile"
            className="w-[20rem] sm:w-[23rem] lg:w-[28rem] h-auto rounded-full shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-16 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="flex items-center -space-x-1.5">
            <span>
              <HiOutlineMinus />
            </span>
            <span>
              <HiOutlineMinus />
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-md hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="text-2xl flex">{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-emerald-500 dark:text-emerald-400">
                  {skill.percentage}%
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(skill.percentage / 100) * 100}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;
