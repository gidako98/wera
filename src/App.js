import React from "react";
import Header from "./components/Header";
import TabbedProductList from "./components/TabbedProductList";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <TabbedProductList />
      <Contact />
    </div>
  );
}

export default App;
