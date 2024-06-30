import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import compoundgif from "../../Images/assets/compound.gif";
import koala from "../../Images/assets/koala.gif";
import qadev from "../../Images/assets/qadev.gif";
import datamodel from "../../Images/assets/datamodel.gif";
import finetune from "../../Images/assets/finetune.webp";
import aiagents from "../../Images/assets/robot.png";
import aibrain from "../../Images/assets/lora.png";
import "./Blogs.css";
import link__Arrow from "../../Images/assets/link_arrow_No_Code_AI.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 996, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="features">
        <h1 data-aos="fade-up" className="feature_header">
          Blogs
        </h1>

        <div data-aos="zoom-in-up" className="slider_container">
          <Carousel pagination={false} breakPoints={breakPoints}>
            <div className="slider_grid">
              <div className="main">
                <img
                  src={aibrain}
                  width={360}
                  height={240}
                  className="blogImage"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="blogImage_header">
                Use Case - AI Agent for eCommerce - Automated Product Management
              </h1>
              <p className="blogImage_subtitle">Jun 19, 2024 · 6 min read</p>
              <div className="link">
                Read more here
                <span>
                  <img
                    className="link_arrow"
                    src={link__Arrow}
                    alt=""
                    loading="lazy"
                    width="15.2px"
                    height="15.575px"
                  />
                </span>
              </div>
            </div>

            <div className="slider_grid">
              <div className="main">
                <img
                  src={aiagents}
                  width={360}
                  height={240}
                  className="blogImage"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="blogImage_header">
                What are AI Agents?- Agents in Artificial Intelligence Explained
              </h1>
              <p className="blogImage_subtitle">May 28, 2024 · 10 min read</p>
              <div className="link">
                Read more here
                <span>
                  <img
                    className="link_arrow"
                    src={link__Arrow}
                    alt=""
                    loading="lazy"
                    width="15.2px"
                    height="15.575px"
                  />
                </span>
              </div>
            </div>

            <div className="slider_grid">
              {" "}
              <div className="main">
                <img
                  src={finetune}
                  width={360}
                  height={240}
                  className="blogImage"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="blogImage_header">
                Comparing RAG and Fine-Tuning-Which Is Better?
              </h1>
              <p className="blogImage_subtitle">May 21, 2024 · 7 min read</p>
              <div className="link">
                Read more here
                <span>
                  <img
                    className="link_arrow"
                    src={link__Arrow}
                    alt=""
                    loading="lazy"
                    width="15.2px"
                    height="15.575px"
                  />
                </span>
              </div>
            </div>

            <div className="slider_grid">
              {" "}
              <div className="main">
                <img
                  src={datamodel}
                  width={360}
                  height={240}
                  className="blogImage"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="blogImage_header">
                Uncovering Data Modeling- Creating Optimal Databases for
                Business Gains
              </h1>
              <p className="blogImage_subtitle">April 30, 2024 · 11 min read</p>
              <div className="link">
                Read more here
                <span>
                  <img
                    className="link_arrow"
                    src={link__Arrow}
                    alt=""
                    loading="lazy"
                    width="15.2px"
                    height="15.575px"
                  />
                </span>
              </div>
            </div>

            <div className="slider_grid">
              {" "}
              <div className="main">
                <img
                  src={qadev}
                  width={360}
                  height={240}
                  className="blogImage"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="blogImage_header">
                Generative AI's advantages for QA & software testing
              </h1>
              <p className="blogImage_subtitle">April 26, 2024 · 9 min read</p>
              <div className="link">
                Read more here
                <span>
                  <img
                    className="link_arrow"
                    src={link__Arrow}
                    alt=""
                    loading="lazy"
                    width="15.2px"
                    height="15.575px"
                  />
                </span>
              </div>
            </div>

            <div className="slider_grid">
              {" "}
              <div className="main">
                <img
                  src={koala}
                  width={360}
                  height={240}
                  className="blogImage"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="blogImage_header">
                Introducing Koala-Berkeley University's LLaMA-Based Model
              </h1>
              <p className="blogImage_subtitle">April 23, 2024 · 7 min read</p>
              <div className="link">
                Read more here
                <span>
                  <img
                    className="link_arrow"
                    src={link__Arrow}
                    alt=""
                    loading="lazy"
                    width="15.2px"
                    height="15.575px"
                  />
                </span>
              </div>
            </div>

            <div className="slider_grid">
              <div className="main">
                <img
                  src={compoundgif}
                  width={360}
                  height={240}
                  className="blogImage"
                  alt=""
                  loading="lazy"
                />
              </div>
              <h1 className="blogImage_header">
                The Rise of Compound AI Systems Above Conventional AI Models
              </h1>
              <p className="blogImage_subtitle">April 15, 2024 · 8 min read</p>
              <div className="link">
                Read more here
                <span>
                  <img
                    className="link_arrow"
                    src={link__Arrow}
                    alt=""
                    loading="lazy"
                    width="15.2px"
                    height="15.575px"
                  />
                </span>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Blogs;
