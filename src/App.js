import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <section>
        <div className="container py-5">
          <header className="text-center mb-5 text-white">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1>Reactjs Bootstrap 5 Responsive Pricing Cart</h1>
                <p>Reactjs Bootstrap by Ajaas</p>
              </div>
            </div>
          </header>

          <div className="row text-center align-items-end">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bolder mb-4">
                  Free
                </h1>
                <h2 className="h1">
                  $0
                  <span className="span-item text-small font-weight-normal ml-2">
                    / month
                  </span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled ">
                  <li className=" text-unmuted mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Single
                    User
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> 5GB
                    Storage
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className="text-unmuted fa fa-check mr-2 text-primary"></i>{" "}
                    Unlimited Public Projects
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Community
                    Access
                  </li>

                  <li className="text-muted mb-3 ">
                    Unlimited Private Projects
                  </li>
                  <li className="mb-3 text-muted">Dedicated Phone Support</li>
                  <li className="mb-3 text-muted">Free Subdomain</li>
                  <li className="mb-3 text-muted">Monthly Status Reports</li>
                </ul>
                <a
                  href="#"
                  className="btn btn-primary text-uppercase shadow rounded-pill"
                >
                  Subscribe
                </a>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Plus
                </h1>
                <h2 className="h1">
                  $9
                  <span className="span-item text-small font-weight-normal ml-2">
                    / month
                  </span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled ">
                  <li className=" text-unmuted mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i>{" "}
                    <span className="pro-user">5 Users</span>
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> 50GB
                    Storage
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className="text-unmuted fa fa-check mr-2 text-primary"></i>{" "}
                    Unlimited Public Projects
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Community
                    Access
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Unlimited
                    Private Projects
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Dedicated
                    Phone Support
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Free
                    Sub-domain
                  </li>

                  <li className="mb-3 text-muted">Monthly Status Reports</li>
                </ul>

                <a
                  href="#"
                  className="btn btn-primary text-uppercase shadow rounded-pill"
                >
                  Subscribe
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                <h2 className="h1">
                  $49
                  <span className="span-item text-small font-weight-normal ml-2">
                    / month
                  </span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled ">
                  <li className=" text-unmuted mb-3">
                    <i className="five-users fa fa-check mr-2 text-primary"></i>
                    <strong>Unlimited Users</strong>
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> 150GB
                    Storage
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className="text-unmuted fa fa-check mr-2 text-primary"></i>{" "}
                    Unlimited Public Projects
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Community
                    Access
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>
                    <strong>Unlimited</strong> Private Projects
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Dedicated
                    Phone Support
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Free
                    Sub-domain
                  </li>
                  <li className="text-unmuted mb-3">
                    <i className=" fa fa-times mr-2 text-primary"></i>Free
                    Sub-domain
                  </li>
                </ul>

                <a
                  href="#"
                  className="btn btn-primary text-uppercase shadow rounded-pill"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
