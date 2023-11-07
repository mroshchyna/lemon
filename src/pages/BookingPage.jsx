import React, { useState } from "react";
import { BookingForm } from "./BookingForm";
import { BookingFinish } from "./BookingFinish";
export const BookingPage = () => {
  //   let changeIt = false;
  //   if (changeIt) {
  //     return <BookingForm />;
  //   } else {
  //     return <BookingFinish />;
  //   }
  return (
    <>
      <BookingForm />
      {/* <BookingFinish /> */}
    </>
  );
};
