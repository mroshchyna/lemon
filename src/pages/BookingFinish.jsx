import "./BookingForm";
import React, { useEffect } from "react";
import "./BookingFinish.css";
export function BookingFinish(props) {
  return (
    <>
      <div id="bookingFinish">
        <h1>
          Thanks for choosing{" "}
          <span style={{ color: "#f4ce14" }}>Little Lemon</span> !
          <br />
          Your reservation has succeeded 🥰
        </h1>
        <div className="resCard">
          <h4>Reservation Date: {props.date}</h4>
          <h4>Reservation Time: {props.time}</h4>
          <h4>Number of People: {props.guests}</h4>
          <h4>Occasion: {props.occasion}</h4>
        </div>
      </div>
    </>
  );
}
