import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import GlobalStyle from "./globalStyles";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
