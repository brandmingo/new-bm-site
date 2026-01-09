import React, { useState } from "react";
// import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
// import FAQSection from "../../../components/FAQSection";
import ContactClients from "../../../components/ContactClients";
import AdvertisingSolutions from "../../../components/AdvertisingSolutions";
import { Search, Users, Video, Zap, MapPin, Smartphone } from "lucide-react";
import ValuesSection from "./ValuesSection";

function SocialMediaMarketing() {
  const sliderCards = [
    {
      title: "Data-Driven Social Media Strategy",
      desc: "Har campaign ko hum insights, audience behavior aur performance data ke base par plan aur optimize karte hain — jisse engagement, reach aur ROI dono maximize ho.",
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
      title: "Content That Connects & Converts",
      desc: "Hum scroll-stopping creatives, reels, carousels aur branded content design karte hain jo attention grab kare, brand story build kare aur followers ko customers mein convert kare.",
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
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },

    {
      title: "Paid Social Media Advertising",
      desc: "Highly targeted Facebook, Instagram aur social ads ke through hum aapke brand ko right audience ke saamne le aate hain — leads, sales aur brand visibility ke liye optimized.",
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
      title: "Community Building & Engagement",
      desc: "Comments, messages, DMs aur audience interactions ko professionally manage karke hum aapke brand ke saath strong customer relationships build karte hain.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },

    {
      title: "Performance Tracking & Growth Optimization",
      desc: "Detailed monthly reports, audience insights aur performance tracking ke saath hum har campaign ko continuously improve karte hain for consistent long-term growth.",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
      {/* ---------------- 1 SECTION ---------------- */}
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
                Social-Media-Marketing
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Social-Media-Marketing
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              At Brandmingo, we build data-driven social media strategies that
              grow your brand, engage your audience, and turn followers into
              loyal customers across every major platform.
            </p>
          </div>
        </div>
      </div>

      {/* 2 section */}
      <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">
                Turning Social Media Engagement{" "}
              </span>
              <span className="text-[#f4a702]">Into Real Business Growth</span>
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
                {/* ✅ LEFT SIDE - CONTENT (Now First) */}
                <div className="order-1 lg:order-1 space-y-6">
                  {/* Title */}
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                      <span className="text-white">
                        An advertising in India!{" "}
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                        campaign is a series Agency
                      </span>
                      <span className="text-white"> Agency</span>
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
                      An advertising campaign represents a sequence of
                      advertisement messages unified by a single idea and theme,
                      forming an Integrated Marketing Communication (IMC)
                      strategy. IMC serves as a platform where diverse ideas,
                      beliefs, and concepts coalesce into a comprehensive media
                      strategy. Advertising campaigns span various media
                      channels, operating within a defined timeframe and
                      targeting specific audiences. The campaign theme serves as
                      the central message, serving as the focal point for
                      promotional activities.
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      It sets the tone for a series of individual advertisements
                      and other marketing communications. Campaign themes are
                      typically designed for long-term use but can become
                      short-lived due to factors like ineffectiveness, market
                      conditions, competition, and changes in the marketing mix.
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

                {/* ✅ RIGHT SIDE - IMAGE (Now Second) */}
                <div className="order-2 lg:order-2">
                  <div className="relative group">
                    {/* Glow Effect Behind Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/20 to-orange-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-95 group-hover:scale-100"></div>

                    {/* Image Container */}
                    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#f4a702]/20 group-hover:shadow-[#f4a702]/40 transition-all duration-500 transform group-hover:scale-[1.02]">
                      <img
                        src="/src/assets/images/Brandmingo-1-min.gif"
                        alt="E-Commerce Services"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#f4a702] rounded-tl-2xl opacity-50"></div>
                    <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#f4a702] rounded-br-2xl opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- 4  SECTION ---------------- */}
      <ValuesSection />

      {/* AdvertisingSolutions */}
      <AdvertisingSolutions />

      {/* ----------------  8 SECTION ---------------- */}
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
                        src="/src/assets/images/adimage.jpg"
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
                      <span className="text-white">Why SMM Is </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                        Crucial for Your
                      </span>
                      <span className="text-white">Business Success?</span>
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
                      In today’s fast-moving digital world, social media is no
                      longer optional — it’s a powerful engine for business
                      growth. A strong Social Media Marketing strategy helps
                      brands build visibility, connect with the right audience,
                      and turn followers into loyal customers.
                    </p>

                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      At Brandmingo, we create data-driven SMM campaigns that
                      boost engagement, strengthen brand trust, and drive
                      measurable business results. From content strategy to
                      performance tracking, our approach ensures your brand
                      stays relevant, competitive, and profitable at every stage
                      of growth.
                    </p>
                  </div>

                  {/* Call-to-Action Button */}
                  <div className="pt-4">
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#f4a702] to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-[#f4a702]/30 hover:shadow-[#f4a702]/50 transition-all duration-300 hover:scale-105">
                      <span className="relative z-10">
                        👉 Start Your Social Media Growth
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 border border-[#f4a702]/20 hover:border-[#f4a702]/50 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f4a702] to-orange-500"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        Engagement-Driven Strategy
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 border border-[#f4a702]/20 hover:border-[#f4a702]/50 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f4a702] to-orange-500"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        Precision Audience Targeting
                      </span>
                    </div>
                  </div>
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
              <span className="text-white">Why Brandmingo is Your </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Trusted Advertising & Campaign Partner
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              At Brandmingo, we don’t just run ads — we engineer
              high-performance advertising strategies that drive visibility,
              leads, and scalable revenue. Our data-driven approach, creative
              execution, and continuous optimization ensure your brand stands
              out and performs consistently across all digital channels.
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
                  Experienced Advertising Specialists
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Our growth-focused ad experts craft high-impact campaigns
                  backed by industry insights, audience psychology, and
                  performance marketing expertise to deliver measurable business
                  results.
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
                  Advanced Advertising Technology
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We leverage cutting-edge ad tools, automation platforms, and
                  AI-driven optimization to maximize reach, improve targeting
                  accuracy, and reduce acquisition costs.
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
                  Proven Campaign Performance
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  From lead generation to brand awareness and sales conversions
                  — our campaigns consistently generate high ROI and long-term
                  brand growth for our clients.
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
                  5+ Years of Digital Advertising Excellence
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  With years of hands-on experience across multiple industries,
                  Brandmingo delivers reliable, scalable, and sustainable
                  advertising success backed by real-world performance data.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------  9 SECTION ---------------- */}
      <div className="mb-8 md:mb-12">
        <ContactClients />
      </div>
    </div>
  );
}

export default SocialMediaMarketing;
