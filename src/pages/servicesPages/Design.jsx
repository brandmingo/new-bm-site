// import React from "react";
import { useState } from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
import ContactClients from "../../components/ContactClients";
// import { useState } from "react";
import faqBg from "/src/assets/images/Home/bg-home2.png";
// import PrimaryButton from "../components/PrimaryButton.jsx";
// import FAQSection from "../../components/FAQSection";

function Design() {
  // SLIDER CARDS with relevant icons
  const sliderCards = [
    {
      title: "A Distinctive Brand Presence",
      desc: "Your visuals define how customers remember you. We craft unique, high-impact design elements that reflect your brand’s personality, build recognition, and leave a powerful impression from the very first glance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.122 2.122M8.758 15.242l-2.122 2.122m0-12.364l2.122 2.122m8.484 8.484l2.122 2.122"
          />
        </svg>
      ),
    },
    {
      title: "Designs That Speak to Your Audience",
      desc: "Great design isn’t just beautiful—it’s meaningful. We combine creativity with user psychology to deliver designs that connect emotionally, communicate clearly, and guide users effortlessly",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6a4 4 0 110 8 4 4 0 010-8zm6 14v-1a5 5 0 00-10 0v1m12-11a2 2 0 11-4 0 2 2 0 014 0zM6 9a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Consistency That Builds Trust",
      desc: "A strong brand stays consistent everywhere. We ensure your color palette, typography, layouts, and messaging stay aligned across all platforms, strengthening recognition and enhancing brand credibility.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Design That Drives Purpose",
      desc: "We blend creativity with strategy to design visuals that not only look stunning but also solve real business goals—whether it's boosting engagement, improving conversions, or elevating brand perception.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 17l6-6 4 4 8-8M13 7h8v8"
          />
        </svg>
      ),
    },
    {
      title: "Built to Grow With Your Brand",
      desc: "Your brand evolves—your design should too. We create flexible, scalable design systems that adapt to new trends, platforms, and business needs while maintaining a strong, cohesive identity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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

  // FAQ sections
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What design services does Brandmingo offer?",
      a: "We offer end-to-end design services including UI/UX design, brand identity design, creative assets, marketing visuals, brochures, packaging, social media creatives, and complete design systems tailored to your brand.",
    },
    {
      q: "How does Brandmingo begin a design project?",
      a: "Every project starts with a deep discovery session where we understand your vision, audience, goals, and brand voice. Once aligned, we begin moodboarding, visual research, and concept development to create the perfect direction.",
    },
    {
      q: "How long does a design project take to complete?",
      a: "Timelines vary based on requirements, but most design projects take 5–15 days, while full brand identity or UI/UX projects may take 2–6 weeks. We always maintain transparency and keep you updated throughout.",
    },
    {
      q: "Will my designs be completely custom?",
      a: "Yes — every design we create is 100% original, handcrafted, and tailored to your brand personality. We do not use templates or generic assets.",
    },
    {
      q: "Can I request revisions if something needs to be changed?",
      a: "Absolutely. All our design packages include revisions. Our priority is to deliver designs that you love and that align perfectly with your brand vision",
    },
    {
      q: "What makes Brandmingo’s design approach unique?",
      a: "We combine user psychology, market research, and creative strategy to produce designs that not only look stunning but also perform. Every element is backed by logic, intention, and brand consistency.",
    },
  ];

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
              <span className="text-[#f4a702] font-medium">DESIGN</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Design
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              We deliver modern, impactful, and brand-focused designs that
              elevate your business presence across every platform. Our creative
              approach blends strategy, innovation, and visual excellence to
              ensure your brand stands out in today’s fast-moving digital world.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- THIRD SECTION ---------------- */}
      {/* SLIDER SECTION - Infinite Loop */}
      <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-white">
                The Core Elements of Exceptional
              </span>
              <span className="text-[#f4a702]"> Brand Design</span>
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
              <span className="text-white">Branding That</span>
              <span className="text-[#f4a702]">Tells Your Story</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We turn your values, personality, and purpose into powerful
              visuals that speak louder than words.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Featured */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-8 sm:p-10 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702] via-orange-400 to-[#f4a702] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  Your Vision, Perfectly Transformed
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  We don’t rely on generic concepts or templates. Every brand
                  identity we create is rooted in your story, values, and market
                  positioning — ensuring a visual presence that feels
                  authentically yours.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  More Than Designs — We Build Meaning
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  We don’t just deliver logos or graphics; we craft visual
                  identities that communicate your message clearly, emotionally,
                  and effectively. Every element we design has purpose and
                  impact.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Fast, Smooth & Professional Execution
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  From concept to final delivery, we ensure a seamless,
                  efficient process. No delays, no confusion — just high-quality
                  brand assets delivered on time with absolute precision.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Complete Branding Support, End-to-End
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  From logo creation to brand guidelines, stationery, social
                  media creatives, and marketing assets — we handle everything
                  your brand needs for a consistent and powerful identity.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  Scalable Branding for Long-Term Growth
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  Your brand evolves, and your identity should too. We build
                  flexible design systems that grow with your business, ensuring
                  long-term consistency and future-proof visual communication.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 p-6 sm:p-8 hover:border-transparent transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/90 via-orange-400/90 to-[#f4a702]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  A Creative Team That Works Like Your Own
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  We work closely with you as true branding partners — aligned
                  with your goals, dedicated to your success, and committed to
                  delivering designs that elevate your business at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Four  SECTION ---------------- */}
      <div className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-white">The Brandmingo</span>
              <span className="text-[#f4a702]">Design Blueprint</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
              We follow a creative-driven, strategy-backed process to craft
              designs that are visually powerful, emotionally engaging, and
              built to strengthen your brand identity.
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
                      Creative Discovery & Brand Understanding
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
                    We start by understanding your brand personality, target
                    audience, competitors, and overall vision. This helps us
                    define the creative direction that aligns with your identity
                    and business goals.
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
                      Concept Planning & Visual Strategy
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
                    Here, we outline the design structure, visual language,
                    inspiration boards, color themes, typography style, and
                    layout direction to ensure every creative element supports
                    your brand’s story.
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
                      UI/UX Design & Visual Prototyping
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
                    We design intuitive, modern, and aesthetically rich
                    visuals—whether it’s website UI, landing pages, logos, or
                    brand creatives. Each element is crafted to deliver a
                    seamless experience with high visual appeal.
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
                      Creative Designing & Execution
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
                    From full-fledged brand identity systems to social
                    creatives, presentations, packaging, and marketing assets —
                    we create polished, professional designs built to elevate
                    your brand across every platform.
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
                      Review, Refinement & Quality Optimization
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
                    Every design goes through a multi-stage review process to
                    refine details, improve clarity, enhance visual harmony, and
                    ensure pixel-perfect output that meets premium quality
                    standards.
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
                      Delivery & Design Support
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
                    We deliver all final design files with complete formats,
                    guidelines, and export versions. Our team also provides
                    ongoing design support for updates, improvements, or new
                    creative needs as your brand grows.
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
              <span className="text-white">Transforming Ideas Into</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Discover the power of a design with purpose.
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We translate your ideas into striking visual concepts that capture
              attention instantly. From moodboards to creative direction, we
              shape a visual identity that reflects your brand personality and
              builds a strong foundation for every design element ahead.
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
                      d="M13 10l7-4m0 0l-4 7m4-7L10 14m-3 1l-1.5 4.5a1 1 0 001.3 1.3L12 19m0 0l-4.5-4.5"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Design built around user behavior, not guesswork.
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Our UI/UX approach blends aesthetics with functionality,
                  ensuring every interaction feels natural, intuitive, and
                  delightful. We create seamless user flows, clean layouts, and
                  engaging interfaces that keep your audience connected and
                  convert visitors into customers.
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
                      d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4m-9 4v6"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Every element designed to strengthen your brand.
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  From social media creatives and marketing banners to brochures
                  and digital assets — we craft premium visuals that echo your
                  brand tone. Our designs maintain consistency, clarity, and
                  impact, ensuring your brand stands out everywhere it appears.
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
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Boost engagement with designs made to perform.
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We create campaign visuals, promotional creatives, and
                  marketing graphics that do more than look good — they
                  persuade, influence, and drive action. Every design is backed
                  by strategy, storytelling, and audience insight for maximum
                  impact.
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
                      d="M3 17l6-6 4 4 8-8M13 7h8v8"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f4a702] transition-colors duration-300">
                  Design that grows as your brand evolves.
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  We build flexible, scalable design systems with structured
                  typography, color palettes, layouts, and components that
                  ensure consistency across every platform. As your brand
                  expands, your design foundation stays strong, adaptable, and
                  instantly recognizable.
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f4a702]/10 to-orange-500/5 rounded-full blur-3xl group-hover:bg-gradient-to-br group-hover:from-[#f4a702]/20 group-hover:to-orange-500/10 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${faqBg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
            <span className="text-white">Your Design Questions,</span>
            <span className="text-[#f4a702]">Answered with Clarity</span>
          </h2>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                {/* Question Row - Slim Height */}
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-3.5 flex justify-between items-center text-left text-white font-medium hover:text-[#f4a702] transition"
                >
                  <span className="text-sm sm:text-base">{item.q}</span>
                  <span className="text-[#f4a702] text-2xl">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                {/* Answer Row - Slim Height */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? "max-h-28 py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
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

export default Design;
