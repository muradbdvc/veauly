import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testimonial from "./components/testimonial/Testimonial";
import Pricing from "./components/pricing/Pricing";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-white">
      <section className="bg-violet">
        <Header />
        <Hero />
      </section>
      <Featured />
      <Testimonial />
      <Pricing />
      <p className="m-9">Hello</p>
    </div>
  );
}

export default App;
