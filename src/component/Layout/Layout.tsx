
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import WhatsAppButton from './WhatsAppButton';
import ChatBot from './ChatBot';

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700 shadow-xl backdrop-blur-xl bg-white dark:bg-slate-950/95 transition-colors duration-200 max-h-[80px] overflow-hidden sm:max-h-[90px]">
        <Header />
      </div>
      <main className="flex-grow text-textColor pt-24 sm:pt-28 md:pt-32 dark:text-slate-100 px-4 sm:px-6 md:px-8 lg:px-12">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Layout;
