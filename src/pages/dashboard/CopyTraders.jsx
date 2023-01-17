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
  getTraders,
  deleteTraders,
  copyTraders,
} from "../../features/dashboard";
import NoData from "../../components/NoData";
import Header from "../../components/Dashboard/Header";

const CopyTraders = () => {
  const [ch] = useState(!1);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { traders } = useSelector((state) => state.dashboard);

  // const [selected, setSelected] = useState(trades);

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

  const createInitial = (n) => {
    let res = "";
    const s = n.split(" ");
    for (let i = 0; i < s.length; i++) {
      res = `${res}${s[i].charAt(0).toUpperCase()}`;
    }
    return res;
  };

  const onClick = async (action, uid) => {
    if (action === "delete") {
      let res = await dispatch(deleteTraders({ uid }));
      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        Toast("error", "Unable to delete trader from your profile.");
      } else {
        Toast("success", `Trader deleted successfully.`);
      }
    } else {
      let res = await dispatch(copyTraders({ uid }));
      if (res.meta.requestStatus.toLowerCase() === "rejected") {
        Toast("error", "Unable to copy trader to your profile.");
      } else {
        Toast("success", `Successfully copied trader.`);
      }
    }
  };

  const showContact = (c) => {
    let ele = document.querySelector(`.contact${c}`);
    if (ele.innerText.includes("Contact")) {
      ele.innerHTML = "";
      ele.innerHTML = `${c}`;
    } else {
      ele.innerHTML = "";
      ele.innerHTML = `Contact`;
    }
  };

  useEffect(() => {
    dispatch(getTraders());
  }, [ch]);

  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <DashboardHelmet title="Copy Traders" />
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
                    <h4 className="mb-sm-0 font-size-18">Copy Traders</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Copy Traders</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="dashboardScroller"></div>

              <div className="row mt-3">
                {traders !== "No traders found" ? (
                  traders.map((x, i) => (
                    <div key={x.uid} className="col-xl-3 col-sm-6">
                      <div className="card text-center">
                        <div className="card-body">
                          {x.picture !== null ? (
                            <span className={`${x.is_active ? "flex" : ""}`}>
                              {x.is_active && (
                                <span className="animate-ping absolute inline-flex h-[2%] w-[2%] rounded-full bg-green-400 opacity-75"></span>
                              )}
                              <img
                                className="rounded-circle avatar-sm relative inline-flex"
                                src={x.picture}
                                alt=""
                              />
                            </span>
                          ) : (
                            <div
                              className={`avatar-sm mx-auto mb-4 ${
                                x.is_active ? "flex" : ""
                              }`}
                            >
                              {x.is_active && (
                                <span className="animate-ping absolute inline-flex h-[2%] w-[2%] rounded-full bg-green-400 opacity-75"></span>
                              )}
                              <span
                                style={{
                                  backgroundColor: `${x.color}19`,
                                  color: `${x.color}FF`,
                                  border: `1px solid ${x.color}4C`,
                                }}
                                className="avatar-title rounded-circle bg-opacity-50 font-size-16 relative inline-flex"
                              >
                                {createInitial(x.name)}
                              </span>
                            </div>
                          )}
                          <h5 className="font-size-15 mb-1 text-dark hover:!text-[#DF0A0A]">
                            {x.name}
                          </h5>
                          <p className="text-muted">
                            Win Rate: {x.wins}% | Profit Share: {x.profit}%
                          </p>

                          <div>
                            <span
                              title="Click to view and hide contact"
                              onClick={() => showContact(x.contact)}
                              className="badge bg-primarys font-size-11 m-1 pr-2 py-2 hover:bg-[#DF0A0A] hover:!text-white cursor-pointer"
                            >
                              <i className="bx bx-message-square-dots px-1"></i>
                              <span className={`contact${x.contact}`}>
                                Contact
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="card-footer bg-transparent border-top">
                          <div className="contact-links d-flex font-size-20">
                            {x.copied ? (
                              <div className="flex-fill">
                                <button
                                  type="button"
                                  onClick={() => onClick("delete", x.uid)}
                                  className="bg-primarys px-2 py-1 rounded-md text-white !text-sm hover:!text-[#DF0A0A] border-[#DFA0A0] hover:border-[#DF0A0A] border-2"
                                >
                                  <i className="bx bx-trash px-1"></i>
                                  Delete
                                </button>
                              </div>
                            ) : (
                              <div className="flex-fill">
                                <button
                                  type="button"
                                  onClick={() => onClick("copy", x.uid)}
                                  className="bg-[#4BB543] px-2 py-1 rounded-md text-white !text-sm hover:!text-[#4BB543] border-[#93D28E] hover:border-[#4BB543] border-2 hover:bg-white"
                                >
                                  <i className="bx bx-copy-alt px-1"></i>
                                  Copy
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <NoData b={traders[0]} />
                )}
              </div>
              {/* <!-- end row --> */}

              {traders.length > 12 && (
                <div className="row">
                  <div className="col-12">
                    <div className="text-center my-3">
                      <button className="text-success">
                        <i className="bx bx-hourglass bx-spin me-2"></i> Load
                        more{" "}
                      </button>
                    </div>
                  </div>
                  {/* <!-- end col--> */}
                </div>
              )}
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

export default CopyTraders;
