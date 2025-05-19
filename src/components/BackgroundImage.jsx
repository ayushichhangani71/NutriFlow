import React from "react";
import mealBg from "../assets/background.jpg";

const BackgroundImage = () => {
  return (
    <img
      src={mealBg}
      alt="Meal Plan Background"
      className="absolute top-0 left-0 w-full h-60 object-cover brightness-75 z-0"
    />
  );
};

export default BackgroundImage;