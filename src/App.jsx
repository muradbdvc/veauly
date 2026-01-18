import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Hero from "./components/hero";
import Testimonial from "./components/testimonial/Testimonial";
import Pricing from "./components/pricing";
import Featured from "./components/featured";
import AboutUs from "./components/aboutus";
import Navbar from "./components/navbar/";
import Footer from "./components/footer";
import ErrorBoundary from "./components/ui/ErrorBoundary";

//pages
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Work = lazy(() => import("./components/pages/Work"));
const Contact = lazy(() => import("./components/pages/Contact"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

function HomeLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-hidden text-white scroll-auto">
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
    </ErrorBoundary>
  );
}

function AboutPageLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-hidden text-white scroll-auto">
        <Navbar />
        
        {/* About Page Content */}
        <About />
        
        {/* Common Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

function WorksLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-hidden text-white scroll-auto">
        <Navbar />
        
        {/* Works Page Content */}
        <Work />
        
        {/* Common Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

function ContactLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-hidden text-white bg-white scroll-auto">
        <Navbar />
        
        {/* Contact Page Content */}
        <Contact />
        
        {/* Common Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomeLayout />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutPageLayout />
            </Suspense>
          } />
          <Route path="/works" element={
            <Suspense fallback={<div>Loading...</div>}>
              <WorksLayout />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<div>Loading...</div>}>
              <ContactLayout />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;