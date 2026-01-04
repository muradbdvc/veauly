import React from "react";
import "./pricing.scss";

const Pricing = () => {
  return (
    <div className="container text-black h-screen gap-y-5">
      <div className="text-center">
        <h3>Pricing Plans</h3>
        <p>Clear, transparent pricing for every stage.</p>
      </div>
      <section className="gap-5 flex">
        <div className="initial pricing bg-black text-white">
          <span>Initial</span>
          <h2>$750</h2>
          <p>
            Perfect for entrepreneurs or small brands building their identity
            from scratch.
          </p>
          <ul className="list-['+'] list-inside">
            <p>What's included ?</p>
            <li>Basic visual identity</li>
            <li>Very light market research</li>
            <li>UX/UI layout for up to 1 pages</li>
            <li>Simple landing page</li>
            <li>Simple website setup</li>
            <li>One monthly support message via email</li>
            <li>Simple intro micro-animation (5–8 seconds)</li>
            <li>No brand strategy or additional assets included</li>
            <li>Limited revisions and adjustments</li>
          </ul>
        </div>
        <div className="custom pricing">
          <span>Custom Project</span>
          <h2>$1,499</h2>
          <p>
            Ideal for established brands or corporations needing full-scale
            strategic support.
          </p>
          <ul className="list-['+'] list-inside">
            <p>What's included ?</p>
            <li>Basic visual identity</li>
            <li>Very light market research</li>
            <li>UX/UI layout for up to 1 pages</li>
            <li>Simple landing page</li>
            <li>Simple website setup</li>
            <li>One monthly support message via email</li>
            <li>Simple intro micro-animation (5–8 seconds)</li>
            <li>No brand strategy or additional assets included</li>
            <li>Limited revisions and adjustments</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
