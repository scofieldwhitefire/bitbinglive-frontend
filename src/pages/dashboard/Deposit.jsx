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
  getDeposits,
  postDeposit,
  depositExpired,
} from "../../features/dashboard";
import NoData from "../../components/NoData";
import { getCoinsPrices, countDown } from "../../utils/misc";
import { Images } from "../../assets/images";
import moment from "moment";
import Clipboard from "react-clipboard.js";
import Countdown, { zeroPad } from "react-countdown";
import axios from "axios";
import Header from "../../components/Dashboard/Header";

const initial = {
  method: "btc",
  amount: "",
  value: "",
};

const Deposit = () => {
  const [ch] = useState(!1);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { deposits, depositDetails } = useSelector((state) => state.dashboard);

  let [stage, setStage] = useState(sessionStorage.getItem("stage"));
  let [amtValue, setAmtValue] = useState({});
  let [manu, setManu] = useState(!1);
  let [sent, setSent] = useState(!1);
  let [finial, setFinial] = useState(!1);
  let [n, setN] = useState(0);
  const [formData, setFormData] = useState(initial);
  const ref = useRef(null);

  stage !== null && (stage = Number(stage));

  const getText = () => depositDetails.address;
  const onSuccess = () => {
    Toast("success", "Successfully copied");
    const el = document.querySelector(".clipbrd");
    el.innerHTML = "Copied";
    setTimeout(() => {
      el.innerHTML = "Copy";
    }, 5000);
  };

  const onClick = (e = null, s) => {
    e.preventDefault();
    sessionStorage.setItem("stage", s);
    setStage(s);
  };
  const { method, amount, value } = formData;

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

  const init = async () => {
    const res = await getCoinsPrices(method.toUpperCase());
    if (res.error !== "error") {
      setAmtValue(res);
      setN(0);
      // cal();
    }
    // if (res.error === "error") {
    //   Toast("error", `Error fetching ${method.toUpperCase()} price`);
    // }
    res.error === "error" && setManu(!0);
    res.error === "error" && setN(n++);
  };

  function cal() {
    if (amount !== "" && amount !== "0") {
      const amt = parseFloat(amount) / amtValue[method.toUpperCase()];
      if (String(amt) !== "NaN") {
        setFormData({
          ...formData,
          value: String(`${amt} ${method.toUpperCase()}`),
        });
      }
    } else {
      setFormData({
        ...formData,
        value: "",
      });
    }
  }

  const onSubmit = async (e, uid = "None", t = !0) => {
    e.preventDefault();
    const v = value.split(" ");
    const send = {
      uid,
      amount,
      coin_rate: v[0],
      coin_price: amtValue[method.toUpperCase()],
      currency: method.toUpperCase(),
    };
    const res = await dispatch(postDeposit(send));
    if (res.meta.requestStatus.toLowerCase() === "rejected" && t) {
      Toast("error", "Unable create a deposit instance, Try Again soon.");
    } else if (res.meta.requestStatus.toLowerCase() === "rejected" && !t) {
      Toast("error", "Unable to get this transaction, Try Again soon.");
    } else {
      onClick(e, 3);
    }
    !t && setFinial(!0);
  };

  const Revert = () => {
    setFinial(!1);
    sessionStorage.setItem("stage", 1);
    setStage(1);
  };

  const POP = () => Toast("Error", "Submit your prove of payment to continue.");

  const x = setInterval(() => {
    if (Number(stage) === 2) {
      setN(n++);
      init();
    } else {
      clearInterval(x);
    }
  }, 60000);

  n === 5 && clearInterval(x);
  n === 5 && (Revert());

  useEffect(() => {
    dispatch(getDeposits());
    Number(stage) === 2 && init();
  }, [ch]);

  useEffect(() => {
    if (Number(stage) === 2) {
      cal();
    }
  }, [method, amount]);

  const genQRCode = async (c, a) => {
    let curr
    if(c=='btc') curr = 'bitcoin'
    if(c=='eth') curr = "ethererum";
    if(c=='doge') curr = "dogecoin";
    if(c=='usdt') curr = 'tether'
    if(c=='sol') curr = 'solana'

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
            ? "All Deposit"
            : stage === 2
            ? "Make Deposit"
            : stage === 3
            ? "Fund Wallet"
            : "Deposit"
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
                    <h4 className="mb-sm-0 font-size-18">Deposit</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Deposit</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="dashboardScroller"></div>

              {(stage === 1 || stage === null) && (
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body flex-wrap">
                        <div className="flex justify-start items-start">
                          <h4 className="card-title mb-4">All Deposits</h4>
                        </div>
                        <div className="table-responsive">
                          {deposits[0] === "No deposit" ? (
                            <>
                              <div className="flex-col">
                                <div className="flex items-center justify-center">
                                  <img
                                    className="w-[15%] h-[15%]"
                                    src={Images.empty}
                                  />
                                </div>
                                <p className="px-0 flex items-center justify-center uppercase font-semibold">
                                  {deposits[0]}
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
                                  <th className="align-middle">Coin Value</th>
                                  <th className="align-middle">Currency</th>
                                  <th className="align-middle">Timestamp</th>
                                  <th className="align-middle">Status</th>
                                  <th className="align-middle">Link</th>
                                  <th className="align-middle"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {deposits.map((x, i) => (
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
                                      {parseFloat(x.coin_value).toFixed(7)}
                                    </td>
                                    <td className="align-middle">
                                      {x.currency.toUpperCase()}
                                    </td>
                                    <td className="text-body fw-bold align-middle">
                                      {moment(x.timestamp).format("lll")}
                                    </td>
                                    <td className="align-middle">
                                      {x.status === -3 ? (
                                        <p className="text-danger">Timed Out</p>
                                      ) : x.status === -2 ? (
                                        <p className="text-danger">Error</p>
                                      ) : x.status === -1 ? (
                                        <p className="text-black">
                                          Not started
                                        </p>
                                      ) : x.status >= 2 ? (
                                        <p className="text-success">
                                          Confirmed
                                        </p>
                                      ) : x.status >= 0 ? (
                                        <p className="text-warning">
                                          Started but unconfirmed
                                        </p>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td>
                                      {x.expired ? (
                                        <span className="rounded py-1 px-2 text-[#DF0A0A] font-semibold">
                                          EXPIRED
                                        </span>
                                      ) : (
                                        <>
                                          <Countdown
                                            date={x.expires}
                                            uid={x.uid}
                                            part="not-finial"
                                            renderer={render}
                                          />
                                        </>
                                      )}
                                    </td>
                                    <td className="p-0">
                                      {!x.expired && (
                                        <span
                                          onClick={(e) =>
                                            onSubmit(e, x.uid, !1)
                                          }
                                          className="btn btn-success btn-sm btn-rounded waves-effect waves-light"
                                        >
                                          View Transaction
                                        </span>
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
                              Make Deposit
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
                            Make Deposit
                          </h4>
                        </div>

                        <div className="flex justify-center items-center">
                          <form onSubmit={(e) => onSubmit(e)} className="w-50">
                            <div className="mb-3">
                              <label
                                htmlFor="formrow-payment"
                                className="form-label"
                              >
                                Payment Method
                              </label>
                              <select
                                name="method"
                                onChange={onChange}
                                value={method}
                                id="formrow-payment"
                                className="form-select"
                              >
                                <option defaultValue value="btc">
                                  Bitcoin
                                </option>
                                <option value="eth">Ethererum</option>
                                <option value="doge">Dogecoin</option>
                                <option value="usdt">Tether [USDT]</option>
                                <option value="sol">Solana</option>
                              </select>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="formrow-amount"
                                className="form-label"
                              >
                                Amount in USDT
                              </label>
                              <input
                                type="number"
                                name="amount"
                                onChange={onChange}
                                value={amount}
                                className="form-control"
                                id="formrow-amount"
                                placeholder="Enter amount in USDT"
                              />
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="formrow-value"
                                className="form-label"
                              >
                                Value{" "}
                                {method !== "" && `in ${method.toUpperCase()}`}{" "}
                                {manu && (
                                  <i className="bx bx-revision font-semibold px-1 mx-1  cursor-pointer"></i>
                                )}
                              </label>
                              <input
                                type="text"
                                name="value"
                                onChange={onChange}
                                value={value}
                                className="form-control cursor-not-allowed"
                                id="formrow-value"
                                placeholder={`${
                                  n > 0
                                    ? "Unable to fetch prices"
                                    : "Value in " +
                                      method.toUpperCase() +
                                      " will be auto calculated"
                                }`}
                                readOnly
                              />
                            </div>

                            <div>
                              {amount !== "" ? (
                                <button
                                  type="submit"
                                  className="btn btn-primary w-full"
                                >
                                  Deposit
                                </button>
                              ) : (
                                <span className="btn btn-primary w-full cursor-not-allowed">
                                  Deposit
                                </span>
                              )}
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
                            {finial && (
                              <span
                                className="font-semibold text-lg py-1 px-2 hover:font-bold hover:!text-[#DF0A0A] cursor-pointer"
                                onClick={Revert}
                              >
                                <i className="bx bx-plus rotate-45"></i>
                              </span>
                            )}{" "}
                            Fund Wallet
                          </h4>
                        </div>
                        <div className="flex justify-center items-center">
                          <span onSubmit={onSubmit} className="w-50">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  Send{" "}
                                  <b>
                                    {parseFloat(
                                      depositDetails.coin_rate
                                    ).toFixed(7)}{" "}
                                    {depositDetails.currency.toUpperCase()}
                                  </b>{" "}
                                  <b>
                                    [{depositDetails.currency.toUpperCase()}]
                                  </b>{" "}
                                  to the wallet address below or scan the QR
                                  Code with your wallet app. Pease only send{" "}
                                  <b>{depositDetails.currency.toUpperCase()}</b>{" "}
                                  to the address, as any funds sent to other
                                  address may be lost forever.
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
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="formrow-password-input "
                                      placeholder={depositDetails.address}
                                      readOnly
                                    />
                                    <Clipboard
                                      id="inputGroupFileAddon04"
                                      className="btn btn-primary"
                                      option-text={getText}
                                      onSuccess={onSuccess}
                                    >
                                      <span className="clipbrd">Copy</span>
                                    </Clipboard>
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
                                    QR Code
                                  </label>
                                  <img
                                    src={''}
                                    // src={genQRCode(depositDetails.currency, depositDetails.address)}
                                    alt={`Address ${depositDetails.address}`}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="formrow-password-input"
                                    className="form-label flex justify-center items-center"
                                  >
                                    Time for transaction
                                  </label>

                                  <div className="input-group flex justify-center items-center">
                                    <h4>
                                      <Countdown
                                        date={depositDetails.expires}
                                        uid={depositDetails.uid}
                                        part="finial"
                                        renderer={render}
                                      />
                                    </h4>
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
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="formrow-password-input"
                                    className="form-label"
                                  >
                                    Send nearly or moderately close
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formrow-password-input"
                                    placeholder={depositDetails.amount}
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              {sent ? (
                                <button
                                  type="submit"
                                  className="btn btn-primary w-full"
                                >
                                  Finish
                                </button>
                              ) : (
                                <span
                                  title="Submit your prove of payment to continue."
                                  onClick={POP}
                                  className="btn btn-primary w-full -cursor-not-allowed"
                                >
                                  Finish
                                </span>
                              )}
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

export default Deposit;
