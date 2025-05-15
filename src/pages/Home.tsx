import { motion } from "framer-motion";
import profileImg from "../assets/Profile/profile.png";
import SocialMediaIcons from "../component/SocialMediaIcons/SocialMediaIcons";
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
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="flex flex-col-reverse md:flex-row items-center justify-between  gap-20">
        <motion.div
          className="md:w-1/2 lg:w-[30rem] text-center"
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
              5+ years of experience as Web Developer with a specialization in
              <span className="font-semibold text-blue-500">
                {" "}
                <Typewriter
                  loop={true}
                  words={[
                    "MERN Stack Developer ",
                    "Backend Developer",
                    "React.js Developer",
                    "Node.js Developer",
                    "Python Developer",
                    "Django Developer",
                    "AI/ML Developer",
                    "wordpress Developer",
                    "shopify Developer",
                    "mobile app developer",
                  ]}
                />{" "}
              </span>
              , based in Dehradun, Uttarakhand, India. I'm a passionate engineer
              eager to contribute my skills and collaborate with teams around
              the world.
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
      </section>
      <section>
      <CircularButtons />
      </section>
      <section className="py-10">
        <VennDiagram />
      </section>
      <section className="pb-32">
        <TechStack />
      </section>
      {/* <section>
        <Blogs />
      </section> */}
      <section className="py-20">
      <h2 className="font-semibold text-2xl py-10">My Skills</h2>
        <SkillsBarChart />
      </section>
      <section className="absolute bottom-[-4rem] flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center pt-48">
        <motion.div
          className="text-xl mb-[1rem] m-[2rem] lg:mb-[6rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <SocialMediaIcons />
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Home;
