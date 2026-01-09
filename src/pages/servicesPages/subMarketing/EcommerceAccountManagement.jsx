import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
// import FAQSection from "../../../components/FAQSection";
import ContactClients from "../../../components/ContactClients";

function EcommerceAccountManagement() {
  // SLIDER CARDS with relevant icons
  const sliderCards = [
    {
      title: "High-Conversion Store Design",
      desc: "We design visually engaging, user-focused online stores that guide visitors smoothly from browsing to checkout, increasing conversions and reducing drop-offs.",
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
      title: "Seamless Shopping Experience",
      desc: "Fast-loading pages, easy navigation, and mobile-friendly layouts ensure your customers enjoy a smooth, frustration-free buying journey on every device.",
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Data-Driven Performance Optimization",
      desc: "With detailed analytics, tracking, and insights, we constantly refine your store's performance to improve sales, customer behavior, and ROI.",
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
    {
      title: "Secure Payments & Smart Inventory",
      desc: "From secure payment gateways to real-time inventory sync, we build systems that ensure smooth order processing and efficient stock management.",
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
      title: "24×7 Selling & Global Reach",
      desc: "Your online store never sleeps. We help you reach customers across cities, states, and countries — expanding your business beyond physical boundaries.",
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
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
                E Commerce Account Management
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Market Place Managemen
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              Ecommerce Account Management Service,Expert ecommerce account
              management services optimizing your online business for growth
              across platforms like Amazon and Flipkart.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- 2 SECTION ---------------- */}
      <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">E-Commerce Solutions Built </span>
              <span className="text-[#f4a702]">for Growth & Scalability</span>
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
              <span className="text-[#f4a702]">Brandmingo Way</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              At Brandmingo, we don’t just build websites — we craft powerful
              digital experiences that drive performance, engagement, and
              long-term growth. Every solution is tailored, data-backed, and
              designed to scale with your business.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Featured */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-8 sm:p-10 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702] via-orange-400 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  Your Business, Your Blueprint
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Every brand is different — and so is our approach. We design
                  and develop solutions that align perfectly with your business
                  goals, audience behavior, and growth vision.
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
                  We follow a streamlined development process that ensures
                  faster turnaround without compromising on quality. From
                  planning to launch — everything moves with precision.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  End-to-End Digital Support
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  From strategy, design, development, deployment to post-launch
                  maintenance — we manage the complete lifecycle so you can
                  focus on scaling your business.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Growth-First Technology
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Every feature, integration, and functionality is engineered
                  for scalability, performance, and future expansion. Your
                  growth roadmap is built into the foundation.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Performance-Driven Development
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Speed, security, and seamless user experience are
                  non-negotiable. We build fast-loading, secure, and
                  conversion-optimized platforms that customers love to use.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  A Team That Works Like Yours
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  We don’t work for you — we work with you. Our team becomes an
                  extension of your business, aligned with your vision,
                  accountability, and success metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- FIVE  SECTION ---------------- */}

      {/* ----------------  3 SECTION ---------------- */}
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
                        src="/src/assets/images/Ecommerce-web-page-1.gif"
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
                        Smart Ecommerce Business{" "}
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                        Account Management for Scalable
                      </span>
                      <span className="text-white"> Growth</span>
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
                      At Brandmingo, we specialize in managing and optimizing
                      ecommerce seller accounts across leading platforms to
                      ensure seamless performance and higher sales conversions.
                      From product listing optimization to inventory control and
                      advertisement management, we handle every critical aspect
                      with precision and expertise. Our structured processes
                      help eliminate operational complexity while improving
                      overall marketplace efficiency.
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      Our goal is to transform your ecommerce operations into a
                      revenue-driven growth engine. With real-time performance
                      tracking, campaign optimization, and customer interaction
                      management, we ensure your brand stays competitive,
                      visible, and profitable. You focus on scaling your
                      business — we take care of the execution.
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

      {/* ---------------- FIVE  SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">The Brandmingo </span>
              <span className="text-[#f4a702]">E-Commerce Blueprint</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
              At Brandmingo, we follow a proven, result-driven process to build
              high-performance e-commerce platforms that are conversion-focused,
              user-friendly, and built for long-term growth. Every step is
              carefully crafted to ensure your online store is powerful, secure,
              and ready to scale.
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
                      Discovery & Strategy
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
                    We begin by deeply understanding your business model, target
                    audience, competitors, and market positioning. This phase
                    helps us define the right strategy, features, and growth
                    roadmap for your e-commerce success.
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
                      UX/UI Design
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
                    Our design team creates intuitive, visually engaging, and
                    conversion-optimized interfaces that offer seamless
                    navigation and superior user experience across all devices.
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
                      Development
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
                    Using modern technologies and secure frameworks, we develop
                    high-performance, scalable e-commerce platforms with clean
                    code, fast loading speed, and powerful backend functionality
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
                      Testing & Optimization
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
                    Every store goes through rigorous performance, security, and
                    usability testing across devices and browsers. We fine-tune
                    each element to ensure flawless performance and maximum
                    conversions.
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
                      Launch
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
                    Once everything is perfected, we deploy your e-commerce
                    store with complete configuration, speed optimization, and
                    tracking setup to ensure a successful market launch.
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
                      Support & Growth
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
                    Our relationship doesn’t end at launch. We provide
                    continuous technical support, performance monitoring,
                    updates, and optimization to keep your store growing
                    profitably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default EcommerceAccountManagement;
