import { Images } from "../assets/images";
import { useState } from "react";

const initial = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initial);
  //   const { isAuthenticated } = useSelector((state) => state.user);

  const { name, email, topic, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="rts-contact-area contact-one">
        <div className="container">
          <div className="row align-items-center g-0">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="contact-image-one">
                <img src={Images.contact01} alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="contact-form-area-one">
                <div className="rts-title-area contact text-start">
                  <p className="pre-title">Contact Us</p>
                  <h2 className="title">Feel free to say Hello</h2>
                </div>
                <div id="form-messages"></div>
                <form id="contact-form" onSubmit={onSubmit}>
                  <div className="name-email">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      onChange={onChange}
                      value={name}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      onChange={onChange}
                      value={email}
                      required
                      />
                  </div>
                  <input
                    type="text"
                    placeholder="Topic"
                    name="topic"
                    onChange={onChange}
                    value={topic}
                    required
                    />
                  <textarea
                    placeholder="Type Your Message"
                    name="message"
                    onChange={onChange}
                    value={message}
                    required
                  ></textarea>
                  <button type="submit" className="rts-btn btn-primary">
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;{" "}
    </>
  );
};

export default ContactForm;
