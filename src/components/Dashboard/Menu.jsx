import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  let location = useLocation();
  return (
    <>
      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/* <!--- Sidemenu --> */}
          <div id="sidebar-menu">
            {/* <!-- Left Menu Start --> */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" key="t-menu">
                Menu
              </li>

              <li
                className={`${
                  location.pathname === "/dashboard" ? "mm-active" : ""
                }`}
              >
                <Link
                  to="/dashboard"
                  className={`waves-effect ${
                    location.pathname === "/dashboard" ? "mm-active" : ""
                  }`}
                >
                  <i className="bx bx-home-circle"></i>
                  <span key="t-dashboards">Dashboard</span>
                </Link>
              </li>
              {/* <li
                className={`${
                  location.pathname === "/dashboard/markets" ? "mm-active" : ""
                }`}
              >
                <Link
                  to="/dashboard/markets"
                  className={`waves-effect ${
                    location.pathname === "/dashboard/markets" ? "mm-active" : ""
                  }`}
                >
                  <i className="bx bx-dollar-circle"></i>
                  <span key="t-market">Markets</span>
                </Link>
              </li> */}
              <li
                className={`${
                  location.pathname === "/dashboard/copy-traders"
                    ? "mm-active"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard/copy-traders"
                  className={`waves-effect ${
                    location.pathname === "/dashboard/copy-traders"
                      ? "mm-active"
                      : ""
                  }`}
                >
                  <i className="bx bx-copy-alt"></i>
                  <span key="t-trade">Copy Trade</span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/deposit" ? "mm-active" : ""
                }`}
              >
                <Link
                  to="/dashboard/deposit"
                  className={`waves-effect ${
                    location.pathname === "/dashboard/deposit"
                      ? "mm-active"
                      : ""
                  }`}
                >
                  <i className="bx bx-money"></i>
                  <span key="t-deposit">Deposit</span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/withdraw" ? "mm-active" : ""
                }`}
              >
                <Link
                  to="/dashboard/withdraw"
                  className={`waves-effect ${
                    location.pathname === "/dashboard/withdraw" ? "mm-active" : ""
                  }`}
                >
                  <i className="bx bxs-bank"></i>
                  <span key="t-withdraw">Withdraw</span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/dashboard/support" ? "mm-active" : ""
                }`}
              >
                <Link
                  to="/contact"
                  className={`waves-effect ${
                    location.pathname === "/dashboard/support" ? "mm-active" : ""
                  }`}
                >
                  <i className="bx bx-chat"></i>
                  <span key="t-support">Support</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Sidebar --> */}
        </div>
      </div>
      {/* <!-- Left Sidebar End --> */}
    </>
  );
};

export default Menu;
