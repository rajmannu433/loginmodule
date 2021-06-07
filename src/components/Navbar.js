import React from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";

const Navbar = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light theme-col">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="wht-txt"
          style={{ width: "20%", textAlign: "center", marginRight: 20 }}
        >
          <h5 style={{ fontSize: 15 }}> DASHBOARD </h5>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div className="container dummy-component" style={{ width: "8vw" }}>
            Dummy
          </div>
          <div className="container dummy-component" style={{ width: "8vw" }}>
            Dummy
          </div>
          <div className="container dummy-component" style={{ width: "8vw" }}>
            Dummy
          </div>
          <div className="container dummy-component" style={{ width: "8vw" }}>
            Dummy
          </div>
        </div>
        {/* {isAuthenticated && (
          <div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
