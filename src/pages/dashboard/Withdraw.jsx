import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
// import "assets/css/dashboard/css/index.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardHelmet from "../../components/Helmets/Dashboard";
import Footer from "../../components/Dashboard/Footer";
import Menu from "../../components/Dashboard/Menu";
import { dollar } from "../../utils/Converter";
import {
  getWithdraws,
  getBalance,
  postWithdraw,
} from "../../features/dashboard";
import { Images } from "../../assets/images";
import moment from "moment";
import Header from "../../components/Dashboard/Header";

const initial = {
  amount: "",
  account: "profit",
  payment_type: "crypto",
  address: "",
  currency: "bitcoin",
  curr: "",
  bank_name: "",
  account_name: "",
  account_number: "",
  routing_number: "",
  ssn: "",
  ppemail: "",
};

const Withdraw = () => {
  const [ch] = useState(!1);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { withdraws, profit, balance, withdrawDetail } = useSelector(
    (state) => state.dashboard
  );

  const [formData, setFormData] = useState(initial);
  let [method, setMethod] = useState("crypto");

  let [stage, setStage] = useState(1);
  let [subInit] = useState(initial);

  const {
    amount,
    payment_type,
    address,
    account,
    currency,
    curr,
    bank_name,
    account_name,
    account_number,
    routing_number,
    ssn,
    ppemail,
  } = formData;

  const Bank = () => (
    <>
      <div className="mb-3">
        <label htmlFor="formrow-bankName" className="form-label">
          Bank Name
        </label>
        <input
          type="text"
          name="bank_name"
          onChange={onChange}
          value={bank_name}
          className="form-control"
          id="formrow-bankName"
          placeholder="Enter bank name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formrow-accountName" className="form-label">
          Account Name
        </label>
        <input
          type="text"
          name="account_name"
          onChange={onChange}
          value={account_name}
          className="form-control"
          id="formrow-accountName"
          placeholder="Enter account name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formrow-accountNumber" className="form-label">
          Account Number
        </label>
        <input
          type="number"
          name="account_number"
          onChange={onChange}
          value={account_number}
          className="form-control"
          id="formrow-accountNumber"
          placeholder="Enter account number"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formrow-routingNumber" className="form-label">
          Routing Number
        </label>
        <input
          type="number"
          name="routing_number"
          onChange={onChange}
          value={routing_number}
          className="form-control"
          id="formrow-routingNumber"
          placeholder="Enter routing number"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formrow-ssn" className="form-label">
          SSN
        </label>
        <input
          type="number"
          name="ssn"
          onChange={onChange}
          value={ssn}
          className="form-control"
          id="formrow-ssn"
          placeholder="Enter ssn digits"
        />
      </div>
    </>
  );

  const Paypal = () => (
    <div className="mb-3">
      <label htmlFor="formrow-paypal" className="form-label">
        PayPal Email
      </label>
      <input
        type="email"
        name="ppemail"
        onChange={onChange}
        value={ppemail}
        className="form-control"
        id="formrow-paypal"
        placeholder="Enter paypal email"
      />
    </div>
  );

  const Wallet = () => (
    <div className="mb-3">
      <label htmlFor="formrow-address" className="form-label">
        Wallet Address
      </label>
      <input
        type="text"
        name="address"
        onChange={onChange}
        value={address}
        className="form-control"
        id="formrow-address"
        placeholder="Enter wallet address"
      />
    </div>
  );

  const onChangex = (e) => {
    if (
      e.target.value === "bitcoin" ||
      e.target.value === "ethereum" ||
      e.target.value === "usdt" ||
      e.target.value === "doge"
    ) {
      setMethod("crypto");
      setFormData({
        ...formData,
        payment_type: method,
        currency: e.target.value,
      });
    } else if (e.target.value === "paypal") {
      setMethod("paypal");
      setFormData({
        ...formData,
        payment_type: method,
        currency: "usd",
        curr: e.target.value,
      });
    } else if (e.target.value === "bank") {
      setMethod("bank");
      setFormData({
        ...formData,
        payment_type: method,
        currency: "usd",
        curr: e.target.value,
      });
    }
  };

  const onClick = (e = null, s) => {
    e.preventDefault();
    setStage(s);
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

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e, uid = "None", t = !0) => {
    e.preventDefault();
    if(t) {
      if (method === "crypto") {
        if (amount === "" || address === "" || currency === "") {
          Toast(
            "error",
            "One or more details for your crypto hasn't been filled out"
          );
          return 0;
        }
      } else if (method === "bank") {
        if (
          amount === "" ||
          currency === "" ||
          bank_name === "" ||
          account_name === "" ||
          account_number === "" ||
          routing_number === "" ||
          ssn === ""
        ) {
          Toast(
            "error",
            "One or more details for your bank details hasn't been filled out"
          );
          return 0;
        }
      } else if (method === "paypal") {
        if (
          amount === "" ||
          currency === "" ||
          address === "" ||
          account === "" ||
          ppemail === ""
        ) {
          Toast(
            "error",
            "One or more detail for your PayPal hasn't been filled out"
          );
          return 0;
        }
      }
      let o;
      if (account === "profit") o = profit;
      if (account === "balance") o = balance;
      if (Number(amount) > o) {
        Toast(
          "error",
          `Insufficient funds in your in your ${account} trading account.`
        );
        return 0;
      }
      if (Number(amount) < 100) {
        Toast(
          "error",
          `Minimum withdrawable is $100`
        );
        return 0;
      }
    }

    const send = {
      uid,
      amount,
      payment_type,
      address,
      account,
      currency,
      bank_name,
      account_name,
      account_number,
      routing_number,
      ssn,
      ppemail,
    };
    const res = await dispatch(postWithdraw(send));
    if (res.meta.requestStatus.toLowerCase() === "rejected" && t) {
      Toast("error", "Unable create a withdraw instance, Try Again soon.");
    } else if (res.meta.requestStatus.toLowerCase() === "rejected" && !t) {
      Toast("error", "Unable to get this withdrawal status, Try Again soon.");
    } else {
      await dispatch(getWithdraws());
      await dispatch(getBalance());
      Toast("success", "Request successfully submitted, check your email for instructions.");
      setFormData(subInit)
      onClick(e, 1);
    }
  };

  useEffect(() => {
    dispatch(getWithdraws());
    dispatch(getBalance());
  }, [ch]);

  const genQRCode = async (c, a) => {
    let curr;
    if (c == "btc") curr = "bitcoin";
    if (c == "eth") curr = "ethererum";
    if (c == "doge") curr = "dogecoin";
    if (c == "usdt") curr = "tether";
    if (c == "sol") curr = "solana";

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      config: {
        bgColor: "#FFFFFF",
        body: "circle",
        bodyColor: "#DF0A0A",
        brf1: ["fh"],
        brf2: [],
        brf3: ["fh", "fv"],
        erf1: ["fh"],
        erf2: [],
        erf3: ["fh", "fv"],
        eye: "frame1",
        eye1Color: "#DF0A0A",
        eye2Color: "#DF0A0A",
        eye3Color: "#DF0A0A",
        eyeBall: "ball1",
        eyeBall1Color: "#DF0A0A",
        eyeBall2Color: "#DF0A0A",
        eyeBall3Color: "#DF0A0A",
        gradientColor1: "",
        gradientColor2: "",
        gradientOnEyes: "true",
        gradientType: "linear",
        logo: "",
        logoMode: "default",
      },
      data: `${curr}:${a}`,
      download: "imageUrl",
      file: "svg",
      size: 300,
    });

    let reqOptions = {
      url: "https://api.qrcode-monkey.com//qr/custom",
      method: "POST",
      // headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);
  };

  // countDown
  const Complete = () => (
    <span className="rounded py-1 px-2 text-[#DF0A0A] font-semibold">
      EXPIRED
    </span>
  );

  const render = ({ minutes, seconds, completed, props }) => {
    if (completed) {
      dispatch(depositExpired({ uid: props.uid }));
      if (props.part === "finial") {
        sessionStorage.setItem("stage", 1);
        setStage(1);
      }
      return <Complete />;
    } else {
      if (minutes === 0) {
        return (
          <span className="rounded py-1 px-2 text-success font-semibold">
            {zeroPad(seconds)}s left
          </span>
        );
      } else {
        return (
          <span className="rounded py-1 px-2 text-success font-semibold">
            {zeroPad(minutes)}:{zeroPad(seconds)}
          </span>
        );
      }
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <DashboardHelmet
        title={`${
          stage === null || stage === 1
            ? "All Withdrawals"
            : stage === 2
            ? "Make Withdrawal"
            : stage === 3
            ? "View Status"
            : "Withdrawal"
        }`}
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
                    <h4 className="mb-sm-0 font-size-18">Withdraw</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Withdraw</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="dashboardScroller"></div>

              {stage === 1 && (
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body flex-wrap">
                        <div className="flex justify-start items-start">
                          <h4 className="card-title mb-4">All Withdrawals</h4>
                        </div>
                        <div className="table-responsive">
                          {withdraws[0] === "No withdrawal history" ? (
                            <>
                              <div className="flex-col">
                                <div className="flex items-center justify-center">
                                  <img
                                    className="w-[15%] h-[15%]"
                                    src={Images.empty}
                                  />
                                </div>
                                <p className="px-0 flex items-center justify-center uppercase font-semibold">
                                  {withdraws[0]}
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
                                  <th className="align-middle">Amount</th>
                                  <th className="align-middle">Payment Type</th>
                                  <th className="align-middle">Destination</th>
                                  <th className="align-middle">Timestamp</th>
                                  <th className="align-middle">Status</th>
                                  <th className="align-middle"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {withdraws.map((x, i) => (
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
                                    <td className="align-middle">{i + 1}</td>
                                    <td className="align-middle">
                                      {dollar(x.amount)}
                                    </td>
                                    <td className="align-middle">
                                      {x.payment_type}
                                    </td>
                                    <td className="align-middle">
                                      {x.payment_type === "bank"
                                        ? `${x.bank.bank_name} Ending ${x.bank.account_number}`
                                        : x.payment_type === "paypal"
                                        ? `Payment to Paypal email ${x.paypal.ppemail}`
                                        : `${x.currency} to wallet ${x.address}`}
                                    </td>
                                    <td className="text-body fw-bold align-middle">
                                      {moment(x.timestamp).format("lll")}
                                    </td>
                                    <td className="align-middle">
                                      {x.status === -2 ? (
                                        <p className="text-danger">Error</p>
                                      ) : x.status === -1 ? (
                                        <p className="text-black">
                                          Not started
                                        </p>
                                      ) : x.status >= 2 ? (
                                        <p className="text-success">Paid</p>
                                      ) : x.status > 0 ? (
                                        <p className="text-warning">Pending</p>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td>
                                      {x.canceled ? (
                                        <span className="rounded py-1 px-2 text-[#DF0A0A] font-semibold">
                                          Canceled
                                        </span>
                                      ) : (
                                        <>
                                          <span
                                            className="btn btn-success btn-sm btn-rounded waves-effect waves-light"
                                          >
                                            Still in progress
                                          </span>
                                        </>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}
                          <span className="flex justify-center items-center">
                            <button
                              onClick={(e) => onClick(e, 2)}
                              type="button"
                              className="flex justify-center items-center py-2 rounded w-full bg-primarys text-white !text-sm hover:!text-[#DF0A0A] border-[#DFA0A0] hover:border-[#DF0A0A] border-2"
                            >
                              Make New Withdrawal
                            </button>
                          </span>
                        </div>
                        {/* <!-- end table-responsive --> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {stage === 2 && (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body flex-wrap">
                        <div className="flex justify-start items-start">
                          <h4 className="card-title mb-4">
                            <i
                              onClick={(e) => onClick(e, 1)}
                              className="bx bx-chevron-left font-semibold text-lg py-1 px-2 hover:font-bold hover:!text-[#DF0A0A] cursor-pointer"
                            ></i>
                            Make Withdrawal
                          </h4>
                        </div>

                        <div className="flex justify-center items-center">
                          <form onSubmit={(e) => onSubmit(e)} className="w-50">
                            <div className="mb-3">
                              <label
                                htmlFor="formrow-payment"
                                className="form-label"
                              >
                                Select Account
                              </label>
                              <select
                                name="account"
                                onChange={onChange}
                                value={account}
                                id="formrow-payment"
                                className="form-select"
                              >
                                <option defaultValue value="profit">
                                  Trading Profit [{dollar(profit)}]
                                </option>
                                <option value="balance">
                                  Trading Balance [{dollar(balance)}]
                                </option>
                              </select>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="formrow-payment"
                                className="form-label"
                              >
                                Payment Method
                              </label>
                              <select
                                name="curr"
                                onChange={onChangex}
                                value={curr}
                                id="formrow-payment"
                                className="form-select"
                              >
                                <option defaultValue value="bitcoin">
                                  Bitcoin
                                </option>
                                <option value="ethereum">Ethereum</option>
                                <option value="usdt">USDT</option>
                                <option value="doge">Dogecoin</option>
                                <option value="paypal">PayPal</option>
                                <option value="bank">Bank</option>
                              </select>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="formrow-amount"
                                className="form-label"
                              >
                                Amount in USD
                              </label>
                              <input
                                type="number"
                                name="amount"
                                onChange={onChange}
                                value={amount}
                                className="form-control"
                                id="formrow-amount"
                                placeholder="Enter amount in USD"
                              />
                            </div>

                            {method === "bank" ? (
                              <Bank />
                            ) : method === "paypal" ? (
                              <Paypal />
                            ) : (
                              <Wallet />
                            )}
                            <div>
                              <button
                                type="submit"
                                className="btn btn-primary w-full"
                              >
                                Withdraw
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {stage === 3 && (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body flex-wrap">
                        <div className="flex justify-start items-start">
                          <h4 className="card-title mb-4">
                            <span
                              className="font-semibold text-lg py-1 px-2 hover:font-bold hover:!text-[#DF0A0A] cursor-pointer"
                              onClick={() => onClick(e, 1)}
                            >
                              <i className="bx bx-plus rotate-45"></i>
                            </span>
                            Withdrawal Status
                          </h4>
                        </div>
                        <div className="flex justify-center items-center">
                          <span onSubmit={onSubmit} className="w-50">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="formrow-password-input"
                                    className="form-label flex justify-center items-center"
                                  >
                                  Withdrawal still in progress
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  

                                  <div className="input-group flex justify-center items-center">
                                    <h4></h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="formrow-email-input"
                                    className="form-label"
                                  >
                                    Please Upload a poof of payment
                                  </label>
                                  <div className="input-group">
                                    <input
                                      type="file"
                                      className="form-control"
                                      id="inputGroupFile04"
                                      aria-describedby="inputGroupFileAddon04"
                                      aria-label="Upload"
                                      accept="image/*"
                                    />
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                      id="inputGroupFileAddon04"
                                    >
                                      Send
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex ">
                                <button
                                  type="submit"
                                  className="btn btn-primary w-full mx-2"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary w-full mx-2"
                                >
                                  Close
                                </button>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Withdraw;
