import { Link, useLocation } from "react-router-dom";

function NavigationLinks({ closeMobileMenu }: any) {
  const location = useLocation();

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/About", text: "About" },
    { path: "/Work", text: "Experience" },
    { path: "/Resume", text: "Resume" },
    { path: "/Contact", text: "Contact" },
  ];

  const handleClick = () => {
    closeMobileMenu();
    window.scrollTo(0, 0);
  };

  return (
    <nav className="flex flex-col lg:flex-row gap-1 lg:gap-6 lg:items-center">
      {navLinks.map((link, index) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={index}
            to={link.path}
            onClick={handleClick}
            className={`relative text-base lg:text-sm px-3 py-2 rounded-md transition-all duration-300 flex lg:inline-flex whitespace-nowrap ${
              isActive 
                ? "text-emerald-500 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10" 
                : "text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
            }`}
          >
            {link.text}
            {isActive && (
              <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavigationLinks;
