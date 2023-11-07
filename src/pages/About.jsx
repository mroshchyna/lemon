import React from "react";
import about1 from "../assets/img/871655af5e4849aa43a6d293284825002e7aeb50.jpg";
import heroImg from "../assets/img/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg";
import "./About.css";

export function About() {
  return (
    <>
      <section className="about">
        <div className="about-t">
          <h1>Little Lemon</h1>
          <h4>Taiwan</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            quae eaque officia atque nisi ut omnis, similique veniam corrupti
            mollitia fuga? Optio cupiditate labore est error tenetur repellat,
            maiores soluta natus voluptatibus explicabo id rem aut officia in
            ipsa, voluptate quae illum, ut temporibus quas. Quos minus voluptate
            cupiditate libero.
          </p>
        </div>
        <div className="about-img">
          <img className="about1" src={about1} alt="" />
          <img className="about2" src={heroImg} alt="" />
        </div>
      </section>
      ;
    </>
  );
}
