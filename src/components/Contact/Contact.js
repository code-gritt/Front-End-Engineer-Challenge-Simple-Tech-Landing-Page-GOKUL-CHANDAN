import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="features showBox">
        <div className="container">
          <div className="common_gap">
            <div style={{ alignSelf: "start" }}>
              <h1 data-aos="fade-up" className="feature_header">
                Reach out to know more on how AI can accelerate your business
              </h1>
            </div>
            <div className="col col--6">
              <div data-aos="zoom-in-up" className="formContainer">
                <TextField
                  type="text"
                  className="nameInput"
                  id="outlined-basic"
                  label="Please enter your email*"
                  variant="outlined"
                />

                <div className="contactFormGrid">
                  <div>
                    <p>
                      <TextField
                        type="text"
                        className="companyName"
                        id="outlined-basic"
                        label="First name*"
                        variant="outlined"
                      />
                    </p>
                  </div>
                  <div>
                    <p>
                      <TextField
                        type="text"
                        className="companyName"
                        id="outlined-basic"
                        label="Last name*"
                        variant="outlined"
                      />
                    </p>
                  </div>
                </div>
                <p className="inlineText">What is your Profession?*</p>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    {" "}
                    <FormControlLabel
                      className="inlineText"
                      control={<Checkbox />}
                      label="Student"
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      className="inlineText"
                      control={<Checkbox />}
                      label="Working Professional - Developer"
                    />
                  </li>
                  <li>
                    <FormControlLabel
                      className="inlineText"
                      control={<Checkbox />}
                      label="Working Professional - Non-Developer"
                    />
                  </li>
                </ul>

                <TextField
                  className="textArea"
                  multiline
                  rows={4}
                  maxRows={6}
                  type="text"
                  id="outlined-basic"
                  label="Share your requirement*"
                  variant="outlined"
                />
                <button type="submit" className="formButton">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
