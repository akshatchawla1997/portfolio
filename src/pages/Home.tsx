import { motion } from "framer-motion";
import profileImg from "../assets/Profile/profile.png";
import { HiOutlineMinus } from "react-icons/hi";
import { Resume } from "../component/ResumeButton/ResumeButton";
import { Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import TechStack from "../component/carousel/Techstack";
import SkillsBarChart from '../component/carousel/SkillsBarChart'
// import Blogs from '../component/carousel/Blogs'
import VennDiagram from '../component/carousel/VennDiagram'
import CircularButtons from '../component/carousel/CircularButtons' 
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

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

  const imgVariants = {
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="w-full md:w-1/2 lg:w-[30rem] text-center"
          variants={textVariants}
        >
          <div className="text-lg font-bold text-left mb-4 flex">
            <div className="flex items-center -space-x-1.5">
              <span>
                <HiOutlineMinus />
              </span>
              <span>
                <HiOutlineMinus />
              </span>
            </div>
            <span className="ml-3">Hello</span>
          </div>
          <div className="text-left">
            <p>
              <Slide>
                <h1 className="font-bold text-3xl">Akshat Chawla</h1>
              </Slide>
              Systems engineer building automated web applications with frontend,
              backend, AI, and cloud solutions.
              <span className="font-semibold text-blue-500">
                {" "}
                <Typewriter
                  loop={true}
                  words={[
                    "React & Next.js Applications",
                    "AI Model Training",
                    "Orchestration Development",
                    "Node.js & FastAPI",
                    "Django Systems",
                    "AWS, GCP, DigitalOcean",
                    "Image Classification",
                  ]}
                />{" "}
              </span>
              based in Dehradun, Uttarakhand.
            </p>
            <div>
              <Resume />
            </div>
          </div>
        </motion.div>
        <motion.img
          src={profileImg}
          alt=""
          className="md:w-1/2 w-[20rem] lg:w-[36rem] lg:h-[36rem] rounded-b-full mt-4"
          variants={imgVariants}
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <CircularButtons />
      </motion.section>
      <motion.section
        className="py-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <VennDiagram />
      </motion.section>
      <motion.section
        className="pb-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <TechStack />
      </motion.section>
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="font-semibold text-2xl py-10">My Skills</h2>
        <SkillsBarChart />
      </motion.section>
    </motion.main>
  );
};

export default Home;
