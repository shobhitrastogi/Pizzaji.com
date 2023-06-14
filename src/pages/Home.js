import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active hundred">
            <img
              src="https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=2000"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item hundred">
            <img
              src="https://images.pexels.com/photos/13985154/pexels-photo-13985154.jpeg?auto=compress&cs=tinysrgb&w=2000"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item hundred">
            <img
              src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=2000"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        id="white"
        className="headerContainer d-flex justify-content-center align-items-center d-flex flex-column mb-3"
      >
        <h1 className="p-2 mt-1">Pedro's Pizzeria</h1>
        <p className="p-2">PIZZA TO FIT ANY TASTE</p>
        <Link className="nav-link" to="/menu">
          <button className="p-2 .mb-5 btn-dark">Order Now</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
