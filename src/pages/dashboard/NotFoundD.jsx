import { Link } from 'react-router-dom';
import { Images } from '../../assets/images';
import DashboardHelmet from '../../components/Helmets/Dashboard';

const NotFoundD = () => {
  return (
    <>
      <DashboardHelmet
        title="Page Not Found"
      />
      <div className="account-pages my-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h1 className="display-2 fw-medium">
                  4
                  <i className="bx bx-buoy bx-spin text-[#DF0A0A] display-3"></i>
                  4
                </h1>
                <h4 className="text-uppercase">
                  Sorry, this page was not found
                </h4>
                <div className="mt-5 text-center">
                  <Link
                    className="btn btn-primary bg-[#DF0A0A] border-2 border-[#DFA0A0] hover:bg-white hover:!text-[#DF0A0A] hover:border-[#DF0A0A] waves-effect waves-light"
                    to="/dashboard"
                  >
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-6">
              <div>
                <img src={Images.errorImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundD