import React from "react";

const sponsors = [
  { logo: "yuniq.svg", name: "" },
  { logo: "null.png", name: "" },
  { logo: "disai.png", name: "" },
];

const Sponsors = () => {
  return (
    <div
      className="text-white"
      style={{ textAlign: "center", margin: "2rem 0" }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "2px",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "2px",
              margin: "0 auto",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.1), #ffffff, rgba(0, 0, 0, 0.1))",
            }}
          ></div>
        </div>
        <h2 style={{ fontSize: "2.5rem", margin: "2rem 0" }}>Our Partners</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            overflowX: "auto",
          }}
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: index !== sponsors.length - 1 ? '2rem' : '0', minWidth: '150px',paddingBottom:"2rem", }}>
              <img src={`/sponsors/${sponsor.logo}`} alt={sponsor.name} style={{ maxHeight: '80px', marginRight: '1rem' }} />
              <p style={{ fontSize: '0.875rem' }}>{sponsor.name}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "2px",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "2px",
              margin: "0 auto",
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.1), #ffffff, rgba(0, 0, 0, 0.1))",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
