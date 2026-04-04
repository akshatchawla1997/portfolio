import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Loader from "../src/component/PortfolioLoader/Loader";
import Seo from "./component/Seo";

const Layout = lazy(() => import("./component/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/ContactForm/Contact"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const Work = lazy(() => import("./pages/Works/Work"));

const defaultTitle = "Akshat Chawla Portfolio";
const routeTitles: Record<string, string> = {
  "/": `Home | ${defaultTitle}`,
  "/About": `About | ${defaultTitle}`,
  "/Contact": `Contact | ${defaultTitle}`,
  "/Resume": `Resume | ${defaultTitle}`,
  "/Work": `Work | ${defaultTitle}`,
};

function AppRoutes() {
  const location = useLocation();
  const [currentTitle, setCurrentTitle] = useState(defaultTitle);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const nextTitle = routeTitles[location.pathname] ?? defaultTitle;
    setCurrentTitle(nextTitle);

    if (document.visibilityState === "visible") {
      document.title = nextTitle;
    }
  }, [location]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.visibilityState === "visible" ? currentTitle : "😢 Missing You";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    handleVisibilityChange();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentTitle]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}> 
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Seo title={routeTitles['/']} />
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<Loader />}>
              <Seo title={routeTitles['/About']} />
              <About />
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense fallback={<Loader />}>
              <Seo title={routeTitles['/Contact']} />
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/Resume"
          element={
            <Suspense fallback={<Loader />}>
              <Seo title={routeTitles['/Resume']} />
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/Work"
          element={
            <Suspense fallback={<Loader />}>
              <Seo title={routeTitles['/Work']} />
              <Work />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
