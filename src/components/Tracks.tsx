import React from 'react';

const Tracks = () => {
  return (
    <div className="text-black py-8 relative">

      {/* Section Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
        <img src="line.svg" alt="" className="ml-auto" />
        <h2 className="text-6xl text-white md:text-8xl font-bold mb-4 text-right me-5">TRACKS</h2>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[ 
          { 
            icon: "s1.svg", 
            title: "Web Security", 
            description: "Protect the web! This track is all about building secure websites and web apps that keep user data safe from modern cyber threats.",
            width: 50, 
            height: 50
          },
          { 
            icon: "s2.svg", 
            title: "App Security", 
            description: "Safeguard the apps we rely on daily. This track focuses on detecting and preventing app-targeted data breaches, malware, and more.",
            width: 50, 
            height: 50 
          },
          { 
            icon: "s3.svg", 
            title: "General Security", 
            description: "Tackle a mix of security issues, from defending networks to countering social engineering, and come up with real-world solutions.",
            width: 50, 
            height: 50 
          },
          { 
            icon: "s4.svg", 
            title: "Web3 & Blockchain", 
            description: "Use blockchain technology to create secure, decentralized applications and explore its full potential.",
            width: 50, 
            height: 50 
          },
          { 
            icon: "s5.svg", 
            title: "Internet of Things", 
            description: "Dive into the world of connected devices! Build solutions that keep IoT networks secure, from smart homes to smart cities.",
            width: 50, 
            height: 50 
          },
          { 
            icon: "s6.svg", 
            title: "Open Innovation", 
            description: "Get a big idea! Choose any area of security that inspires you, and take it in a new direction.",
            width: 50, 
            height: 50 
          }
        ].map((track, index) => (
          <div 
            key={index} 
            className="border border-gray-300 aspect-square flex flex-col justify-center items-center p-4 hover:bg-zinc-900 transition duration-300 shadow-lg hover:shadow-xl" // Added shadow classes
          >
            <div className="flex justify-center items-center">
              <div className="rounded-full p-2">
                <img src={`/tracks/${track.icon}`} alt="" width={track.width} height={track.height} />
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold my-2 text-white text-center">{track.title}</h3>
            <p className="text-gray-600 text-center px-2">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
