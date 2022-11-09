import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header.component";
import { Navigation } from "./components/sidenav/nav.component";
import { Body } from "./components/body/body.component";
import { Footer } from "./components/footer/footer.component";

import "./App.css";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="main-block">
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/article/:id" element={<Body />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
