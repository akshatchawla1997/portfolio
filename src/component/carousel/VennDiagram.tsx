import React from "react";
import { Link } from "react-router-dom";

const VennDiagram = () => {
  return (
    <div id="homeAbout" className="rounded-3xl bg-slate-950/5 p-8 shadow-sm">
      <h2 className="text-4xl font-bold mb-10 dark:text-slate-100">About Me</h2>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="max-w-full lg:max-w-[560px]">
          <svg width="520" height="520" viewBox="0 0 520 520">
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.25" />
              </filter>
            </defs>
            <circle cx="160" cy="160" r="120" fill="#38bdf8" fillOpacity="0.55" filter="url(#shadow)" />
            <circle cx="360" cy="160" r="120" fill="#22c55e" fillOpacity="0.55" filter="url(#shadow)" />
            <circle cx="360" cy="360" r="120" fill="#f59e0b" fillOpacity="0.55" filter="url(#shadow)" />
            <circle cx="160" cy="360" r="120" fill="#a855f7" fillOpacity="0.55" filter="url(#shadow)" />

            <text x="160" y="125" fontSize="18" fill="#030712" fontWeight="700" textAnchor="middle">
              Frontend
            </text>
            <text x="160" y="145" fontSize="12" fill="#030712" textAnchor="middle">
              React / Next.js
            </text>

            <text x="360" y="125" fontSize="18" fill="#030712" fontWeight="700" textAnchor="middle">
              Backend
            </text>
            <text x="360" y="145" fontSize="12" fill="#030712" textAnchor="middle">
              Node.js / FastAPI / Django
            </text>

            <text x="360" y="395" fontSize="18" fill="#030712" fontWeight="700" textAnchor="middle">
              AI & Automation
            </text>
            <text x="360" y="415" fontSize="12" fill="#030712" textAnchor="middle">
              Training / Classification
            </text>

            <text x="160" y="395" fontSize="18" fill="#030712" fontWeight="700" textAnchor="middle">
              Cloud
            </text>
            <text x="160" y="415" fontSize="12" fill="#030712" textAnchor="middle">
              AWS / GCP / DigitalOcean
            </text>

            <text x="260" y="260" fontSize="20" fill="#ffffff" fontWeight="700" textAnchor="middle">
              Full Stack AI Systems
            </text>
            <text x="260" y="285" fontSize="12" fill="#ffffff" textAnchor="middle">
              Automated, scalable solutions
            </text>
          </svg>
        </div>

        <div className="max-w-xl text-base leading-8 text-slate-700 dark:text-slate-100">
          <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
            I build systems and automated applications with frontend, backend,
            AI, and cloud engineering at the center.
          </p>
          <p className="mb-4 dark:text-slate-100">
            With 7+ years of experience, I develop React and Next.js applications,
            train AI models, design orchestration workflows, and build APIs using
            Node.js, FastAPI, and Django.
          </p>
          <p className="mb-4 dark:text-slate-100">
            I deploy reliable solutions on AWS, DigitalOcean, and GCP, with a focus
            on image classification, automation, and scalable systems.
          </p>
          <p className="dark:text-slate-100">
            My goal is to create user-friendly, performant products that deliver
            real value while keeping architecture maintainable and efficient.
          </p>
          <p className="mt-4">
            <Link
              to="/About"
              className="text-blue-400 font-semibold hover:text-blue-300"
            >
              Read More...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
