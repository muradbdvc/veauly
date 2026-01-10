import React from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Initial",
    price: "$750",
    description: "Perfect for entrepreneurs or small brands building their identity from scratch.",
    features: [
      "Basic visual identity",
      "Very light market research", 
      "UX/UI layout for up to 1 pages",
      "Simple landing page",
      "Simple website setup",
      "One monthly support message via email",
      "Simple intro micro-animation (5–8 seconds)",
      "No brand strategy or additional assets included",
      "Limited revisions and adjustments"
    ],
    popular: false,
    colorClass: "gradient-violet-dark"
  },
  {
    id: 2,
    name: "Custom Project",
    price: "$1,499",
    description: "Ideal for established brands or corporations needing full-scale strategic support.",
    features: [
      "Complete visual identity system",
      "Comprehensive market research & analysis",
      "UX/UI layout for up to 10 pages",
      "Advanced landing page with animations",
      "Full website development & deployment",
      "Unlimited monthly support via email & calls",
      "Advanced micro-animations (15–30 seconds)",
      "Complete brand strategy & asset creation",
      "Unlimited revisions until satisfaction",
      "Priority support & faster delivery",
      "SEO optimization & performance tracking"
    ],
    popular: true,
    colorClass: "custom"
  }
];

const Pricing = () => {
  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear, transparent pricing for every stage of your business growth.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative text-white p-8 md:p-12 rounded-2xl ${plan.colorClass} ${
                plan.popular ? 'ring-4 ring-violet-400 scale-105' : ''
              } transform transition-all duration-300 hover:scale-105`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Name & Price */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl md:text-5xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-200">{plan.description}</p>
              </div>
              
              {/* Features List */}
              <div className="mb-8">
                <p className="text-lg font-semibold mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-white text-violet-600 hover:bg-gray-100' 
                  : 'bg-violet-600 text-white hover:bg-violet-700'
              }`}>
                {plan.popular ? 'Get Started Now' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </section>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom solution? 
            <a href="/contact" className="text-violet-600 hover:text-violet-700 font-medium ml-1">
              Contact us for a tailored quote.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
