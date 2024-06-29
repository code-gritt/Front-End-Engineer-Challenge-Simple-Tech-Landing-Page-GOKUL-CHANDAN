import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video from "../../Images/assets/Repair.mp4";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="hero_bg showBox">
      <div className="container_sub">
        <div className="hero_content">
          <h1 data-aos="fade-up" className="hero_title_QR_black">
            Tech Innovators {""}
            <span data-aos="fade-up" className="hero_title_QR">
              gives superpower to {""}
            </span>
            <span data-aos="fade-up" className="hero_title_QR_black">
              your AI driven life
            </span>
          </h1>
          <p data-aos="fade-up" className="hero_subtitle_aiagents">
            Transform your AI operations with our AI agents, automating
            categorizing and captures pics at lightning speed and unbeatable
            cost savings.
          </p>
          <a
            style={{ color: "#fff" }}
            rel="alternate"
            href="/"
            hrefLang="en"
            target="_blank"
          >
            <button className="signInVectorImgBtn_aiagents">Learn More</button>
          </a>
        </div>
        <div data-aos="zoom-in-up">
          <video
            src={video}
            className="hero_video_container"
            loop
            autoPlay
            muted
            playsInline
            poster=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
