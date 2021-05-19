import React from "react";
import { Navbar, Header, Portals, Footer } from "./";
import "../assets/styles/App.css";
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */

import { useIsAuthenticated } from "@azure/msal-react";

const Home = (props) => {
  // const history = useHistory();

  // const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // useEffect(() => {
  //   console.log(`AUTH LOG = ${isAuthenticated}`);
  //   if (!isAuthenticated) history.push("/login");
  // }, [isAuthenticated]);

  console.log(`AUTH LOG = ${isAuthenticated}`);
  console.log("change", props.loggedInViaInput);
  console.log("props", props);
  if (!isAuthenticated && !props.loggedInViaInput) {
    return <Redirect to={{ pathname: "/login" }} />;
  }
  return (
    (isAuthenticated || props.loggedInViaInput) && (
      <div>
        <Header />
        <Navbar />
        <Portals />
        <Footer />
      </div>
    )
  );
};

export default Home;
