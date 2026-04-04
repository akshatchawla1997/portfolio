import { useState, useEffect } from "react";
import { HiMenu, HiX, HiMoon, HiOutlineSun } from "react-icons/hi";
import NavigationLinks from "./NavigationLinks";
export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    const initialTheme = storedTheme === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white dark:bg-slate-950/95">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Hi, I'm</p>
            <p className="text-slate-900 dark:text-white font-semibold">Akshat Chawla</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center flex-1 justify-center">
          <NavigationLinks closeMobileMenu={closeMobileMenu} />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-slate-900/70 p-2 text-slate-900 dark:text-white transition hover:bg-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle light and dark mode"
          >
            {theme === 'dark' ? (
              <HiOutlineSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden block focus:outline-none text-slate-900 dark:text-white"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 px-4 py-2">
          <NavigationLinks closeMobileMenu={closeMobileMenu} />
        </div>
      )}
    </header>
  );
}
