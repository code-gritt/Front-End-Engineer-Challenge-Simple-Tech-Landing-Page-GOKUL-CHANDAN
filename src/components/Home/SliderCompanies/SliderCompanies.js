import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SliderCompanies.css";
import konica from "../../../Images/assets/konica.png";
import bord from "../../../Images/assets/bord.png";
import que from "../../../Images/assets/quaefacta.png";
import nmt from "../../../Images/assets/nmt.png";
import risk from "../../../Images/assets/risk.png";

const SliderCompanies = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="logos">
        <h2 data-aos="fade-up" className="orange-text" align="center">
          Our Clients
        </h2>
        <div className="logo_items">
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
        </div>
        <div className="logo_items">
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
          <img src={konica} alt="logo" />
          <img src={bord} alt="logo" />
          <img src={que} alt="logo" />
          <img src={nmt} alt="logo" />
          <img src={risk} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default SliderCompanies;
