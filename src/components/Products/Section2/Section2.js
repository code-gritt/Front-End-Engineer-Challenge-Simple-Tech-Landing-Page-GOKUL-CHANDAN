import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Section2.css";
import product from "../../../Images/assets/Product.png";
import marketing from "../../../Images/assets/Marketing.png";
import catalogue from "../../../Images/assets/Catalogue.png";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="features">
        <div className="containersav">
          <h1 data-aos="fade-up" className="feature_header_black">
            Self-Service for {""}
            <span className="feature_header">Customers</span>
          </h1>
          <div className="rowsav">
            <div data-aos="zoom-in-up" className="service">
              <i className="ri-macbook-line">
                <img src={product} alt="" loading="lazy" />
              </i>

              <h2 className="users-header">Immediate Response Team</h2>
            </div>
            <div data-aos="zoom-in-up" className="service">
              <i className="ri-store-3-line">
                {" "}
                <img src={marketing} alt="" loading="lazy" />
              </i>
              <h2 className="users-header">
                AI driven Accounting & Sales Automation
              </h2>
            </div>
            <div data-aos="zoom-in-up" className="service">
              <i className="ri-database-2-line">
                {" "}
                <img src={catalogue} alt="" loading="lazy" />
              </i>
              <h2 className="users-header">AI Acomplished Automation</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
