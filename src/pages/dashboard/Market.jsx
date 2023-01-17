import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import "assets/css/dashboard/css/index.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHelmet from "../../components/Helmets/Dashboard";
import Footer from "../../components/Dashboard/Footer";
import Menu from "../../components/Dashboard/Menu";
import { dollar } from "../../utils/Converter";
import {
  getTrades,
  getOpenTrades,
} from "../../features/dashboard";
import moment from "moment";
import NoData from "../../components/NoData";
import Header from "../../components/Dashboard/Header";

const Market = () => {
  const [ch] = useState(!1);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { openTrade } = useSelector(
    (state) => state.dashboard
  );

//   const [selected, setSelected] = useState(trades);

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

  useEffect(() => {
    dispatch(getTrades());
    dispatch(getOpenTrades());
  }, [ch]);

  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <DashboardHelmet title="Markets" />
      <ToastContainer />
      {/* <!-- Begin page --> */}
      <div id="layout-wrapper">
         <Header />

        <Menu />

        {/* <!-- ============================================================== --> */}
        {/* <!-- Start right Content here --> */}
        {/* <!-- ============================================================== --> */}
        {/* <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* <!-- start page title --> */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Markets</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Markets</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="dashboardScroller"></div>

              <div className="row mt-3">
                <div className="col-xl-4">
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
                <div className="col-xl-8 flex-col">
                  <div className="card my-2">
                    <div className="card-body">
                      <div className="d-sm-flex flex-wrap">
                        <h4 className="card-title mb-4">Charts</h4>
                      </div>

                      <div
                        id="stacked-column-chart"
                        className="apex-charts"
                        dir="ltr"
                      ></div>
                    </div>
                  </div>
                  <div className="card my-2">
                    <div className="card-body">
                      <div className="d-sm-flex flex-wrap">
                        <h4 className="card-title mb-4">Live Charts</h4>
                        <div className="ms-auto">
                          <div className="col-sm-6">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Options <i className="mdi mdi-chevron-down"></i>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a className="dropdown-item" href="#">
                                  One
                                </a>
                                <a className="dropdown-item" href="#">
                                  Two
                                </a>
                                <a className="dropdown-item" href="#">
                                  Three
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="stacked-column-chart"
                        className="apex-charts"
                        dir="ltr"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}

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

export default Market;
