import React from "react";
import cardImg1 from "../assets/img/d4ac7f08664b3ab85e379c0cfcfb44c74aa0a76e.jpg";
import cardImg2 from "../assets/img/957db75e6b654e07f65da12b96dc858c5995ed28.jpg";
import cardImg3 from "../assets/img/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg";
import "./Menu.css";
export function Menu() {
  return (
    <section className="highlights">
      <div className="header">
        <h4>Specials</h4>
        {/* <button>Online Menu</button> */}
      </div>
      <div className="cards">
        <article className="card">
          <img src={cardImg1} alt="" />
          <div className="card-content">
            <h6>Pasta</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              laborum, eos quasi vel a impedit consectetur beatae quibusdam sit
              ipsam.
            </p>
            <a href="">Order a delivery</a>
          </div>
        </article>
        <article className="card">
          <img src={cardImg2} alt="" />
          <div className="card-content">
            <h6>Sandwich</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ab
              asperiores doloribus deleniti ratione delectus commodi distinctio
              natus pariatur!
            </p>
            <a href="">Order a delivery</a>
          </div>
        </article>
        <article className="card">
          <img src={cardImg3} alt="" />
          <div className="card-content">
            <h6>Salad</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              optio blanditiis sapiente sed omnis vero, ducimus eaque
              reprehenderit id molestias?
            </p>
            <a href="">Order a delivery</a>
          </div>
        </article>
      </div>
    </section>
  );
}
