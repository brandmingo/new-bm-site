import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
// import FAQSection from "../../../components/FAQSection";
import ContactClients from "../../../components/ContactClients";
import WebDevelopmentServices from "../../../components/WebDevelopmentServices";
import WordPressPricingPlans from "../../sitePricingPlans/WordPressPricingPlans";

function ReactWebsite() {
  // SLIDER CARDS with relevant icons
  const sliderCards = [
    {
      title: "High-Performance UI Development",
      desc: "We craft lightning-fast, responsive user interfaces using React that deliver smooth interactions, faster load times, and an engaging user experience across all devices.",
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },

    {
      title: "Custom React Web App Development",
      desc: "From dashboards to enterprise-level web applications, we build fully customized React solutions aligned with your business goals and user needs.",
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
      title: "Fast, Secure & Scalable Architecture",
      desc: "Our React applications are built with modern security standards, optimized performance, and scalable architecture to support your business as it grows.",
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },

    {
      title: "API Integration & Dynamic Functionality",
      desc: "We integrate powerful APIs, third-party services, and real-time data to create dynamic, data-driven React applications with seamless functionality.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect
            x="7"
            y="2"
            width="10"
            height="20"
            rx="2"
            ry="2"
            strokeWidth={2}
          />
          <circle cx="12" cy="18" r="1" />
        </svg>
      ),
    },

    {
      title: "Mobile-First & Cross-Platform Ready",
      desc: "Every React solution we build is fully responsive, mobile-first, and optimized to perform flawlessly across web, tablet, and multiple screen sizes.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.3-4.3"
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
              <span className="text-[#f4a702] font-medium">React</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                React
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              At Brandmingo, we build high-performance React websites and web
              applications that are fast, scalable, and future-ready. Our custom
              React solutions deliver seamless user experiences, lightning-fast
              speed, and powerful front-end interfaces designed to grow your
              business digitally.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- 2 SECTION ---------------- */}
      <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">React Solutions Built</span>
              <span className="text-[#f4a702]">
                for Speed, Scalability & Performance
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
                      <div className="w-14 h-14 rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:bg-[#f4a702] group-hover:text-black group-hover:scale-110 transition-all duration-300">
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

      {/* ---------------- 3  SECTION ---------------- */}
      <WordPressPricingPlans />
      {/* ---------------- third  SECTION ---------------- */}
      <div className="w-full bg-gradient-to-b from-black via-gray-950 to-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#f4a702] text-sm font-semibold tracking-wider uppercase mb-4">
              OUR SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Connecting customers with{" "}
              <span className="text-[#f4a702]">your brand</span>
            </h2>
          </div>

          {/* Platform Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Flipkart Card */}
            <div className="group relative bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <text
                      x="50"
                      y="65"
                      fontSize="48"
                      fontWeight="bold"
                      fill="#2874F0"
                      textAnchor="middle"
                      fontFamily="Arial, sans-serif"
                    >
                      F
                    </text>
                    <rect
                      x="72"
                      y="22"
                      width="8"
                      height="8"
                      fill="#FFD700"
                      rx="2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Flipkart</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  From setting up your store to running promotions, we manage
                  every aspect of your Flipkart account.
                </p>
                <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                  READ MORE
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Amazon Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 border-2 border-gray-800 overflow-hidden hover:border-[#f4a702] hover:shadow-2xl hover:shadow-[#f4a702]/30 transition-all duration-500 hover:scale-[1.02]">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#f4a702]/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10">
                {/* Logo Container */}
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center mb-6 shadow-2xl border border-gray-700 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#f4a702] transition-all duration-300">
                  {/* Amazon Logo - Smile */}
                  <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M20 55C20 55 35 70 50 70C65 70 80 55 80 55"
                      stroke="#FF9900"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path d="M75 57L82 60L77 65" fill="#FF9900" />
                    <text
                      x="50"
                      y="40"
                      fontSize="32"
                      fontWeight="bold"
                      fill="white"
                      textAnchor="middle"
                      fontFamily="Arial, sans-serif"
                    >
                      a
                    </text>
                  </svg>
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-[#f4a702] transition-colors duration-300">
                  Amazon
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  We specialize in Amazon Seller Central and Vendor Central,
                  ensuring your products stand out in the competitive
                  marketplace.
                </p>

                <button className="bg-gradient-to-r from-[#f4a702] to-orange-500 text-white font-bold px-8 py-3.5 rounded-xl hover:from-orange-500 hover:to-[#f4a702] transition-all duration-300 flex items-center gap-2 group-hover:gap-4 shadow-lg hover:shadow-xl shadow-[#f4a702]/30">
                  READ MORE
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Shopsy Card */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Shopsy</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  Our team ensures your Shopsy store runs smoothly, with
                  optimized listings and efficient order processing.
                </p>
                <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                  READ MORE
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Snapdeal Card */}
            <div className="group relative bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Snapdeal</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  Our team ensures your Snapdeal store runs smoothly, with
                  optimized listings and efficient order processing.
                </p>
                <button className="bg-white text-red-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                  READ MORE
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
              <span className="text-[#f4a702]">Brandmingo React Way</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              At Brandmingo, we don’t just develop React applications — we
              engineer lightning-fast, scalable, and future-ready web
              experiences designed for performance, flexibility, and business
              growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Featured */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-8 sm:p-10 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702] via-orange-400 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  Your Business, Your React Architecture
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Every React project we build follows a custom architecture
                  based on your business logic, user flow, and scalability needs
                  — ensuring clean code, smooth performance, and long-term
                  reliability.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Execution Without Delays
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Our agile React development process ensures fast turnarounds
                  without compromising quality — from component design to
                  full-stack integration and deployment.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  End-to-End React Support
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  From UI development and API integration to deployment,
                  maintenance, and upgrades — we handle the complete React
                  development lifecycle so you focus on scaling.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Scalable & Growth-Ready Technology
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Every React app we build is engineered for scalability,
                  modular expansion, and high-traffic handling — ready to grow
                  as your user base grows.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  High-Performance React Development
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Optimized rendering, fast load times, secure architecture, and
                  seamless API handling — we build React apps that deliver
                  speed, stability, and reliability.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  A Dedicated Team That Works With You{" "}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  We don’t act like vendors — we work as your technical growth
                  partners, aligned with your goals, timelines, and success
                  metrics.
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
              <span className="text-white">The Brandmingo </span>
              <span className="text-[#f4a702]">React Growth Blueprint</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
              At Brandmingo, we follow a structured, performance-driven React
              development process to build fast, scalable, and business-ready
              web applications. Every stage is optimized to ensure clean
              architecture, smooth user experience, and long-term scalability.
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
                      Requirement Analysis & Technical Planning
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
                    We begin by understanding your business goals, user journey,
                    required features, and technical expectations. This helps us
                    define the right React architecture, system flow, and
                    overall development roadmap.
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
                      UI/UX Strategy & Component Design
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
                    Our design team creates clean, modern, and user-centric
                    interfaces with reusable React components that ensure smooth
                    navigation, visual consistency, and high engagement.
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
                      React Development & API Integration
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
                    We build high-performance React applications using clean,
                    modular code with secure API integrations, ensuring fast
                    rendering, smooth data flow, and scalable functionality.
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
                      Performance Optimization & Security
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
                    Your React app is optimized for speed, responsiveness, and
                    security using best practices like lazy loading, code
                    splitting, secure authentication, and data protection.
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
                      Testing, Deployment & Environment Setup
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
                    Before launch, we thoroughly test your React application for
                    bugs, performance, responsiveness, and browser compatibility
                    — then deploy it on a secure, optimized production
                    environment.
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
                      Continuous Support & Scalability
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
                    After launch, we provide ongoing maintenance, feature
                    upgrades, performance monitoring, and scalability support to
                    ensure your React application grows with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <WebDevelopmentServices />
      {/* NEW SECTION - What Makes BrandMingo Different */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">Why Choose Brandmingo </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                for Ecommerce Account Management?
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              At Brandmingo, we manage your eCommerce operations with precision
              to boost visibility, maximize sales, and ensure seamless growth
              across all platforms.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* CARD 1 - Expert Account Setup */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* User/Account Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Expert Account Setup
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We ensure your products are set up correctly from the start,
                  optimizing listings with compelling product descriptions,
                  high-quality images, and strategic keywords to enhance
                  visibility.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>

            {/* CARD 2 - Product Listing Optimization */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* List/Checklist Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Product Listing Optimization
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Our team regularly updates and optimizes your product listings
                  to keep them competitive. We analyze market trends and adjust
                  prices, descriptions, and images to maintain relevance.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>

            {/* CARD 3 - Inventory Management */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Cube/Box Icon for Inventory */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Inventory Management
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We track your inventory across all platforms, ensuring that
                  your stock levels are always accurate. Avoid stockouts and
                  overstock situations with our proactive inventory management.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>

            {/* CARD 4 - Performance Analytics */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-[#f4a702] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f4a702]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-400/10 to-[#f4a702]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Chart/Analytics Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:rotate-6">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Performance Analytics
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We provide detailed analytics on your sales performance,
                  customer behavior, and market trends. Our insights help you
                  make data-driven decisions to improve your sales strategy.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>
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
                        src="/src/assets/images/e-commerce-management-service.png"
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
                      <span className="text-white">
                        How To Choose The Right{" "}
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                        ECommerce Platform
                      </span>
                      <span className="text-white"> For Selling</span>
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
                      In today's digital marketplace, choosing the right
                      eCommerce platform is crucial for a successful online
                      business. Each platform offers different features,
                      audience reach, and seller support. Understanding these
                      aspects can help you maximize your business potential.
                    </p>

                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      Choosing the right eCommerce platform is critical to your
                      business success. Understanding your product, target
                      market, and the specific features of each platform can
                      help you make an informed decision.
                    </p>
                  </div>

                  {/* Call-to-Action Button */}
                  <div className="pt-4">
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#f4a702] to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-[#f4a702]/30 hover:shadow-[#f4a702]/50 transition-all duration-300 hover:scale-105">
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 border border-[#f4a702]/20 hover:border-[#f4a702]/50 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f4a702] to-orange-500"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        Expert Guidance
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 border border-[#f4a702]/20 hover:border-[#f4a702]/50 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f4a702] to-orange-500"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        Platform Analysis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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

export default ReactWebsite;
