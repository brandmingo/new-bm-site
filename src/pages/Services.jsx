// import React from "react";
// import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";

// function Services() {
//   // second section
//   const stats = [
//     {
//       title: "250+ Successful Projects",
//       desc: "We’ve delivered 250+ fully optimized websites, campaigns, and brand solutions that drive real business growth",
//     },
//     {
//       title: "180+ Happy Clients",
//       desc: "Brands across industries trust Brandmingo for impactful marketing, creative excellence, and consistent results",
//     },
//     {
//       title: "360° Service Expertise",
//       desc: "From Web Development to Marketing, SEO, Branding, and Ads — our all-in-one solutions fuel your digital success",
//     },
//     {
//       title: "5+ Years of Industry Experience",
//       desc: "A team of skilled developers, marketers, and strategists transforming brands with innovation and precision",
//     },
//   ];

//   return (
//     <div className="min-h-screen text-white relative overflow-hidden">
//       {/* ---------------- HERO SECTION ---------------- */}
//       <div
//         className="relative bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${aboutHeroBg})` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-24">
//           {/* Breadcrumb */}
//           <div className="border-t border-[#f4a702]/30 pt-6 sm:pt-8 mb-0">
//             <div className="flex items-center justify-center gap-1 text-xs sm:text-sm">
//               <a
//                 href="/"
//                 className="hover:text-[#f4a702] transition-colors font-medium text-gray-300"
//               >
//                 HOME
//               </a>
//               <span className="text-gray-400">/</span>
//               <span className="text-[#f4a702] font-medium">ABOUT US</span>
//             </div>
//           </div>

//           {/* Heading */}
//           <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
//                 Our Service
//               </span>
//             </h1>

//             <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
//               At Brandmingo, we blend creativity and strategy to deliver digital
//               solutions that elevate your brand and drive real growth.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* second section  */}
//       <div className="w-full bg-black py-16 px-4 sm:px-6 lg:px-12">
//         <div className="max-w-7xl mx-auto text-center">
//           {/* Heading */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
//             <span className="text-white">What We’ve </span>{" "}
//             <span className="text-[#f4a702]">Achieved!</span>
//           </h2>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//             {stats.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#0a0a0a] border border-[#1d1d1d] rounded-2xl p-6 text-center hover:border-[#f4a702] hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300"
//               >
//                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ------------ THIRD SECTION (UPDATED THEME) ------------ */}
//       <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
//         <div className="max-w-5xl mx-auto">
//           {/* Section Heading */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center">
//             <span className="text-white">What We Bring </span>
//             <span className="text-[#f4a702]">to the Table!</span>
//           </h2>

//           {/* Accordion / Service List */}
//           <div className="rounded-3xl border border-[#1d1d1d] overflow-hidden bg-[#0a0a0a]">
//             {/* 1 — Design */}
//             <a href="/services/design" className="group block">
//               <div
//                 className="
//           flex items-center justify-between px-6 py-5 border-b border-[#1d1d1d]
//           transition-all duration-300
//           group-hover:bg-gradient-to-r
//           group-hover:from-[#f4a702]
//           group-hover:via-orange-400
//           group-hover:to-[#f4a702]
//         "
//               >
//                 <div className="flex items-center gap-4">
//                   <span className="text-white font-semibold text-lg">01</span>
//                   <span className="text-white text-lg font-semibold">
//                     Design
//                   </span>
//                 </div>
//                 <span className="text-white opacity-70 group-hover:opacity-100 transition-all">
//                   ↗
//                 </span>
//               </div>
//             </a>

//             {/* 2 — Development */}
//             <a href="/services/development" className="group block">
//               <div
//                 className="
//           flex items-center justify-between px-6 py-5 border-b border-[#1d1d1d]
//           transition-all duration-300
//           group-hover:bg-gradient-to-r
//           group-hover:from-[#f4a702]
//           group-hover:via-orange-400
//           group-hover:to-[#f4a702]
//         "
//               >
//                 <div className="flex items-center gap-4">
//                   <span className="text-white font-semibold text-lg">02</span>
//                   <span className="text-white text-lg font-semibold">
//                     Development
//                   </span>
//                 </div>
//                 <span className="text-white opacity-70 group-hover:opacity-100 transition-all">
//                   ↗
//                 </span>
//               </div>
//             </a>

//             {/* 3 — Marketing */}
//             <a href="/services/marketing" className="group block">
//               <div
//                 className="
//           flex items-center justify-between px-6 py-5
//           transition-all duration-300
//           group-hover:bg-gradient-to-r
//           group-hover:from-[#f4a702]
//           group-hover:via-orange-400
//           group-hover:to-[#f4a702]
//         "
//               >
//                 <div className="flex items-center gap-4">
//                   <span className="text-white font-semibold text-lg">03</span>
//                   <span className="text-white text-lg font-semibold">
//                     Marketing
//                   </span>
//                 </div>
//                 <span className="text-white opacity-70 group-hover:opacity-100 transition-all">
//                   ↗
//                 </span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
import Testimonials from "../components/Testimonials";
import ContactClients from "../components/ContactClients";
import FAQSection from "../components/FAQSection.jsx";
function Services() {
  // Stats Section
  const stats = [
    {
      number: "250+",
      title: "Successful Projects",
      desc: "Fully optimized websites, campaigns, and brand solutions that drive real business growth",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "180+",
      title: "Happy Clients",
      desc: "Brands across industries trust us for impactful marketing and consistent results",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
    {
      number: "360°",
      title: "Service Expertise",
      desc: "Complete digital solutions from development to marketing, SEO, branding, and ads",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
    },
    {
      number: "5+",
      title: "Years Experience",
      desc: "Skilled team transforming brands with innovation, strategy, and precision",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  // SLIDER CARDS with relevant icons
  const sliderCards = [
    {
      title: "Laser-Focused Strategy",
      desc: "We craft data-powered marketing strategies built around your goals, audience, and industry—ensuring every move drives real impact",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      title: "Seamless, Risk-Free Execution",
      desc: "From planning to delivery, our execution is optimized to eliminate errors and delays—giving you smooth, stress-free project flow",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "A Strong Competitive Edge",
      desc: "We highlight what makes your brand stand out and position you ahead of your competitors with strategic, creative digital solutions.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Smarter Resource Optimization",
      desc: "Make the most of your time, budget, and team. We help you scale smartly with efficient planning, better workflows, and focused outputs",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Performance-Driven Growth",
      desc: "Track every action with transparency. We deliver measurable ROI, long-term scalability, and continuous improvement for sustainable success",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sliderCards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sliderCards.length) % sliderCards.length);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="border-t border-[#f4a702]/30 pt-6 sm:pt-8 mb-0">
            <div className="flex items-center justify-center gap-1 text-xs sm:text-sm">
              <a
                href="/"
                className="hover:text-[#f4a702] transition-colors font-medium text-gray-300"
              >
                HOME
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-[#f4a702] font-medium">SERVICES</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Our Services
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              At Brandmingo, we combine creativity, strategy, and technology to
              craft powerful digital solutions that elevate brands, strengthen
              their online presence, and drive sustainable business growth.
            </p>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="w-full bg-black py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <span className="text-white">What We've </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4a702] to-orange-400">
                Achieved!
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence & client
              success
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702] to-orange-500 opacity-0 blur-lg rounded-2xl group-hover:opacity-30 transition"></div>

                <div className="relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 text-center group-hover:border-[#f4a702]/50 transition">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] group-hover:bg-[#f4a702] group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] to-orange-400">
                    {item.number}
                  </h3>

                  <h4 className="mt-3 text-xl text-white font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACCORDION SECTION */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-white">What We Bring </span>
            <span className="text-[#f4a702]">to the Table!</span>
          </h2>

          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 overflow-hidden">
            {["Design", "Development", "Marketing"].map((service, idx) => (
              <a
                key={idx}
                href={`/services/${service.toLowerCase()}`}
                className="group block border-b border-gray-700 last:border-b-0 hover:border-[#f4a702] transition-all duration-300"
              >
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 group-hover:bg-gradient-to-r group-hover:from-[#f4a702] group-hover:via-orange-400 group-hover:to-[#f4a702] transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">{`0${
                      idx + 1
                    }`}</span>
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </div>
                  <span className="text-lg sm:text-xl text-white group-hover:text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SLIDER SECTION - Infinite Loop */}
      <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">Why Brands Choose </span>
              <span className="text-[#f4a702]">Brandmingo?</span>
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 hover:bg-[#f4a702] hover:text-black hover:border-[#f4a702] transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f4a702] border border-[#f4a702] text-black hover:bg-orange-500 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / 4)}%)`,
              }}
            >
              {/* Triple the cards for infinite loop effect */}
              {[...sliderCards, ...sliderCards, ...sliderCards].map(
                (card, i) => (
                  <div
                    key={i}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 h-full hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group">
                      <div className="w-14 h-14 rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:bg-[#f4a702] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {card.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {sliderCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index % sliderCards.length
                    ? "bg-[#f4a702] w-8"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* testimonial  */}
      <Testimonials />
      <FAQSection />
      {/* ContactClients */}
      <div className="mb-8 md:mb-12">
        <ContactClients />
      </div>
    </div>
  );
}

export default Services;
