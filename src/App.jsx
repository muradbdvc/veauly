import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//shareing
import { navItems } from "./data";
import Hero from "./components/hero/Hero";
import Testimonial from "./components/testimonial/Testimonial";
import Pricing from "./components/pricing/Pricing";
import Featured from "./components/featured/Featured";
import AboutUs from "./components/aboutus/AboutUs";

//pages
import About from "./components/pages/About";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-white scroll-auto">
      <header>
        <section className="bg-violet">
          <BrowserRouter>
            <div className="pt-8 text-white">
              {/*Logo*/}
              <Link
                to="/"
                className="text-3xl beautique font-light absolute py-2"
              >
                Veauly
              </Link>
            </div>

            {/** Mobile Menu */}
            <nav className="flex justify-center mx-auto absolute right-0 top-0 left-0 pt-8">
              <ul className="flex flex-raw space-x-10 rounded-4xl pl-5 border-2 border-White-lite">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <NavLink to={item.url}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Routes>
              <Route to="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
          <Hero />
        </section>
      </header>
      <Featured />
      <Testimonial />
      <Pricing />
      <AboutUs />
      <Footer />
      <p className="m-9">Hello</p>
    </div>
  );
}

export default App;
