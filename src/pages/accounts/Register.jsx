import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Register, checkEmaila } from "../../features/users";
import { getActivities } from "../../features/dashboard";

import { ToastContainer, toast } from "react-toastify";
import DashboardHelmet from "../../components/Helmets/Dashboard";
import { Images } from "../../assets/images";

const initial = {
  first_name: "",
  last_name: "",
  username: "",
  email: "", //
  password: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  country: "",
  zip_code: "",
  confirmPassword: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const { registered, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const { activities } = useSelector((state) => state.dashboard);
  const [formData, setFormData] = useState(initial);
  const [ee, setEE] = useState(!0);

  const {
    first_name,
    last_name,
    username,
    email,
    password,
    address,
    address2,
    city,
    state,
    country,
    zip_code,
    confirmPassword,
  } = formData;

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

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      checkEmail(e.target.value);
    }
  };

  const checkEmail = async (email) => {
    try {
      const res = await dispatch(checkEmaila({ email }));
      if (res.meta.requestStatus.toLowerCase() === "fulfilled") {
        if (res?.payload?.email === "found") {
          Toast("error", `${email} has been used, Try another`);
          setEE(!1);
        } else {
          setEE(!0);
        }
      }
    } catch (err) {}
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // await checkEmail(email);

    let pw = !0;
    let ce = !0;
    let res;
    if (first_name === null || first_name === "") {
      Toast("error", "First name is required");
      ce = !1;
    }
    if (last_name === null || last_name === "") {
      Toast("error", "Last name is required");
      ce = !1;
    }
    if (username === null || username === "") {
      Toast("error", "Username is required");
      ce = !1;
    }
    if (email === null || email === "") {
      Toast("error", "Email is required");
      ce = !1;
    }
    if (
      (address === null || address === "") &&
      (city === null || city === "") &&
      (state === null || state === "") &&
      (country === null || country === "") &&
      (zip_code === null || zip_code === "")
    ) {
      Toast("error", "All address details are required");
      ce = !1;
    } else if (
      address === "" ||
      city === "" ||
      state === "" ||
      country === "" ||
      zip_code === ""
    ) {
      Toast("error", "Address details not completed");
      ce = !1;
    }
    if (password === null || password === "") {
      Toast("error", "Password is required");
      ce = !1;
      pw = !1;
    }
    if (!pw && password !== confirmPassword)
      Toast("error", `Both passwords don't match`);

    ce && (await checkEmail(email));

    if (pw && ee && ce) {
      try {
        res = await dispatch(
          Register({
            first_name,
            last_name,
            username,
            email,
            password,
            address,
            address2,
            city,
            state,
            country,
            zip_code,
          })
        );
        if (res.meta.requestStatus.toLowerCase() === "rejected") {
          if (res.payload.statusText.toLowerCase() === "bad request") {
            Toast("error", `${res?.payload?.detail[0]}`);
          }
        } else {
          Toast("success", "Account successfully created, Login to continue");
          await dispatch(
            getActivities({
              message: "You have successfully created an account.",
            })
          );
          setTimeout(() => {
            <Navigate to="/login" />;
          }, 2000);
        }
      } catch (err) {
        Toast("error", `Can't register you now, We are working to fix this.`);
      }
    }
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;
  return (
    <>
      <DashboardHelmet title="Register new account" />
      <ToastContainer />
      <div className="account-pages my-4 lg:my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="w-[95%] lg:w-[80%]">
              <div className="card overflow-hidden">
                <div className="bg-danger bg-soft lg:h-[130px]">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primarys p-4">
                        <h5 className="text-primarys lg:text-lg">
                          Free Register
                        </h5>
                        <p className="lg:text-base">
                          Get your free Bitbinglive account now.
                        </p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end lg:h-[130px] lg:flex lg:items-end lg:justify-end">
                      <img
                        src={Images.profileImg}
                        alt="illustration"
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
                    <form className="needs-validation" onSubmit={onSubmit}>
                      <div className="lg:flex">
                        <div className="mb-3 lg:w-[50%]">
                          <label htmlFor="fname" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fname"
                            value={first_name}
                            name="first_name"
                            onChange={onChange}
                            placeholder="Enter first name"
                          />
                          <div className="invalid-feedback">
                            Please Enter First Name
                          </div>
                        </div>

                        <div className="mb-3 lg:w-[50%] lg:pl-5">
                          <label htmlFor="lname" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lname"
                            value={last_name}
                            name="last_name"
                            onChange={onChange}
                            placeholder="Enter last name"
                          />
                          <div className="invalid-feedback">
                            Please Enter Last Name
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex">
                        <div className="mb-3 lg:w-[50%]">
                          <label htmlFor="username" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            name="username"
                            onChange={onChange}
                            placeholder="Enter username"
                          />
                          <div className="invalid-feedback">
                            Please Enter Username
                          </div>
                        </div>

                        <div className="mb-3 lg:w-[50%] lg:pl-5">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            name="email"
                            onChange={onChange}
                            placeholder="Enter email"
                          />
                          <div className="invalid-feedback">
                            Please Enter Email
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex">
                        <div className="mb-3 lg:w-[50%]">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            value={address}
                            name="address"
                            onChange={onChange}
                            placeholder="Enter street address"
                          />
                          <div className="invalid-feedback">
                            Please Enter Address
                          </div>
                        </div>

                        <div className="mb-3 lg:w-[50%] lg:pl-5">
                          <label htmlFor="address2" className="form-label">
                            Address 2 [Apt., Suit, No.] <i>Optional</i>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address2"
                            name="address2"
                            placeholder="Enter address 2"
                          />
                          <div className="invalid-feedback">
                            Please Enter Address
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex">
                        <div className="mb-3 lg:w-[50%]">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            value={city}
                            name="city"
                            onChange={onChange}
                            placeholder="Enter city"
                          />
                          <div className="invalid-feedback">
                            Please Enter City
                          </div>
                        </div>
                        <div className="mb-3 lg:w-[50%] lg:pl-5">
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="state"
                            value={state}
                            name="state"
                            onChange={onChange}
                            placeholder="Enter state"
                          />
                          <div className="invalid-feedback">
                            Please Enter State
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex">
                        <div className="mb-3 lg:w-[50%]">
                          <label htmlFor="zip_code" className="form-label">
                            Zip Code
                          </label>
                          <input
                            type="number"
                            className="form-control numb"
                            id="zip_code"
                            value={zip_code}
                            name="zip_code"
                            onChange={onChange}
                            placeholder="Enter zip code"
                          />
                          <div className="invalid-feedback">
                            Please Enter Zip Code
                          </div>
                        </div>

                        <div className="mb-3 lg:w-[50%] lg:pl-5">
                          <label htmlFor="zip_code" className="form-label">
                            Country
                          </label>

                          <select
                            name="country"
                            className="form-control"
                            id="country"
                            value={country}
                            onChange={onChange}
                          >
                            <option value="" defaultValue={!0}>
                              Select Country
                            </option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">
                              Brunei Darussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">
                              Congo, The Democratic Republic of The
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">
                              Heard Island and Mcdonald Islands
                            </option>
                            <option value="Holy See (Vatican City State)">
                              Holy See (Vatican City State)
                            </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">
                              Iran, Islamic Republic of
                            </option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea, Republic of">
                              Korea, Republic of
                            </option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                              Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">
                              Micronesia, Federated States of
                            </option>
                            <option value="Moldova, Republic of">
                              Moldova, Republic of
                            </option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">
                              Netherlands Antilles
                            </option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">
                              Russian Federation
                            </option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="Saint Vincent and The Grenadines">
                              Saint Vincent and The Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia and Montenegro">
                              Serbia and Montenegro
                            </option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">
                              South Georgia and The South Sandwich Islands
                            </option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">
                              Svalbard and Jan Mayen
                            </option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">
                              Syrian Arab Republic
                            </option>
                            <option value="Taiwan, Province of China">
                              Taiwan, Province of China
                            </option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">
                              Tanzania, United Republic of
                            </option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">
                              United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">
                              Virgin Islands, British
                            </option>
                            <option value="Virgin Islands, U.S.">
                              Virgin Islands, U.S.
                            </option>
                            <option value="Wallis and Futuna">
                              Wallis and Futuna
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                          <div className="invalid-feedback">
                            Please Enter Zip Code
                          </div>
                        </div>
                      </div>

                      <div className="lg:flex">
                        <div className="mb-3 lg:w-[50%]">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <div className="input-group auth-pass-inputgroup">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Enter password"
                              aria-label="Password"
                              aria-describedby="password-addon"
                              onChange={onChange}
                              value={password}
                            />
                            <button
                              className="btn btn-light "
                              type="button"
                              id="password-addon"
                            >
                              <i className="mdi mdi-eye-outline"></i>
                              {/* <i className="mdi mdi-eye-off-outline"></i> */}
                            </button>
                          </div>
                          <div className="invalid-feedback">
                            Please Enter Password
                          </div>
                        </div>

                        <div className="mb-3 lg:w-[50%] lg:pl-5">
                          <label htmlFor="password" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={confirmPassword}
                            name="confirmPassword"
                            onChange={onChange}
                            placeholder="Confirm password"
                          />
                          <div className="invalid-feedback">
                            Please Confirm Password
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 d-grid">
                        <button
                          className="hover:!bg-[#FA360A] btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Bitbinglive{" "}
                          <Link to="/terms" className="text-primarys">
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="fw-medium text-primarys">
                      Login
                    </Link>
                  </p>
                  <p>© {new Date().getFullYear()} Bitbinglive. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
