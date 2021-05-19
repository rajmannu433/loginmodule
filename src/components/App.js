import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../authConfig";

import { Login, Home, Footer } from "./";

// import { RoleContextProvider } from "../context/RoleContext";
// import { FormPageContextProvider } from "../context/formPageContext";

import "../assets/styles/App.css";

const Pages = () => {
  const [isLoggedInViaInput, setisLoggedInViaInput] = useState(false);
  const changeLoggedInViaInput = (bool) => {
    setisLoggedInViaInput(bool);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home {...props} loggedInViaInput={isLoggedInViaInput} />;
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return (
            <Login
              {...props}
              loggedInViaInputFn={changeLoggedInViaInput}
              loggedInViaInput={isLoggedInViaInput}
            />
          );
        }}
      />
    </Switch>
  );
};
function App() {
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <MsalProvider instance={msalInstance}>
            {navigator.onLine && <Pages />}
            {/* {!navigator.onLine && <NoInternet />} */}
          </MsalProvider>
        </Router>
      </header>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
