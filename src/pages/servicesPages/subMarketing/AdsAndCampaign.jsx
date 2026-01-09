import React, { useEffect, useRef, useState } from "react";
// import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
// import FAQSection from "../../../components/FAQSection";
import ContactClients from "../../../components/ContactClients";
import AdvertisingSolutions from "../../../components/AdvertisingSolutions";
import { Search, Users, Video, Zap, MapPin, Smartphone } from "lucide-react";

function AdsAndCampaign() {
  // SLIDER CARDS with relevant icons
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const sliderCards = [
    {
      title: "Google Ads for High-Intent Traffic",
      desc: "We create data-driven Google Search, Display, and YouTube ad campaigns that put your brand in front of customers exactly when they are ready to buy — driving quality leads with maximum ROI.",
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },

    {
      title: "Facebook & Instagram Performance Ads",
      desc: "Our paid social campaigns are designed to capture attention, boost engagement, and convert scrolling users into paying customers through powerful creatives and smart audience targeting.",
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
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },

    {
      title: "LinkedIn B2B Lead Generation Ads",
      desc: "We help you connect with decision-makers and professionals through highly targeted LinkedIn ad campaigns built to generate quality B2B leads and build brand authority",
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },

    {
      title: "Quora Intent-Based Advertising",
      desc: "We leverage Quora's high-intent audience to place your brand in front of users actively searching for solutions — building trust, awareness, and qualified traffic.",
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },

    {
      title: "Data-Driven Optimization & Scaling",
      desc: "Every campaign is continuously tracked, optimized, and scaled using performance data to ensure lower cost per lead, higher conversions, and consistent growth.",
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

  // Stats Section
  const services = [
    {
      title: "Search Advertising",
      desc: "Dominate Google search results and capture high-intent customers instantly. Our precision-driven search campaigns put your brand in front of users actively looking to buy, delivering faster leads and higher conversions.",
      icon: Search,
    },
    {
      title: "Social Media Advertising",
      desc: "Turn scrolling into sales with high-performing social ads. We craft platform-specific creatives for Facebook, Instagram, and beyond to build brand awareness, drive traffic, and boost conversions at scale.",
      icon: Users,
    },
    {
      title: "Video Marketing Campaigns",
      desc: "Engage emotionally and convert powerfully through high-impact video ads. We create compelling video campaigns designed to grab attention, increase watch time, and drive strong brand recall.",
      icon: Video,
    },
    {
      title: "Lead Generation Campaigns",
      desc: "Fill your sales pipeline with qualified, purchase-ready leads. Our data-driven targeting, optimized funnels, and compelling creatives ensure consistent, high-quality lead flow for your business.",
      icon: Zap,
    },
    {
      title: "Listing-Based Advertising",
      desc: "Get discovered where customers are already searching. We optimize your business listings across premium platforms to improve visibility, trust, and local conversions.",
      icon: MapPin,
    },
    {
      title: "App Install & Growth Campaigns",
      desc: "Accelerate your app growth with performance-focused install campaigns. From user acquisition to in-app engagement, we ensure every download delivers real business value.",
      icon: Smartphone,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
                Ads-And-Campaigns
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Ads-And-Campaigns
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              At Brandmingo, we create targeted ad campaigns that boost
              visibility, drive quality leads, and maximize your ROI. With
              data-driven strategies and creative execution, we help your brand
              grow faster across Google, social media, and more.
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
                Ads & Campaign Solutions Built{" "}
              </span>
              <span className="text-[#f4a702]">for Reach, Results & ROI</span>
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
                        src="/src/assets/images/Untitled-design-8.gif"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- 4  SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f4a702] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10" ref={sectionRef}>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-white">Your Growth-Driven </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702] animate-pulse">
                Advertising & Campaign Partner
              </span>
            </h2>
            <p className="text-gray-400 mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4 leading-relaxed">
              At Brandmingo, we design performance-powered advertising
              strategies that don't just create impressions — they create
              impact, engagement, and measurable business growth. Every campaign
              we build is backed by data, creativity, and a clear ROI focus.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isVisible = visibleCards.includes(i);

              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f4a702] via-orange-500 to-[#f4a702] rounded-3xl opacity-0 group-hover:opacity-75 blur-2xl transition-all duration-700 group-hover:animate-pulse"></div>

                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black border-2 border-gray-800/50 rounded-3xl p-8 sm:p-10 text-center backdrop-blur-sm group-hover:border-[#f4a702] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-[#f4a702]/20">
                    {/* Decorative top corner */}
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#f4a702]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon container with 3D effect */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 perspective-1000">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f4a702] via-orange-500 to-[#f4a702] opacity-30 blur-md group-hover:opacity-60 group-hover:scale-125 transition-all duration-500"></div>

                      {/* Icon background with border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f4a702]/30 to-orange-600/30 border-2 border-[#f4a702]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"></div>

                      {/* Inner dark background */}
                      <div className="absolute inset-1 bg-gradient-to-br from-gray-900 to-black rounded-xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702] group-hover:to-orange-600 transition-all duration-500"></div>

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Icon
                          className="w-10 h-10 sm:w-12 sm:h-12 text-[#f4a702] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-[0_0_10px_rgba(244,167,2,0.5)]"
                          strokeWidth={2}
                        />
                      </div>

                      {/* Rotating accent */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-t-[#f4a702] group-hover:border-r-[#f4a702] group-hover:animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Title with gradient on hover */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 group-hover:bg-gradient-to-r group-hover:from-[#f4a702] group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.desc}
                    </p>

                    {/* Animated bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f4a702] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-3xl"></div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#f4a702]/0 group-hover:border-[#f4a702] rounded-tr-2xl transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#f4a702]/0 group-hover:border-[#f4a702] rounded-bl-2xl transition-all duration-500"></div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA accent */}
          <div className="text-center mt-16 sm:mt-20">
            <div className="inline-block">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#f4a702] to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

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
                      <span className="text-white">
                        Why Strategic Advertising{" "}
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                        Campaigns Drive Real
                      </span>
                      <span className="text-white"> Business Growth</span>
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
                      In today’s competitive digital landscape, a well-planned
                      advertising campaign is the backbone of sustainable
                      business success. Strategic ads not only amplify your
                      brand visibility across digital platforms but also build
                      long-term consumer trust.
                    </p>

                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      At Brandmingo, we design data-driven advertising campaigns
                      that attract high-intent audiences, boost conversions, and
                      deliver measurable ROI. Our campaigns evolve with market
                      trends, ensuring your brand stays relevant, competitive,
                      and profitable in every growth phase.
                    </p>
                  </div>

                  {/* Call-to-Action Button */}
                  <div className="pt-4">
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#f4a702] to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-[#f4a702]/30 hover:shadow-[#f4a702]/50 transition-all duration-300 hover:scale-105">
                      <span className="relative z-10">Start Your Campaign</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 border border-[#f4a702]/20 hover:border-[#f4a702]/50 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f4a702] to-orange-500"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        ROI-Driven Strategy
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 border border-[#f4a702]/20 hover:border-[#f4a702]/50 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f4a702] to-orange-500"></div>
                      <span className="text-gray-300 text-sm font-medium">
                        Audience Targeting Precision
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

export default AdsAndCampaign;
