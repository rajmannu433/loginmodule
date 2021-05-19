import React, { useState, useEffect } from "react";
import Logo from "../images/ab inbev.png";
import { useMsal } from "@azure/msal-react";
// const { accounts } = useMsal();
//   const [name, changeName] = useState(accounts[0].name);
//   const [email, changeEmail] = useState(accounts[0].username);
const Header = () => {
  // const isAuthenticated = useIsAuthenticated();
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const { accounts } = useMsal();
  useEffect(() => {
    if (accounts.length !== 0) {
      changeName(accounts[0].name);
      changeEmail(accounts[0].username);
    } else {
      changeName("");
      changeEmail("");
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={Logo}
            alt="logo"
            className="header-logo"
            style={style.image}
          />
        </div>
        <div className="col-md-4 offset-md-4">
          <div className="row" style={{ marginTop: 10 }}>
            <div className="col-sm-2" style={{ marginBottom: 5 }}>
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp"
              />
            </div>
            <div className="col-sm-8">
              <div style={{ fontSize: 10 }}>{name}</div>
              <div style={{ fontSize: 10 }}>{email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  image: {
    marginTop: 10,
    height: "60%",
    width: 150,
  },
};
export default Header;
