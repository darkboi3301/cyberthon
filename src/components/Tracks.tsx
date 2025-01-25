import React from "react";

const Tracks = () => {
  return (
    <div className="text-black py-8 relative">
      {/* Section Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
        <img src="line.svg" alt="" className="ml-auto" />
        <h2 className="text-6xl text-white md:text-8xl font-bold mb-4 text-right me-5">
          TRACKS
        </h2>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          {
            icon: "s1.svg",
            title: "Web Security",
            description:
              "Build a platform that automates the detection of vulnerabilities in network infrastructures, such as weak protocols, unpatched services, and unauthorized devices, to aid researchers in security assessments.",
            width: 50,
            height: 50,
          },
          {
            icon: "s2.svg",
            title: "App Security",
            description:
              "Design a secure in-app payment system that eliminates data breaches, phishing, and fraud while delivering a seamless and reliable user experience.",
            width: 50,
            height: 50,
          },
          {
            icon: "s3.svg",
            title: "General Security",
            description:
              "Create a platform that scans the dark web for leaked credentials and sensitive organizational data, providing actionable insights to prevent exploitation.",
            width: 50,
            height: 50,
          },
          {
            icon: "s4.svg",
            title: "Web3 & Blockchain",
            description:
              "Develop an automated tool to scan and identify vulnerabilities in smart contracts, such as reentrancy attacks, logic errors, or unauthorized access points, before they are deployed on the blockchain.",
            width: 50,
            height: 50,
          },
          {
            icon: "s5.svg",
            title: "Internet of Things",
            description:
              "Develop a system that identifies IoT devices compromised by botnets and provides a plan for containment and remediation.",
            width: 50,
            height: 50,
          },
          {
            icon: "s6.svg",
            title: "Open Innovation",
            description:
              "Create a platform that facilitates crowdsourced solutions to complex problems by securely connecting innovators, entrepreneurs, and organizations, ensuring collaboration while protecting proprietary knowledge.",
            width: 50,
            height: 50,
          },
        ].map((track, index) => (
          <div
            key={index}
            className="border border-gray-300 aspect-square flex flex-col justify-center items-center p-4 hover:bg-zinc-900 transition duration-300 shadow-lg hover:shadow-xl" // Added shadow classes
          >
            <div className="flex justify-center items-center">
              <div className="rounded-full p-2">
                <img
                  src={`/tracks/${track.icon}`}
                  alt=""
                  width={track.width}
                  height={track.height}
                />
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold my-2 text-white text-center">
              {track.title}
            </h3>
            <p className="text-gray-300 text-center px-2">
              {track.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
