// import React from "react";
import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
import ContactClients from "../../components/ContactClients";
import { useNavigate } from "react-router-dom";
// import FAQSection from "../../components/FAQSection";

function WebDevelopement() {
  const navigate = useNavigate();

  // SLIDER CARDS with relevant icons
  const sliderCards = [
    {
      title: "Make a Strong First Impression",
      desc: "Your website is often the first interaction customers have with your brand We build stunning, professional websites that instantly communicate trust and quality.",
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
            d="M3 5h18M3 9h18M7 13h10M9 17h6"
          />
        </svg>
      ),
    },
    {
      title: "Built for Your Brand’s Vision",
      desc: "Your business is unique—your website should be too We translate your ideas into a digital experience that reflects your identity and stands out.",
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
            d="M9 12a3 3 0 116 0c0 1.649-1.2 2.4-1.5 3.5H10.5C10.2 14.4 9 13.649 9 12zm3-9a7 7 0 00-7 7c0 3.352 2 5 3 6h8c1-1 3-2.648 3-6a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Engage, Don’t Just Inform",
      desc: "Modern users expect more than information We create websites that keep visitors engaged, drive interaction, and convert interest into action",
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
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Designed for Results, Not Just Looks",
      desc: "Beautiful design matters—but performance matters more Our websites are crafted to bring leads, boost sales, and support long-term brand growth",
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
            d="M3 17l6-6 4 4 8-8M13 7h8v8"
          />
        </svg>
      ),
    },
    {
      title: "Technology That Powers Your Success",
      desc: "From WordPress and Shopify to React and PHP—we pick the right technology for your goals, not just what’s trending",
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
            d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4m-18 6l9 4 9-4"
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
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
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
              <span className="text-[#f4a702] font-medium">
                WEBDEVELOPEMENT
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Web-Developement
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              Best Web Development Company in India We build high-performance,
              scalable and visually stunning websites that help brands grow
              faster in the digital world.
            </p>
          </div>
        </div>
      </div>
      {/* /* ---------------- SECOND SECTION ----------------  */}

      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Updated Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-white">Complete Web Development</span>
            <span className="text-[#f4a702]">
              {" "}
              Solutions for Every Business
            </span>
          </h2>

          {/* Web Development Services List */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 overflow-hidden">
            {[
              "WordPress Website Development",
              "Shopify Store Development",
              "WooCommerce E-Commerce Development",
              "React Website / Web App Development",
              "PHP Website Development",
            ].map((service, idx) => {
              const routes = [
                "/services/wordpress-website",
                "/services/shopify",
                "/services/e-commerce",
                "/services/react-website",
                "/services/php-website",
              ];

              return (
                <a
                  key={idx}
                  href={routes[idx]}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(routes[idx]); // navigate to correct page
                  }}
                  className="group block border-b border-gray-700 last:border-b-0 hover:border-[#f4a702] transition-all duration-300"
                >
                  <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 group-hover:bg-gradient-to-r group-hover:from-[#f4a702] group-hover:via-orange-400 group-hover:to-[#f4a702] transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                        {`0${idx + 1}`}
                      </span>

                      <span className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-white transition-colors duration-300">
                        {service}
                      </span>
                    </div>

                    <span className="text-lg sm:text-xl text-white group-hover:text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ----------------   SECTION ---------------- */}
      <div className="w-full bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Container with Golden Border */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#f4a702] bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50 p-1">
            {/* Inner Content Container */}
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-[#f4a702]/5 rounded-full blur-3xl"></div>

              {/* Content Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16 items-center">
                {/* Left Side - Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    {/* Glow Effect Behind Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/20 to-orange-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-95 group-hover:scale-100"></div>

                    {/* Image Container */}
                    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#f4a702]/20 group-hover:shadow-[#f4a702]/40 transition-all duration-500 transform group-hover:scale-[1.02]">
                      <img
                        src="/src/assets/images/Untitled-design-7-min (1).gif"
                        alt="E-Commerce Services"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#f4a702] rounded-tl-2xl opacity-50"></div>
                    <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#f4a702] rounded-br-2xl opacity-50"></div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="order-1 lg:order-2 space-y-6">
                  {/* Title */}
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                      <span className="text-white">Best Web Development </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                        Company in
                      </span>
                      <span className="text-white"> India!</span>
                    </h2>

                    {/* Decorative Line */}
                    <div className="flex items-center gap-4">
                      <div className="h-1 w-20 bg-gradient-to-r from-[#f4a702] to-orange-500 rounded-full"></div>
                      <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-[#f4a702]/50 rounded-full"></div>
                    </div>
                  </div>

                  {/* Description Paragraphs */}
                  <div className="space-y-5">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      Best web development agency in India? Your search ends
                      here! We take immense pride in being recognized as the
                      premier web development agency in the country.
                    </p>

                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      Our dedicated team of expert developers and designers is
                      committed to delivering top-notch web solutions that meet
                      and exceed your expectations. Whether you require a
                      stunning website, a robust e-commerce platform, or custom
                      web applications, we have the skills and experience to
                      make it happen.
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      What sets us apart is our unwavering commitment to
                      quality, innovation, and client satisfaction. We
                      understand that your website is the digital face of your
                      business, and we ensure that it not only looks impressive
                      but also functions flawlessly.
                    </p>
                  </div>

                  {/* Call-to-Action Button */}
                  <div className="pt-4">
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#f4a702] to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-[#f4a702]/30 hover:shadow-[#f4a702]/50 transition-all duration-300 hover:scale-105">
                      <span className="relative z-10">Talk To Us</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- THIRD SECTION ---------------- */}
      {/* SLIDER SECTION - Infinite Loop */}
      <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">Transforming Ideas Into</span>
              <span className="text-[#f4a702]">
                {" "}
                Powerful Digital Experiences
              </span>
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
      {/* ---------------- FOURTH SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">Built the </span>
              <span className="text-[#f4a702]">Brandmingo Way</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              What makes us India’s most trusted web development partner
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Featured */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-8 sm:p-10 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702] via-orange-400 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  Custom Websites Built for Your Brand
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  No pre-made templates here. Every website we build is uniquely
                  crafted to match your brand identity—helping you stand out
                  with a design that’s unforgettable
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Seamless User Experience
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  We create websites that feel smooth, intuitive, and easy to
                  navigate. Your visitors enjoy a clean journey that keeps them
                  engaged and coming back for more
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Mobile-Optimized for Every Device
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Your audience is everywhere—mobile, tablet, and desktop. We
                  ensure your site performs flawlessly and loads beautifully
                  across all screen sizes.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Lightning-Fast Performance
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  A slow website costs you customers. Our optimized development
                  ensures super-fast load times that boost engagement and
                  improve your SEO rankings.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  SEO-Ready Development
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  We build with SEO best practices from the ground up. Clean
                  structure, optimized code, high performance—everything your
                  site needs to rank higher on Google
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Reliable Support & Maintenance
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Your website doesn’t stop after launch, and neither do we.
                  Brandmingo provides continuous updates, fixes, security
                  checks, and long-term support as your business grows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- FIVE  SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">The </span>
              <span className="text-[#f4a702]">Brandmingo Blueprint</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
              We follow a structured, result-driven process to build websites
              that are visually stunning, strategically crafted, and engineered
              for high performance
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line - Hidden on mobile, shown on larger screens */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  1
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Discovery & Requirement Analysis
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Understanding your business goals, target audience,
                    competitors, and project scope to build the right foundation
                    for your website.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  2
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Planning & Wireframing
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Creating a clear blueprint with sitemaps, layouts, and
                    wireframes to define structure, user flow, and experience
                    before design begins.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  3
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      UI/UX Design & Prototyping
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Crafting modern, brand-aligned UI designs and interactive
                    prototypes that showcase how your final website will look
                    and feel.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  4
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Development & Integration
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Bringing the approved design to life using clean, scalable
                    code—whether it's WordPress, Shopify, React, WooCommerce, or
                    PHP.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  5
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Testing, QA & Optimization
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Thorough testing across all devices and browsers to ensure
                    perfect performance, speed, responsiveness, and bug-free
                    functionality.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex items-start md:items-center gap-4 md:gap-8 group">
                <div className="hidden md:block absolute left-0 w-3 h-3 bg-[#f4a702] rounded-full -translate-x-[5px] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f4a702] to-orange-500 flex items-center justify-center text-white font-bold text-sm md:text-base md:ml-8">
                  6
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Launch & Post-Launch Support
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Deploying your website securely and providing continuous
                    support, updates, and performance optimization as your
                    business scales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- Five SECTION - The Blueprint ---------------- */}
      {/* NEW SECTION - What Makes BrandMingo Different */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">BrandMingo’s Complete </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Web Development Suite
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We bring together strategy, creativity, and modern technology to
              deliver high-performance web solutions that strengthen your brand
              and accelerate your digital success.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* CARD 1 - WordPress Development */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon Container - WordPress Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
                  {/* WordPress/CMS Icon */}
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  WordPress Website Development
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We build custom, high-performance WordPress websites that load
                  fast, work smoothly, and reflect your brand's identity. From
                  premium themes to fully custom designs, we ensure your site is
                  secure, SEO-friendly, responsive, and built to convert
                  visitors into customers.
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>

            {/* CARD 2 - Shopify Store */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
                  {/* Shopping Cart Icon */}
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Shopify Store Development
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We create modern, conversion-focused Shopify stores designed
                  to boost sales and deliver seamless buying experiences. With
                  optimized product pages, payment gateway setup, mobile-first
                  design, and fast checkout flow, we ensure your store performs
                  beautifully and drives revenue from day one.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>

            {/* CARD 3 - WooCommerce & CMS */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
                  {/* Settings/CMS Icon */}
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Custom WooCommerce & CMS Solutions
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Our CMS and WooCommerce solutions let you manage your entire
                  website with ease—no technical expertise needed. Whether you
                  need a powerful backend, dynamic product catalog, or a fully
                  custom CMS interface, we tailor everything to match your
                  business workflows and deliver complete control.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>

            {/* CARD 4 - Responsive Design */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
                  {/* Mobile/Responsive Icon */}
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Responsive & Mobile-First Web Design
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Your audience is everywhere—mobile, tablet, and desktop. We
                  ensure your website loads fast and performs flawlessly across
                  all devices. With mobile-first design, your users enjoy a
                  seamless, engaging experience no matter how they browse.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <FAQSection /> */}
      <div className="mb-8 md:mb-12">
        <ContactClients />
      </div>
    </div>
  );
}

export default WebDevelopement;
