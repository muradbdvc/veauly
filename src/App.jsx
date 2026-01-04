import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Testimonial from "./components/testimonial/Testimonial";
import Pricing from "./components/pricing/Pricing";
import Featured from "./components/featured/Featured";
import AboutUs from "./components/aboutus/AboutUs";

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-white scroll-auto">
      <section className="bg-violet">
        <Header />
        <Hero />
      </section>
      <Featured />
      <Testimonial />
      <Pricing />
      <AboutUs />
      <p className="m-9">Hello</p>
    </div>
  );
}

export default App;
