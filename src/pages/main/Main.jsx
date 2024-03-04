import React from "react";
import Loader from "../../components/mainPage/loader/Loader";
import Catalog from "../../components/mainPage/catalog/Catalog";
import About from "../../components/mainPage/about/About";

const Main = () => {
  return (
    <>
      <Loader />
      <Catalog />
      <About />
    </>
  );
};

export default Main;
