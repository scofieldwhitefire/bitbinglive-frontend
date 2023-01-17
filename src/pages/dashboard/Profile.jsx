import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import DashboardHelmet from "../../components/Helmets/Dashboard";
import Footer from "../../components/Dashboard/Footer";
import Menu from "../../components/Dashboard/Menu";
// import {
//   getWithdraws,
//   getBalance,
//   postWithdraw,
// } from "../../features/dashboard";
import { Images } from "../../assets/images";
import moment from "moment";
import Header from "../../components/Dashboard/Header";

const Profile = () => {
  const [ch] = useState(!1);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const { withdraws, profit, balance, withdrawDetail } = useSelector(
  //   (state) => state.dashboard
  // );

  const init = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    username: user?.username,
    email: user?.email,
    address: user?.address,
    phone_number: user?.phone_number,
    profile_pic: user?.profile_pic,
    verified: user?.verified,
  };

  let [formData, setFormData] = useState(init);
  let [stage, setStage] = useState(1);

  const {
    first_name,
    last_name,
    username,
    email,
    address,
    phone_number,
    profile_pic,
    verified,
  } = formData;
  const onClick = () => {};
  const onSubmit = (e) => {
    e.preventDefault();
    Toast('error', 'Unable to make changes, Try Again Soon')
    setTimeout(() => {
      Toast('info', 'Changes successfully undone!')
      setStage(1);
    },2000);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Toast = (t, m) => {
    // toast.clearWaitingQueue();
    toast.dismiss();
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

  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <DashboardHelmet
        title={`${stage === 1 ? "Profile Details" : "Edit Profile"}`}
      />
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
                    <h4 className="mb-sm-0 font-size-18">{stage === 2 && "Edit "}Profile</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">{stage === 2 && "Edit "}Profile</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="dashboardScroller"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body flex-wrap">
                      <div className="flex justify-start items-start">
                        <h4 className="card-title mb-4">
                          {stage === 2 && "Edit "}Profile
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="flex-col w-50">
                          <span className="flex justify-center items-center my-4">
                            {user?.profile_pic ? (
                              <img
                                class="rounded-circle avatar-xl"
                                alt={`${user?.username} avatar`}
                                src={user?.profile_pic}
                                data-holder-rendered="true"
                              />
                            ) : (
                              <img
                                class="rounded-circle avatar-xl"
                                alt="200x200"
                                src={Images.avatar}
                                data-holder-rendered="true"
                              />
                            )}
                            {stage === 2 && (
                              <div className="flex justify-center items-center  mx-2 w-[40%] h-[65%]">
                                <div className="input-group">
                                  <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                    accept="image/*"
                                  />
                                </div>
                              </div>
                            )}
                          </span>
                          <form onSubmit={onSubmit} className="">
                            <>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="formrow-password-input"
                                      className="form-label"
                                    >
                                      First Name
                                    </label>

                                    <div className="input-group">
                                      {stage === 2 ? (
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="formrow-password-input "
                                          onChange={onChange}
                                          value={first_name}
                                          name="first_name"
                                        />
                                      ) : (
                                        <p className="font-semibold text-lg">
                                          {user?.first_name}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="formrow-password-input"
                                      className="form-label"
                                    >
                                      Last Name
                                    </label>

                                    <div className="input-group">
                                      {stage === 2 ? (
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="formrow-password-input "
                                          onChange={onChange}
                                          value={last_name}
                                          name="last_name"
                                        />
                                      ) : (
                                        <p className="font-semibold text-lg">
                                          {user?.last_name}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="formrow-password-input"
                                      className="form-label"
                                    >
                                      Username
                                    </label>

                                    <div className="input-group">
                                      <p className="font-semibold text-lg">
                                        {user?.username}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="formrow-password-input"
                                      className="form-label"
                                    >
                                      Email
                                    </label>

                                    <div className="input-group">
                                      <p className="font-semibold text-lg">
                                        {user?.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="formrow-password-input"
                                      className="form-label"
                                    >
                                      Phone Number
                                    </label>

                                    <div className="input-group">
                                      {stage === 2 ? (
                                        <input
                                          type="number"
                                          className="form-control"
                                          id="formrow-password-input "
                                          onChange={onChange}
                                          value={phone_number}
                                          name="phone_number"
                                        />
                                      ) : (
                                        <p className="font-semibold text-lg">
                                          {user?.phone_number}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="formrow-password-input"
                                      className="form-label"
                                    >
                                      Address
                                    </label>

                                    <div className="input-group">
                                      {stage === 2 ? (
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="formrow-password-input "
                                          onChange={onChange}
                                          value={address}
                                          name="address"
                                        />
                                      ) : (
                                        <p className="font-semibold text-lg">
                                          {user?.address}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                {stage === 2 ? (
                                  <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                  >
                                    Save
                                  </button>
                                ) : (
                                  <span
                                    onClick={() => setStage(2)}
                                    title="Submit your prove of payment to continue."
                                    className="btn btn-primary w-full -cursor-not-allowed"
                                  >
                                    Edit Profile
                                  </span>
                                )}
                              </div>
                            </>
                          </form>
                        </div>
                      </div>
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

export default Profile;
