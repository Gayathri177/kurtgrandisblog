import React from "react";
import SDONE from "../Components/images/SliderImage1.jpg";
import SDTWO from "../Components/images/SliderImage2.jpg";
import SDTHREE from "../Components/images/SliderImage3.jpg";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={SDONE} class="d-block w-100" alt="sdone" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Kurt Grandis</h1>
            <h5> Software Engineering & Entrepreneurship </h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={SDTWO} class="d-block w-100" alt="sdtwo" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Kurt Grandis</h1>
            <h5> Software Engineering & Entrepreneurship </h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={SDTHREE} class="d-block w-100" alt="sdthree" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Kurt Grandis</h1>
            <h5> Software Engineering & Entrepreneurship </h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
