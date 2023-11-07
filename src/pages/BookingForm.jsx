import React, { useState } from "react";
import { BookingFinish } from "./BookingFinish";
import "./BookingForm.css";
export function BookingForm(props) {
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const date = reservation.date;
  const time = reservation.time;
  const guests = reservation.guests;
  const occasion = reservation.occasion;
  console.log(guests);
  const [isSubmit, setIsSubmitted] = useState(true);
  function changePage(e) {
    console.log("fail");
    e.preventDefault();
    setIsSubmitted(!isSubmit);
    console.log(isSubmit);
    if (isSubmit) {
      document.getElementById("formStyle").style.display = "none";
      document.getElementById("bookingFinish").style.display = "grid";
      document.getElementById("bookingFinishBtn").style.display = "flex";
    } else {
      document.getElementById("formStyle").style.display = "grid";
      document.getElementById("bookingFinish").style.display = "none";
      document.getElementById("bookingFinishBtn").style.display = "none";
    }
  }
  function checkFin(e) {
    if (date != "") {
      if (time != "") {
        if (guests < 10) {
          if (occasion != "") {
            changePage(e);
          }
        }
      }
    }
  }
  return (
    <>
      <div className="container">
        <BookingFinish
          date={date}
          time={time}
          guests={guests}
          occasion={occasion}
        />
        <input
          id="bookingFinishBtn"
          type="submit"
          value="Make another reservation"
          onClick={changePage}
          style={{
            justifyContent: "center",
            marginBottom: "2em",
            display: "none",
          }}
        />
        <form id="formStyle" className="res-form">
          <h1>Reservation</h1>
          <label htmlFor="date">Reservation Date</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
            required
          />
          {!date && (
            <span
              id="date"
              className="errorMessage"
              // style={{ visibility: "visible" }}
            >
              Please select the date.
            </span>
          )}

          <label htmlFor="time">Reservation Time</label>
          <select name="time" id="time" onChange={handleChange} required>
            <option value="">--Please select a time--</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          {time == "" && (
            <span id="time" className="errorMessage">
              Don't forget to select the time you want to reserve.
            </span>
          )}
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="1"
            min="1"
            max="10"
            onChange={handleChange}
            required
          />
          {guests > 10 && (
            <span className="errorMessage">
              Number of Guests should be between 1 - 10.
            </span>
          )}
          {guests < 1 && (
            <span className="errorMessage">
              Number of Guests should be between 1 - 10.
            </span>
          )}
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            id="occasion"
            onChange={handleChange}
            required
          >
            <option value="">--Please select the type of occasion--</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Dating">Dating</option>
            <option value="Celebration">Celebration</option>
            <option value="Others">Others</option>
          </select>
          {occasion == "" && (
            <span id="occasion" className="errorMessage">
              You haven't chosen the occasion yet.
            </span>
          )}
          <input
            type="submit"
            value="Make your reservation"
            // onClick={changePage}
            onClick={checkFin}
          />
        </form>
      </div>
    </>
  );
}
