import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Testimonial from "./components/testimonial/Testimonial";
import Pricing from "./components/pricing/Pricing";
import Featured from "./components/featured/Featured";
import AboutUs from "./components/aboutus";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

//pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";

function HomeLayout() {
  return (
    <div className="min-h-screen overflow-hidden text-white scroll-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Other Sections */}
      <Featured />
      <Testimonial />
      <Pricing />
      <AboutUs />
      <Footer />
    </div>
  );
}

function AboutLayout() {
  return (
    <div className="min-h-screen overflow-hidden text-white scroll-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* About Page Content */}
      <About />
      
      {/* Common Footer */}
      <Footer />
    </div>
  );
}

function WorksLayout() {
  return (
    <div className="min-h-screen overflow-hidden text-white scroll-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Works Page Content */}
      <Work />
      
      {/* Common Footer */}
      <Footer />
    </div>
  );
}

function ContactLayout() {
  return (
    <div className="min-h-screen overflow-hidden text-white scroll-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Contact Page Content */}
      <Contact />
      
      {/* Common Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/works" element={<WorksLayout />} />
        <Route path="/contact" element={<ContactLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
