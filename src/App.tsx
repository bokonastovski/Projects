// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import PlanetEarthPage from "./pages/PlanetEarthPage";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import WhyBlackPage from "./pages/WhyBlackPage";
import AboutPage from "./pages/AboutPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import MembershipPage from "./pages/MembershipPage";
import ContactPage from "./pages/ContactPage";
import Explore from "./pages/Explore";
import CoCreatorsPage from "./pages/CoCreatorsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import SpacesWithZeroTolerance from "./pages/SpacesWithZeroTolerance";
import Article from "./pages/Article";
import Podcast from "./pages/Podcast";
import Video from "./pages/Video";
import ScrollToTop from "./components/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();
  const [hasPromotions, setHasPromotions] = useState(false);
  const [promotionMessage, setPromotionMessage] = useState("");

  useEffect(() => {
    setHasPromotions(true);
    setPromotionMessage("Check out our latest promotions!");
  }, []);

  // THIS IS THE LOGIC IN CASE THE CLIENT DOES NOT LIKE HARDCODED MESSAGE, INSTEAD WE CAN FETCH IT FROM AN API.
  // useEffect(() => {
  //   const fetchPromotions = async () => {
  //     try {
  //       const response = await axios.get('/api/promotions/promo1');
  //       if (response.data.hasPromotions) {
  //         setHasPromotions(true);
  //         setPromotionMessage(response.data.message);
  //       } else {
  //         setHasPromotions(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching promotions", error);
  //     }
  //   };

  //   fetchPromotions();
  // }, []);
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <Header />
      <ScrollToTop /> 
      {isLandingPage && (
        <Banner isVisible={hasPromotions} message={promotionMessage} />
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/whyBlack",
        element: <WhyBlackPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/howItWorks",
        element: <HowItWorksPage />,
      },
      {
        path: "/membership",
        element: <MembershipPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/topics",
        children: [
          {
            path: "zeroTolerance",
            element: <SpacesWithZeroTolerance />,
          },
        ],
      },
      {
        path: "/content",
        children: [
          {
            path: "article/:slash",
            element: <Article />,
          },
          {
            path: "podcast/:slash",
            element: <Podcast />,
          },
          {
            path: "video/:slash",
            element: <Video />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/planetEarth",
    element: <PlanetEarthPage />,
  },
  {
    path: "/coCreators",
    element: <CoCreatorsPage />,
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
