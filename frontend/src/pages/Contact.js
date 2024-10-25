import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../component/Footer";
import Layout from "../component/Layout";
import CookieConsent from "react-cookie-consent";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const Contactservice = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:2020/contact", {
      method: "post",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "content-type": "application/json",
      },
    });
    toast.success(
      "Congratulations Your request for Contacting us has been send we will send you a message through a provided email"
    );
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };
  return (
    <Layout title={"Contact Us"}>
      <section className="contact" style={{ marginTop: "100px" }}>
        <div className="content">
          <h2 className="fw-bold text-white">Contact Us</h2>
          <p1 className="text-white my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </p1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="icon">
                <i className="fa fa-map-marker oo" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3 className="fw-bold">Address</h3>
                <p1 className="text-white">
                  4532 Pak Arab society,
                  <br />
                  Lahore. 55333
                </p1>
              </div>

              <div className="box">
                <div className="icon ">
                  <i className="fa fa-phone oo" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3 className="fw-bold ">Phone</h3>
                  <p1 className="text-white">577-777-999</p1>
                </div>
              </div>
              <div className="box">
                <div className="icon  ">
                  <i className="fa fa-envelope-o oo" aria-hidden="true"></i>
                </div>
                <div className="text">
                  <h3 className="fw-bold">Email</h3>
                  <p1 className="text-white">mahmadbhatti@gmail.com</p1>
                </div>
              </div>
            </div>

            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table ">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <h1 className="h2 text-warning fw-bold display-5 my-4">
                    Send Message
                  </h1>
                </div>
                <div className="card rounded-5">
                  <div className="card-body">
                    <div className="m-sm-4">
                      <div className="text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar6.png"
                          alt="Andrew Jones"
                          className="img-fluid rounded-circle"
                          width={132}
                          height={132}
                        />
                      </div>
                      <form>
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            className="form-control form-control-lg"
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="form-group">
                          <label>Type Your Message...</label>
                          <input
                            className="form-control form-control-lg"
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            name="nama"
                            placeholder="Write message"
                          />
                        </div>
                        <div>
                          <div className="custom-control custom-checkbox align-items-center">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              defaultValue="remember-me"
                              name="remember-me"
                              defaultChecked
                            />
                            <label className="custom-control-label text-small">
                              Remember me next time
                            </label>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <Link
                            to="/"
                            className="btn btn-lg btn-primary"
                            onClick={Contactservice}
                            value="Send"
                          >
                            Send
                          </Link>
                          {/* <button type="submit" class="btn btn-lg btn-primary">Sign in</button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/><br/>
   <div className="responsive-map container">
   <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.760531711171!2d74.33999707469441!3d31.475772949345625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709732022186!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen=""
        title="Responsive  google map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
   </div>
      <br />
      <br />
      <CookieConsent
  location="bottom"
  buttonText="Accept All Cookies"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
This website uses cookies to enhance the user experience.
This website uses cookies to enhance the user experience.
This website uses cookies to enhance the user experience.
This website uses cookies <Link to='/cookies-policy'>Cookie Policy</Link> to enhance the user experience.
This website uses cookies to enhance the user experience.
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
     </Layout>
  );
};

export default Contact;
