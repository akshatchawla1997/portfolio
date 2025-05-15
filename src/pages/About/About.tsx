import { motion } from "framer-motion";
import profile from "../../assets/Profile/about.gif";
import { HiOutlineMinus } from "react-icons/hi";
import { skills } from "./skillData";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  // Animations
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="mt-[4rem] relative">
      <div className="flex flex-col sm:flex-row items-center">
        <motion.div
          className="w-full sm:w-1/2 flex justify-center animate-bounce-left"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={profile}
            alt="Your Photo"
            className="max-w-full h-auto rounded-full w-[23rem] align-top"
          />
        </motion.div>
        <motion.div
          className="w-full sm:w-1/2 mt-4 sm:mt-0 flex justify-center lg:justify-start animate-right-appear"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="p-4">
            <div className="flex gap-x-2 text-4xl font-bold">
              <span className="flex -space-x-3">
                <span>
                  <HiOutlineMinus />
                </span>
                <span>
                  <HiOutlineMinus />
                </span>
              </span>
              <h1 className="text-darkHeadingColor mb-4">About Me</h1>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              A dedicated software engineer with 5+ years of diverse development experience across various technology stacks.
              I specialize in both frontend and backend development, with application development and integrated and trained AI
              model like chatbots and other services, with a passion for creating seamless and intuitive web applications.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 p-4 max-w-3xl mx-auto">
        <h3 className="py-10 text-xl font-bold">Backend Development:</h3>
        <p className="pl-5 leading-relaxed">
          With a strong background in backend development, I excel at building scalable and secure RESTful APIs 
          and microservices. I am proficient in Node.js and Express.js and have extensive experience working with SQL and NoSQL 
          databases, particularly PostgreSQL and MySql.
        </p>
        <h3 className="py-10 text-xl font-bold">Frontend Development:</h3>
        <p className="pl-5 leading-relaxed">
          I am also skilled in frontend development, with expertise in HTML, CSS, and JavaScript frameworks such as 
          React.js. I have a keen eye for design and usability, and I am dedicated to creating intuitive and engaging user 
          interfaces.
        </p>
        <h3 className="py-10 text-xl font-bold">Cloud Deployment:</h3>
        <p className="pl-5 leading-relaxed">
          I have experience deploying applications on cloud platforms like AWS, ensuring high availability and scalability. 
          I am proficient in setting up and managing AWS services like EC2, S3, and RDS, and I am committed to optimizing 
          performance and reducing latency.
        </p>
        <h3 className="py-10 text-xl font-bold">What I Bring to the Table:</h3>
        <ol className="list-decimal pl-8 leading-relaxed">
          <li>Creative problem solver with a passion for innovation.</li>
          <li>Ability to work effectively in both independent and team environments.</li>
          <li>Commitment to writing clean, efficient, and maintainable code.</li>
          <li>Dedication to staying up-to-date with the latest technologies and best practices.</li>
        </ol>
        <i className="py-5 block leading-relaxed">
          I am always eager to take on new challenges and learn new technologies to expand my skill set and deliver exceptional results.
        </i>
        <div className="mt-3">
          <Link
            to="/Contact"
            className="bg-emerald-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-sm shadow-lg animate-[wiggle_1s_ease-in-out_infinite]"
          >
            Hire me
          </Link>
        </div>
      </div>

      <div className="flex justify-start lg:justify-center mt-8">
        <div className="font-bold text-2xl flex items-center lg:transform lg:-rotate-90 lg:-ml-9">
          <div className="flex gap-x-2 justify-start">
            <span className="flex items-center -space-x-1.5">
              <span>
                <HiOutlineMinus />
              </span>
              <span>
                <HiOutlineMinus />
              </span>
            </span>
            <p className="ml-2">My Skills</p>
          </div>
        </div>
      </div>
      <div className="mt-[1rem] lg:px-20 grid sm:grid-cols-2 gap-x-20">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="text-left font-semibold flex items-center gap-2 p-2">
              <span className="text-[1.6rem] flex">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
            <div className="h-2 bg-gray-300 rounded-full">
              <motion.div
                className="h-full bg-[#3e4455] rounded-full"
                style={{
                  width: `${(skill.percentage / 100) * 100}%`,
                  animation: "fillAnimation 1s ease-in-out forwards",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${(skill.percentage / 100) * 100}%` }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-end">
        <Link
          to="/Work"
          className="lg:hidden bg-darkHeadingColor text-white font-bold py-2 px-4 rounded-sm shadow-lg"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default About;
