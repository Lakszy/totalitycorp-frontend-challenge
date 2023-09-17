import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButton/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer"

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigateButtons></NavigateButtons>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </>
  );
};

export default Main;
