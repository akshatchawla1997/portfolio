import React from "react";

const VennDiagram = () => {
  return (
    <>
      <div className="" id="homeAbout">
        <h2 className="text-4xl ">About Me</h2>
        <div className="flex justify-between">
          <div>
            <svg width="600" height="600" viewBox="0 0 600 600">
              <circle cx="200" cy="200" r="150" fill="rgba(255, 0, 0, 0.5)" />
              <circle cx="400" cy="200" r="150" fill="rgba(0, 255, 0, 0.5)" />
              <circle cx="390" cy="450" r="150" fill="rgba(0, 0, 255, 0.5)" />
              <circle cx="200" cy="390" r="150" fill="rgba(255, 255, 0, 0.5)" />

              <text
                x="200"
                y="200"
                fontSize="20"
                fill="white"
                textAnchor="middle"
                dy=".3em"
              >
                Frontend Development
              </text>
              <text
                x="400"
                y="200"
                fontSize="20"
                fill="white"
                textAnchor="middle"
                dy=".3em"
              >
                AI
              </text>
              <text
                x="390"
                y="450"
                fontSize="20"
                fill="white"
                textAnchor="middle"
                dy=".3em"
              >
                Backend Developer
              </text>
              <text
                x="200"
                y="390"
                fontSize="20"
                fill="white"
                textAnchor="middle"
                dy=".3em"
              >
                AI
              </text>
            </svg>
          </div>
          <div className="text-2xl pt-20">
            <p>
              I'm a web Developer with more than 7 years of professional
              experience. If you're looking for "Full Stack Development", you'd
              better change direction! In my works I always try to combine
              aesthetic with functional aspects, looking for the right balance
              to communicate without annoying. What makes a great website?
              Here's my opinion: a successful website should be attractive but
              easy to read. A fascinating message, together with an immediate
              understanding. Original content and easily traceable information:
              that's my recipe!{" "}
              <span className="text-blue-400 cursor-pointer">Read More...</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VennDiagram;
