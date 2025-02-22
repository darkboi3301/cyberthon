import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap"; // Import gsap for animations
import { useNavigate } from "react-router-dom";

const HeroSectionMobile = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLImageElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const cyberTextRef = useRef<HTMLDivElement | null>(null);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [showRegisterButton, setShowRegisterButton] = useState(false); // State to control register button visibility
  const buttonRef = useRef(null); // Ref for Register Now button
  const nav = useNavigate();

  // Function to update text sizes based on viewport
  const updateTextSizes = () => {
    if (!cyberTextRef.current || !heroTextRef.current) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Further reduced font sizes for CYBERTHON and timer text
    const cyberFontSize = Math.min(vw * 0.1, vh * 0.15);
    const timerFontSize = Math.min(vw * 0.06, vh * 0.07);

    cyberTextRef.current.style.fontSize = `${cyberFontSize}px`;
    heroTextRef.current.style.fontSize = `${timerFontSize}px`;
  };

  useEffect(() => {
    // Initial size update
    updateTextSizes();

    // Add resize listener
    window.addEventListener("resize", updateTextSizes);

    const targetDate = new Date("2025-02-01T10:00:00"); // Target date and time

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0 };
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        return { days, hours, minutes };
      }
    };

    // Timer logic
    const timerInterval = setInterval(() => {
      setTimer(calculateTimeLeft());
    }, 1000);

    const timeline = gsap.timeline();

    // Zoom-in effect on load
    timeline
      .fromTo(
        heroImageRef.current,
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 }
      )
      .fromTo(
        heroTextRef.current,
        { scale: 3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "<"
      )
      .fromTo(
        cyberTextRef.current,
        { scale: 3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "<"
      )
      .addLabel("end")
      .call(() => {
        setShowRegisterButton(true); // Show the button after animation
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        ); // Fade-in and slide-up animation for the button
      });

    return () => {
      window.removeEventListener("resize", updateTextSizes);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div
      ref={heroSectionRef}
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Vertical Spotlight Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 60%)",
          animation: "spotlightMove 5s linear infinite",
          zIndex: 1,
        }}
      ></div>

      {/* Background CYBERTHON text */}
      <div
        ref={cyberTextRef}
        style={{
          position: "absolute",
          top: "17%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          color: "rgba(255, 255, 255, 1)",
          fontWeight: "bold",
          letterSpacing: "0.5rem",
          zIndex: 2,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        CYBERTHON
      </div>

      <img
        ref={heroImageRef}
        src="/hero.svg"
        alt="Hero"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 2,
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Timer */}
      <div
        ref={heroTextRef}
        style={{
          position: "absolute",
          top: "30%", // Adjust top position for mobile view
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 3,
          width: "100%",
          fontFamily: "monospace",
          letterSpacing: "0.2rem",
        }}
      >
        <p>
          {`${timer.days}d:${timer.hours
            .toString()
            .padStart(2, "0")}h:${timer.minutes
            .toString()
            .padStart(2, "0")}m:${(60 - new Date().getSeconds())
            .toString()
            .padStart(2, "0")}s`}
        </p>
      </div>

      {/* Register Button with Animation */}
      {showRegisterButton && (
        <button
          ref={buttonRef}
          className="bg-white text-black font-semibold text-lg rounded-xl shadow-lg flex items-center space-x-4 transform hover:scale-105 hover:bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            position: "absolute",
            bottom: "35%",
            left: "2%",
            padding: "10px 20px",
            zIndex: 4,
          }}
        >
          <span className="text-red-600">Registrations Closed</span>
        </button>
      )}

      {/* Additional Info */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "1%",
          padding: "10px 20px",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          zIndex: 4,
        }}
      >
        <h1 className="text-3xl">
          Feb 01 <br /> & 02
        </h1>
        <p>
          A high-stakes arena where <br /> top minds tackle real-world <br />{" "}
          problems.
        </p>
      </div>
    </div>
  );
};

export default HeroSectionMobile;
