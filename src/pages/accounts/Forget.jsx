import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DashboardHelmet from "../../components/Helmets/Dashboard";

import { ToastContainer, toast } from "react-toastify";
import { Images } from "../../assets/images";

const Forget = () => {
  const [sent, setSent] = useState(!1);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const Toast = (t, m) => {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    Toast("error", "Unable to process your request");
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;
  return (
    <>
      <DashboardHelmet title="Forgot password" />
      <ToastContainer />
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-danger bg-soft">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primarys p-4">
                        <h5 className="text-primarys"> Reset Password</h5>
                        <p>Reset Password with Bitbinglive.</p>
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
                <div className="card-body pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={Images.icon}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="p-2">
                    <div
                      className="alert alert-success text-center mb-4"
                      role="alert"
                    >
                      Enter your Email and instructions will be sent to you!
                    </div>
                    <form className="form-horizontal" onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="text-end">
                        <button
                          className="hover:!bg-[#FA360A] btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  Remember It ?{" "}
                  <Link to="/login" className="fw-medium text-primarys">
                    {" "}
                    Sign In here
                  </Link>{" "}
                </p>
                <p>© {new Date().getFullYear()} Bitbinglive. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
