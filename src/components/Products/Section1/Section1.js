import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="features">
        <h1 data-aos="fade-up" className="feature_header_black">
          Tech Innovators Workforce to build{" "}
          <span className="feature_header">10X Growth</span>
        </h1>

        <p
          style={{ width: "75%", margin: "auto" }}
          data-aos="fade-up"
          className="feature_subtitle2"
        >
          Tech Innovators helps you to use the right AI Agents and build your AI
          Workforce effortlessly, simplifying Cataloging, Marketing, and Sales
          operations for any e-Commerce company. Whether you are a beginner or
          an experienced professional, Tech Innovators provides the tools and
          support you need to scale your e-Commerce business using AI.
        </p>
      </section>
    </>
  );
};

export default Section1;
