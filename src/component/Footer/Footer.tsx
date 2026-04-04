import { TfiInstagram, TfiGithub, TfiLinkedin, TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <TfiLinkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/akshat-sd1/", label: "LinkedIn" },
    { icon: <TfiGithub className="h-5 w-5" />, url: "https://github.com/akshatchawla1997", label: "GitHub" },
    { icon: <TfiInstagram className="h-5 w-5" />, url: "https://www.instagram.com/akichawla1997/", label: "Instagram" },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/Work", label: "Experience" },
    { path: "/Resume", label: "Resume" },
    { path: "/Contact", label: "Contact" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Akshat Chawla</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Systems Engineer & Full Stack Developer
              </p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Building automated systems and intelligent applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Expertise</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Frontend (React, Next.js)</li>
              <li>Backend (Node.js, FastAPI, Django)</li>
              <li>AI/ML & Automation</li>
              <li>Cloud (AWS, GCP, DigitalOcean)</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:akshatchawla1997@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
              >
                <TfiEmail className="h-4 w-4" />
                Email
              </a>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-12 border-t border-slate-200 dark:border-slate-800" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} Akshat Chawla. All rights reserved.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Designed & Built with <span className="text-red-500">❤</span> using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
