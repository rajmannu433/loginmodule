import React, { Component } from "react";
import { complaintImg, orderPortalImg } from "../helpers/imageURL";

class Portals extends Component {
  render() {
    return (
      <div className="container">
        <div className="row port-row">
          <div className="col-sm-6" style={{ marginLeft: 0 }}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={orderPortalImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 12 }}>
                  Order Portal
                </h5>
                <p className="card-text" style={{ fontSize: 10 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary wht-txt"
                  style={{ backgroundColor: "#b11f24", fontSize: 12 }}
                >
                  Orders Portal
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{ width: "18rem" }}>
              <img src={complaintImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 12 }}>
                  Customer Complaints Portal
                </h5>
                <p className="card-text" style={{ fontSize: 10 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary wht-txt"
                  style={{ backgroundColor: "#b11f24", fontSize: 12 }}
                >
                  Customer Complaints Portal
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row port-row">
          <div className="col-sm-6">
            <div className="card" style={{ width: "18rem" }}>
              <img src={orderPortalImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 12 }}>
                  Order Portal
                </h5>
                <p className="card-text" style={{ fontSize: 10 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary wht-txt"
                  style={{ backgroundColor: "#b11f24", fontSize: 12 }}
                >
                  Orders Portal
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{ width: "18rem" }}>
              <img src={complaintImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 12 }}>
                  Customer Complaints Portal
                </h5>
                <p className="card-text" style={{ fontSize: 10 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="btn btn-primary wht-txt"
                  style={{ backgroundColor: "#b11f24", fontSize: 12 }}
                >
                  Customer Complaints Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portals;
