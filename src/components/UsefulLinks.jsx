import { useState } from 'react'
import { Link } from 'react-router-dom';

const UsefulLinks = ({ current }) => {
    const [curr] = useState(current)

  return (
    <>
      <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 pl--50 pl_md--0 pl-lg-controler pl_sm--0">
        {/* <!-- single wizered start --> */}
        <div className="rts-single-wized Categories service">
          <div className="wized-header">
            <h5 className="title">Useful Links</h5>
          </div>
          <div className="wized-body">
            {/* <!-- single categoris --> */}
            <ul className={`single-categories ${curr==='copytrading'?'IsActive':''}`}>
              <li>
                <Link to="/copy-trading">
                  Copy Trading <i className="far fa-long-arrow-right"></i>
                </Link>
              </li>
            </ul>
            {/* <!-- single categoris End --> */}
            {/* <!-- single categoris --> */}
            <ul className={`single-categories ${curr==='forextrading'?'IsActive':''}`}>
              <li>
                <Link to="/forex-trading">
                  Forex Trading <i className="far fa-long-arrow-right"></i>
                </Link>
              </li>
            </ul>
            {/* <!-- single categoris End --> */}
            {/* <!-- single categoris --> */}
            <ul className={`single-categories ${curr==='stocktrading'?'IsActive':''}`}>
              <li>
                <Link to="/stock-trading">
                  Stock Trading <i className="far fa-long-arrow-right"></i>
                </Link>
              </li>
            </ul>
            {/* <!-- single categoris End --> */}
            {/* <!-- single categoris --> */}
            <ul className={`single-categories ${curr==='cryptotrading'?'IsActive':''}`}>
              <li>
                <Link to="/crypto-trading">
                  Crypto Trading <i className="far fa-long-arrow-right"></i>
                </Link>
              </li>
            </ul>
            {/* <!-- single categoris End --> */}
            {/* <!-- single categoris --> */}
            <ul className={`single-categories ${curr==='optionstrading'?'IsActive':''}`}>
              <li>
                <Link to="/options-trading">
                  Options Trading <i className="far fa-long-arrow-right"></i>
                </Link>
              </li>
            </ul>
            {/* <!-- single categoris End --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default UsefulLinks