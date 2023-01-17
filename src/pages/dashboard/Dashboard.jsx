import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import "assets/css/dashboard/css/index.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHelmet from "../../components/Helmets/Dashboard";
import { Images } from "../../assets/images";
import Footer from "../../components/Dashboard/Footer";
import Menu from "../../components/Dashboard/Menu";
import { dollar } from "../../utils/Converter";
import {
  getBalance,
  getActivities,
  getTrades,
  getOpenTrades,
} from "../../features/dashboard";
import moment from "moment";
import NoData from "../../components/NoData";
import Header from "../../components/Dashboard/Header";
import { ClientJS } from "clientjs";

const jsx = [{ path: "js/dashboard/js", file: "chart.js" }];

const Dashboard = () => {
  const [ch] = useState(!1);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const {
    balance,
    profit,
    deposit,
    activities,
    trades,
    openTrade,
    depositDetails,
  } = useSelector((state) => state.dashboard);

    const client = new ClientJS();

    const isMobile = client.isMobile();

  const [selected, setSelected] = useState(trades);
  const [subscribeModal, setSubscribeModal] = useState(
    sessionStorage.getItem("c28c1f50-cf7e-42de-8f14-24648038cf30")
  );
  const [n, setN] = useState(1);
  const [chart, setChart] = useState("btc");

  const Toast = (t, m) => {
    toast.clearWaitingQueue();
    if (t === "success") {
      toast.success(m);
    } else if (t === "info") {
      toast.info(m);
    } else if (t === "error") {
      toast.error(m);
    } else if (t === "warn") {
      toast.warn(m);
    }
  };

  const changeChart = (x) => {
    setChart(x);
  };

  const AddScript = (x, y) => {
    document.querySelector(`[src="/assets/${x}/${y}"]`) &&
      document.querySelector(`[src="/assets/${x}/${y}"]`).remove();
    const script = document.createElement("script");
    script.src = `/assets/${x}/${y}`;
    script.async = !1;
    // document.body.appendChild(script);
    document.getElementById("scripts").appendChild(script);
  };

  useEffect(() => {
    for (let i = 0; i < jsx.length; i++) {
      AddScript(jsx[i].path, jsx[i].file);
    }
  }, [chart]);

  const Switch = async (e, x) => {
    e.preventDefault();
    x === 1 ? await setSelected(trades) : await setSelected(openTrade);
    setN(x);
  };

  useEffect(() => {
    dispatch(getBalance());
    dispatch(getActivities());
    dispatch(getTrades());
    dispatch(getOpenTrades());
    const i = sessionStorage.getItem("stage");
    if (i !== null) {
      if (Number(i) === 3 && depositDetails === null)
        sessionStorage.setItem("stage", 1);
    }
  }, [ch]);

  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <DashboardHelmet title="Dashboard" />
      <ToastContainer />
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
        <Header />

        <Menu />

        {/* <!-- ============================================================== --> */}
        {/* <!-- Start right Content here --> */}
        {/* <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* <!-- start page title --> */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Dashboard</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="dashboardScroller"></div>

              <div className="row mt-3">
                <div className="col-xl-4">
                  <div className="card overflow-hidden">
                    <div className="bg-danger bg-soft">
                      <div className="row">
                        <div className="col-7">
                          <div className="text-primarys p-3">
                            <h5 className="text-primarys">Welcome Back!</h5>
                            <p>
                              {user?.username} To Bitbing
                              <span className="font-light">live</span>
                            </p>
                          </div>
                        </div>
                        <div className="col-5 align-self-end">
                          <img
                            src={Images.profileImg}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Chart</h4>
                      <div className="row">
                        <div className="col-sm-6 miniChart"></div>
                      </div>
                      <p className="text-muted mb-0">
                        {/* We craft digital, graphic and dimensional thinking. */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">Balance</p>
                              <h4 className="mb-0">{dollar(balance)}</h4>
                            </div>

                            <div className="flex-shrink-0 align-self-center">
                              <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                                <span className="avatar-title">
                                  <i className="bx bx-wallet-alt font-size-24"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">Profit</p>
                              <h4 className="mb-0">{dollar(profit)}</h4>
                            </div>

                            <div className="flex-shrink-0 align-self-center ">
                              <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                <span className="avatar-title rounded-circle bg-primary">
                                  <i className="bx bx-dollar-circle font-size-24"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">
                                Total Deposit
                              </p>
                              <h4 className="mb-0">{dollar(deposit)}</h4>
                            </div>

                            <div className="flex-shrink-0 align-self-center">
                              <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                                <span className="avatar-title rounded-circle bg-primary">
                                  <i className="bx bx-stats font-size-24"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end row --> */}

                  <div className="card">
                    <div className="card-body">
                      <div className="d-sm-flex flex-wrap">
                        <h4 className="card-title mb-4">Live Charts</h4>
                        <div className="ms-auto">
                          <div className="col-sm-6">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary dropdown-toggle pl-4"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {chart.toUpperCase()}
                                {"   "}
                                {/* <i className="mdi mdi-chevron-down"></i> */}
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <span
                                  onClick={() => changeChart("btc")}
                                  className="dropdown-item cursor-pointer"
                                >
                                  BTC
                                </span>
                                <span
                                  onClick={() => changeChart("eth")}
                                  className="dropdown-item cursor-pointer"
                                >
                                  ETH
                                </span>
                                <span
                                  onClick={() => changeChart("doge")}
                                  className="dropdown-item cursor-pointer"
                                >
                                  DOGE
                                </span>
                                <span
                                  onClick={() => changeChart("usdt")}
                                  className="dropdown-item cursor-pointer"
                                >
                                  USDT
                                </span>
                                <span
                                  onClick={() => changeChart("sol")}
                                  className="dropdown-item cursor-pointer"
                                >
                                  SOL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="chartSwitch"
                        className={`apex-charts`}
                        coin={chart}
                        data-mobile={isMobile}
                        dir="ltr"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Activity</h4>
                      {activities[0] !== "No recent activities" ? (
                        <>
                          <ul className="verti-timeline list-unstyled">
                            {activities.map(
                              (x, i) =>
                                x.show && (
                                  <li
                                    key={x.uid}
                                    className={`event-list ${
                                      i === 0 ? "active" : ""
                                    }`}
                                  >
                                    <div className="event-timeline-dot">
                                      <i
                                        className={`bx bxs-right-arrow-circle font-size-18 ${
                                          i === 0 ? "bx-fade-right" : ""
                                        }`}
                                      ></i>
                                    </div>
                                    <div className="d-flex">
                                      <div className="flex-shrink-0 me-3">
                                        <h5 className="font-size-14">
                                          {moment(x.timestamp).format("ll")}
                                          <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                                        </h5>
                                      </div>
                                      <div className="flex-grow-1">
                                        <div>{x.message}</div>
                                      </div>
                                    </div>
                                  </li>
                                )
                            )}
                          </ul>
                          {activities.length > 5 && (
                            <div className="text-center mt-4">
                              <a
                                href="#"
                                className="btn btn-primary waves-effect waves-light btn-sm"
                              >
                                View More{" "}
                                <i className="mdi mdi-arrow-right ms-1"></i>
                              </a>
                            </div>
                          )}
                        </>
                      ) : (
                        <NoData b={activities[0]} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Top Economic Chart</h4>

                      <div className="SecondChart"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body flex-wrap">
                      <div className="flex justify-end items-end">
                        <h4 className="card-title mb-4">Latest Trades</h4>
                        <div className="ms-auto mb-2">
                          <ul className="nav nav-pills">
                            <li className="nav-item">
                              <button
                                type="button"
                                className={`nav-link ${
                                  n === 1 ? "active" : ""
                                }`}
                                onClick={(e) => Switch(e, 1)}
                              >
                                Closed Trades
                              </button>
                            </li>
                            <li className="nav-item">
                              <button
                                type="button"
                                className={`nav-link ${
                                  n === 2 ? "active" : ""
                                }`}
                                onClick={(e) => Switch(e, 2)}
                              >
                                Open Trades
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="table-responsive">
                        {selected[0] === "No trade" ||
                        selected[0] === "No opened trade" ? (
                          <>
                            <div className="flex-col">
                              <div className="flex items-center justify-center">
                                <img
                                  className="w-[20%] h-[20%]"
                                  src={Images.empty}
                                />
                              </div>
                              <p className="px-0 flex items-center justify-center uppercase font-semibold">
                                {selected[0]}
                              </p>
                            </div>
                          </>
                        ) : (
                          <table className="table align-middle table-nowrap mb-0">
                            <thead className="table-light">
                              <tr>
                                <th style={{ width: "20px" }}>
                                  <div className="form-check font-size-16 align-middle">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="transactionCheck01"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="transactionCheck01"
                                    ></label>
                                  </div>
                                </th>
                                <th className="align-middle">S/N</th>
                                <th className="align-middle">Time Stamp</th>
                                <th className="align-middle">Coin</th>
                                <th className="align-middle">Trade</th>
                                <th className="align-middle">Profit/loss</th>
                                {n === 2 && (
                                  <th className="align-middle">Action</th>
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {selected.map((x, i) => (
                                <tr key={x.uid}>
                                  <td>
                                    <div className="form-check font-size-16">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="transactionCheck02"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="transactionCheck02"
                                      ></label>
                                    </div>
                                  </td>
                                  <td>{i + 1}</td>
                                  <td className="text-body fw-bold">
                                    {moment(x.timestamp).format("ll")}
                                  </td>
                                  <td>{x.coin}</td>
                                  <td>{x.text_msg}</td>
                                  <td>{dollar(x.amount)}</td>
                                  {n === 2 && x.open ? (
                                    <>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                        >
                                          Close Trade
                                        </button>
                                      </td>{" "}
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </div>
                      {/* <!-- end table-responsive --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}

          {/* <!-- Transaction Modal --> */}
          <div
            className="modal fade transaction-detailModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="transaction-detailModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="transaction-detailModalLabel">
                    Order Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-2">
                    Product id: <span className="text-primary">#SK2540</span>
                  </p>
                  <p className="mb-4">
                    Billing Name:{" "}
                    <span className="text-primary">Neal Matthews</span>
                  </p>

                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div>
                              <img
                                src="assets/images/product/img-7.png"
                                alt=""
                                className="avatar-sm"
                              />
                            </div>
                          </th>
                          <td>
                            <div>
                              <h5 className="text-truncate font-size-14">
                                Wireless Headphone (Black)
                              </h5>
                              <p className="text-muted mb-0">$ 225 x 1</p>
                            </div>
                          </td>
                          <td>$ 255</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              <img
                                src="assets/images/product/img-4.png"
                                alt=""
                                className="avatar-sm"
                              />
                            </div>
                          </th>
                          <td>
                            <div>
                              <h5 className="text-truncate font-size-14">
                                Phone patterned cases
                              </h5>
                              <p className="text-muted mb-0">$ 145 x 1</p>
                            </div>
                          </td>
                          <td>$ 145</td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <h6 className="m-0 text-right">Sub Total:</h6>
                          </td>
                          <td>$ 400</td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <h6 className="m-0 text-right">Shipping:</h6>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <h6 className="m-0 text-right">Total:</h6>
                          </td>
                          <td>$ 400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end modal --> */}

          {subscribeModal === null&&(
            <>
          {/* <!-- subscribeModal --> */}
          <div
            className="modal fade"
            id="subscribeModal"
            tabIndex="-1"
            aria-labelledby="subscribeModalLabel"
            aria-hidden="true"
            onClick={() =>sessionStorage.setItem("c28c1f50-cf7e-42de-8f14-24648038cf30", !0)}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() =>sessionStorage.setItem("c28c1f50-cf7e-42de-8f14-24648038cf30", !0)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="text-center mb-4">
                    <div className="avatar-md mx-auto mb-4">
                      <div className="avatar-title bg-light rounded-circle text-primary h1">
                        <i className="mdi mdi-email-open"></i>
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                        <h4 className="text-primary">Subscribe !</h4>
                        <p className="text-muted font-size-14 mb-4">
                          Subscribe our newletter and get notification to stay
                          update.
                        </p>

                        <div className="input-group bg-light rounded">
                          <input
                            type="email"
                            className="form-control bg-transparent border-0"
                            placeholder="Enter Email address"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />

                          <button
                            className="btn btn-primary"
                            type="button"
                            id="button-addon2"
                          >
                            <i className="bx bxs-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end modal --> */}
          </>
          )}

          <Footer />
        </div>
        {/* <!-- end main content--> */}
      </div>
      {/* <!-- END layout-wrapper --> */}

      {/* <!-- Right bar overlay--> */}
      <div className="rightbar-overlay"></div>
    </>
  );
};

export default Dashboard;
