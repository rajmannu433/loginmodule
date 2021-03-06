import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "../assets/styles/Login.css";
import ABILogo from "../assets/images/abi_logo.png";
import ACOELogo from "../assets/images/acoe_logo.png";
import { Button } from "react-bootstrap";

import { loginRequest } from "../authConfig";

import { useMsal, useIsAuthenticated } from "@azure/msal-react";
function useFormInputs(initialInput) {
  const [value, setValue] = useState(initialInput);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}
const Login = (props) => {
  // const history = useHistory();
  const { instance } = useMsal();

  const isAuthenticated = useIsAuthenticated();
  const username = useFormInputs("");
  const password = useFormInputs("");
  const [error, setError] = useState("");
  const [iserror, setisError] = useState(false);

  // useEffect(() => {
  //   console.log(`AUTH LOG = ${isAuthenticated}`);
  //   if (isAuthenticated) history.push("/");
  // }, [isAuthenticated]);
  console.log(`AUTH LOG = ${isAuthenticated}`);
  console.log("change", props.loggedInViaInput);

  const onSubmit = () => {
    const isValid = validationcheck();
    if (isValid) {
      let requiredata = {
        username_value: document.getElementById("fresh-User_name").value,
        password_value: document.getElementById("fresh-password").value,
      };
      console.log(requiredata);

      axios.post("http://localhost:9000/api/login", requiredata).then((res) => {
        console.log(res.data);

        props.loggedInViaInputFn(true);
      });
    } else {
      return;
    }
  };

  const validationcheck = () => {
    let username_error = "";
    let password_error = "";

    if (!username.value) {
      username_error = "Please enter username";
      console.log(username_error);
      setError(username_error);
      setisError(true);
    }

    if (!password.value) {
      password_error = "Please enter password";
      console.log(password_error);
      if ({ error } === "") {
        setError(password_error);
        setisError(true);
      }
    }

    if (username_error || password_error) {
      return false;
    } else {
      return true;
    }
  };
  if (isAuthenticated || props.loggedInViaInput) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    !isAuthenticated &&
    !props.loggedInViaInput && (
      <div className="container" style={{ marginTop: 10 }}>
        <img
          src={ABILogo}
          className="h-6"
          alt="AB InBev Logo"
          style={{ paddingRight: "30px" }}
        />
        <img
          src={ACOELogo}
          className="h-9"
          alt="ACOE Logo"
          style={{
            borderLeft: "1px solid #c9c9c9",
            paddingLeft: "60px",
          }}
        />
        <div className="row" style={{ marginTop: 40 }}>
          <div className="col-6">
            <form className="card">
              <div className="card-body p-4">
                <div className="text-center mb-6">
                  <h3>Login</h3>
                </div>
                <div className="card-title text-center">
                  {iserror && (
                    <div className="alert alert-warning" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="mb-3">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      onChange={username.onChange}
                      className="form-control"
                      id="fresh-User_name"
                    />
                  </div>
                  <div className="mb-3 ">
                    <label
                      className="form-label"
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="fresh-password"
                      onChange={password.onChange}
                    />
                  </div>
                </div>
                <div className="form-footer">
                  <Button
                    className="btn btn-abi-custom btn-block"
                    onClick={() => onSubmit()}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-1">
            <h3
              style={{
                height: "100%",
                textAlign: "center",
                padding: "140px 0",
                color: "gray",
              }}
            >
              OR
            </h3>
          </div>
          <div className="col-5" style={{ top: 70 }}>
            <form className="card">
              <div className="card-body p-4">
                <div className="text-center mb-6">
                  <h3>SSO Login</h3>
                </div>
                <div className="card-title text-center">
                  <p style={{ fontSize: "15px" }}>
                    Please use your <strong>AB InBev ID</strong> to login
                  </p>
                </div>

                <div className="form-footer">
                  {/* try using redirect if popup doesn't work */}
                  <Button
                    className="btn btn-abi-custom btn-block"
                    onClick={() =>
                      instance
                        .loginPopup(loginRequest)
                        .catch((e) => console.log(e))
                    }
                  >
                    Login using SSO
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
