import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face100 from "./face100.png";

const Logo = () => {
  return (
    <div className="ma4 mt0 center">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 125, width: 125 }}
      >
        <div className="Tilt-inner">
          <img
            style={{ paddingTop: 12, paddingLeft: 12 }}
            src={face100}
            alt="main logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
