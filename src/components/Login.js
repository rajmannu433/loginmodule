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
    }

    if (!password.value) {
      password_error = "Please enter password";
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
      <div className="container" style={{ marginTop: 30 }}>
        <img
          src={ABILogo}
          className="h-6"
          alt="AB InBev Logo"
          style={{ paddingRight: "10px" }}
        />
        <img
          src={ACOELogo}
          className="h-9"
          alt="ACOE Logo"
          style={{
            borderLeft: "1px solid #c9c9c9",
            paddingLeft: "14px",
          }}
        />
        <div className="row" style={{ marginTop: 120 }}>
          <div className="col-7">
            <form className="card">
              <div className="card-body p-4">
                <div className="text-center mb-6">
                  <h3>Login</h3>
                </div>
                <div className="card-title text-center">
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">User Name</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        onChange={username.onChange}
                        className="form-control"
                        id="fresh-User_name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        id="fresh-password"
                        onChange={password.onChange}
                      />
                    </div>
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
          <div className="col-5">
            <form className="card">
              <div className="card-body p-4">
                <div className="text-center mb-6">
                  <h3>SSO Login</h3>
                </div>
                <div className="card-title text-center">
                  <p>
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
