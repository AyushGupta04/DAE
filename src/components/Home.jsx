import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../css/Home.css";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [visibleItems, setVisibleItems] = useState(9);
 
  const slides = [
    "https://www.istm.gov.in/uploads/thumbs_banner_home/karmayogi-3_thumb.jpg",
    "https://www.istm.gov.in/uploads/thumbs_banner_home/karmayogi_1_thumb.jpg",
    "https://www.istm.gov.in/uploads/thumbs_banner_home/karmayogi-2_thumb.jpg",
    "https://www.istm.gov.in/uploads/thumbs_banner_home/republicday-2024_thumb.jpg",
    "https://www.istm.gov.in/uploads/thumbs_banner_home/istm-2024_thumb.jpg",
  ];

  const images = [
    "https://www.istm.gov.in/uploads/thumbs_banner_home/karmayogi-3_thumb.jpg",
    "https://www.istm.gov.in/uploads/thumbs_banner_home/karmayogi_1_thumb.jpg",
    "https://www.istm.gov.in/uploads/thumbs_banner_home/karmayogi-2_thumb.jpg",
    "https://www.istm.gov.in/uploads/thumbs_banner_home/republicday-2024_thumb.jpg"
  ];

  const notifications = [
    "NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV",
    "ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1",
    "NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV",
    "ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1",
    "NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV",
    "ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1",
    "NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV",
    "ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1",
    "NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV",
    "ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1",
    "NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV",
    "ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1",
    "NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV",
    "ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="imgSlider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`mySlides ${
                index === currentSlide ? "displayBlock" : "displayNone"
              }`}
            >
              <img src={slide} alt="Slide" />
            </div>
          ))}
        </div>
        <div className="notifyRight">
  <h3>Notification</h3>
  <div className="notificationList">
    <ul>
      {notifications.slice(0, visibleItems).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>
      </div>

      <div className="centerBlock">
        <div className="centertems">
          <div className="center-menu">
            <NavLink to="/DAE/form">Online Nomination Form</NavLink>
            <NavLink to="/home">Knowledge Portal</NavLink>
            <NavLink to="/company">Archives</NavLink>
          </div>
        </div>
      </div>

      <div className="headline">
        <a>
          Registration for Foundation Training Programme of Assistant Section
          Officer Probationers(SSC CGLE-2023)
        </a>
      </div>

      <div className="card-box">
        <div className="card">
          <h1 style={{ textAlign: "center" }}>Director Message</h1>
          <img
            src="https://www.istm.gov.in//uploads/director_image/ISTM_Logo_thumb.png"
            alt="Jane Doe's Profile Picture"
          />
          <span style={{ lineHeight: "2", textAlign: "text-justify" }}>
            The Institute of Secretariat Training and Management (ISTM) was
            established in the May 1948. Over the years, ISTM has emerged as a
            premier Central Training Institution in training of officers working
            in the Central Secretariat, State Governments/Union Territories,
            Public Sector Enterprises (PSEs) and Autonomous Bodies. Central...
          </span>
        </div>
        <div className="card">
          <h1 style={{ textAlign: "center" }}>News & Events</h1>
          <ul>
            <li>NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV</li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
          </ul>
        </div>
        <div className="card">
          <h1 style={{ textAlign: "center" }}>Upcoming Courses</h1>
          <ul>
            <li>NEWSLETTER - ISTM NEWS Oct TO Dec 2023 Vol.14, Issue - IV</li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
            <li>
              ISTM Library Information Bulletin - February 2024 Vol.3, Issue 1
            </li>
          </ul>
        </div>
      </div>

      <div className="card-box">
        <div className="cardimg">
          <h1 style={{ padding: "15px", fontSize: "22px" }}>Photo Gallery</h1>
          <div className="card-container">
          {images.map((image, index) => (
            <Card
              key={index}
              image={image}
              title={`Image ${index + 1}`}
            />
          ))}
          </div>      
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
