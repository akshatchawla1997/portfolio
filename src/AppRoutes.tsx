import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import  Loader from "../src/component/PortfolioLoader/Loader";

const Layout = lazy(() => import("./component/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/ContactForm/Contact"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const Work = lazy(() => import("./pages/Works/Work"));

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        document.title = 'Akshat Chawla Portfolio';
      } else {
        document.title = '😢 Missing You';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.title = 'Akshat Chawla Portfolio';

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader/>}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader/>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<Loader/>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense fallback={<Loader/>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/Resume"
          element={
            <Suspense fallback={<Loader/>}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/Work"
          element={
            <Suspense fallback={<Loader/>}>
              <Work />
            </Suspense>
          }
        />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
