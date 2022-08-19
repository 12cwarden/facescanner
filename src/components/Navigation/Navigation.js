import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 50,
        }}
      >
        <p
          onClick={() => onRouteChange("signout")}
          className="f5 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 50,
          }}
        >
          <p
            onClick={() => onRouteChange("signin")}
            className="f5 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f5 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
