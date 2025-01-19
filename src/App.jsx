import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBarDesktop";
import AboutUs from "./components/About";
import HeroSectionDesktop from "./components/hero/HeroSectionDesktop";
import HeroSectionMobile from "./components/hero/HeroSectionMobile";
import Tracks from "./components/Tracks";
import Timeline from "./components/TimeLine";
import Sponsors from "./components/Sponsors";
import FooterDesktop from "./components/footer/FooterDesktop";
import FooterMobile from "./components/footer/FooterMobile";
import NavbarMobile from "./components/navbar/NavBarMobile";
import FAQ from "./components/FAQ";
import Scroll from "./components/Scroll";
import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register.tsx";
import ContactUs from "./components/ContactUs.tsx";


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
    <Scroll/>
    <div style={{ backgroundColor: "#000" }}>
      {isMobile ? <NavbarMobile /> :   <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <div
            style={{
              width: "70%",
              height: "2px",
              margin: "0 auto",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.1), #ffffff, rgba(0, 0, 0, 0.1))",
            }}
          ></div>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </div>
    </BrowserRouter>
  );
}

export default App;
