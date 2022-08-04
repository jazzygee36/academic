import React from "react";

import Carousel from "./carousel";
import Layouts from "./teachMe";
import Courses from "./courses";
import Plan from "./plan";
import Navbar from "./navbar";

import Footer from "./footer";



import "./index.css";

const Index = () => {
  return (
    <>
      <Navbar/>
      <Carousel />
      <Layouts />
      <Courses />
      <Plan />
      <Footer />
    </>
  );
};

export default Index;
