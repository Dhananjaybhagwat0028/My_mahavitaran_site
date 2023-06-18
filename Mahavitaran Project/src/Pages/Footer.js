import React from "react";
import { FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";
import Swal from "sweetalert";

class Footer extends React.Component {
  handleFormSubmission = (event) => {
    event.preventDefault(); // Prevent form submission

    Swal({
      title: "Thank you for subscribing!",
      text: "You have successfully subscribed to our newsletter.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  render() {
    return (
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/profile.php?id=100067774609903"
              role="button">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/"
              role="button">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://google.com"
              role="button">
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/"
              role="button">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/feed/"
              role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/Dhananjaybhagwat0028"
              role="button">
              <i className="fab fa-github"></i>
            </a>
          </section>
          <section className="">
            <form action="" onSubmit={this.handleFormSubmission}>
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                      placeholder="enter email adddress.."
                    />
                    <label className="form-label" htmlFor="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
          <section className="mb-4">
            <p>
              "Empowering the future with reliable electricity solutions,
              Mahavitran is your trusted partner for a brighter tomorrow."{" "}
              <br />
              "Experience seamless power distribution and exceptional service
              with Mahavitran, ensuring energy efficiency and sustainability for
              all."
            </p>
          </section>
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Feature</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify">
                        Real-time Power Outage Updates
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify">
                        Bill Payment and Online Services
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify">Energy Conservation Tips</p>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify">
                        Customer Support and Assistance
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Feature</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify">
                        Energy Efficiency Programs{" "}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify"> New Connection Requests</p>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify">
                        Safety Guidelines and Education
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white text-justify">
                      <p className="text-justify">
                        Renewable Energy Initiatives
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <p className="text-justify">
                      <FaHome className="me-3 " />
                      Mahavitran
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <FaEnvelope className="me-3 text-justify" />
                      info@mahavitran.com
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <FaPhone className="me-3 text-justify" />+ 91 9665670861
                    </p>
                  </li>
                  <li>
                    <p className="text-justify">
                      <FaPrint className="me-3 text-justify" />+ 91 7620539005
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          ©️ {new Date().getFullYear()} Mahavitran. All rights reserved.
          <a className="text-white" href="https://mdbootstrap.com/">
            Mahavitran.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
