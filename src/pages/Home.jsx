import React from "react";
import heroImg from "../assets/img/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg";
import rppl1 from "../assets/img/person1.png";
import "./Home.css";
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-w">
          <h1>Little Lemon</h1>
          <h4>Taiwan</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            animi eligendi ea ex beatae reprehenderit excepturi voluptatibus
            aliquam dolorum consectetur?
          </p>
          <button onClick={console.log("clicked")}>Reserve a Table</button>
        </div>

        <img className="hero-img" src={heroImg} alt="" />
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="cards-rate">
          <article className="card-rate">
            <img src={rppl1} alt="" />
            <div className="card-profile">
              <h6>Jessica</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, nesciunt.
              </p>
            </div>
          </article>
          <article className="card-rate">
            <img src={rppl1} alt="" />
            <div className="card-profile">
              <h6>Josh</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, nesciunt.
              </p>
            </div>
          </article>
          <article className="card-rate">
            <img src={rppl1} alt="" />
            <div className="card-profile">
              <h6>Jayden</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, nesciunt.
              </p>
            </div>
          </article>
          <article className="card-rate">
            <img src={rppl1} alt="" />
            <div className="card-profile">
              <h6>John</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, nesciunt.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
