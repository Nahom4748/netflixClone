import React from "react";
import Nav from "../Navigation/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
