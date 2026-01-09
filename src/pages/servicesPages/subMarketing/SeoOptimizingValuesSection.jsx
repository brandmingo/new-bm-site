import React, { useEffect, useRef, useState } from "react";

const SeoOptimizingValuesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const values = [
    {
      title: "Organic Traffic Growth",
      desc: "Drive consistent, high-quality organic traffic through in-depth keyword research, on-page optimization, and content strategies designed to rank your business at the top of search results.",
      icon: (
        <svg
          className="w-12 h-12"
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
    {
      title: "Genuine Lead Generation",
      desc: "We convert traffic into real business inquiries by optimizing landing pages, user experience, and conversion funnels to attract high-intent users.",
      icon: (
        <svg
          className="w-12 h-12"
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
      title: "Local Search Dominance",
      desc: "Boost your presence in local searches with Google Business Profile optimization, local citations, and geo-targeted SEO that brings nearby customers directly to you.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Long-Term SEO Results",
      desc: "Our white-hat SEO practices ensure sustainable rankings, stable traffic growth, and long-lasting digital visibility without risking penalties.",
      icon: (
        <svg
          className="w-12 h-12"
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
      title: "Competitive Advantage",
      desc: "Outrank your competitors with advanced SEO audits, technical optimization, backlink strategies, and continuous performance improvement.",
      icon: (
        <svg
          className="w-12 h-12"
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
      title: "Mobile Search Optimization",
      desc: "We optimize your website for mobile-first indexing, ensuring fast load times, responsive layouts, and seamless user experience across all devices.",
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            values.forEach((_, index) => {
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

  const getCardsBelow = (index) => {
    const row = Math.floor(index / 3);
    const belowCards = [];

    for (let i = (row + 1) * 3; i < (row + 2) * 3 && i < values.length; i++) {
      belowCards.push(i);
    }

    return belowCards;
  };

  return (
    <div
      className="w-full bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">We’re Your Trusted SEO Growth</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
              Partner in India
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            At Brandmingo, we craft result-driven SEO strategies that boost
            visibility, attract qualified traffic, and deliver long-term digital
            growth. Our data-backed approach ensures your brand ranks, converts,
            and stays ahead of the competition in every search landscape.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, i) => {
            const isVisible = visibleCards.includes(i);
            const isHovered = hoveredIndex === i;
            const isBelowHovered =
              hoveredIndex !== null && getCardsBelow(hoveredIndex).includes(i);

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } ${isBelowHovered ? "animate-bounce-subtle" : ""}`}
              >
                {/* Glow effect for below cards */}
                {isBelowHovered && (
                  <div className="absolute -inset-1 bg-[#f4a702]/20 rounded-2xl blur-xl animate-pulse"></div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full bg-gradient-to-br from-gray-900/80 to-black border-2 rounded-2xl p-8 transition-all duration-500 ${
                    isHovered
                      ? "border-[#f4a702] -translate-y-3 shadow-2xl shadow-[#f4a702]/30"
                      : isBelowHovered
                      ? "border-[#f4a702]/50 translate-y-1 shadow-lg shadow-[#f4a702]/20"
                      : "border-gray-800"
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 flex items-center justify-center transition-all duration-500 ${
                      isHovered
                        ? "border-[#f4a702] bg-[#f4a702] scale-110 rotate-6"
                        : isBelowHovered
                        ? "border-[#f4a702] scale-105"
                        : "border-[#f4a702]/30"
                    }`}
                  >
                    <div
                      className={`transition-all duration-500 ${
                        isHovered ? "text-white" : "text-[#f4a702]"
                      } ${isBelowHovered ? "scale-110" : ""}`}
                    >
                      {value.icon}
                    </div>

                    {/* Pulse ring for below cards */}
                    {isBelowHovered && (
                      <div className="absolute inset-0 border-2 border-[#f4a702] rounded-xl animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-center mb-4 transition-all duration-300 ${
                      isHovered || isBelowHovered
                        ? "text-[#f4a702]"
                        : "text-white"
                    }`}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm sm:text-base text-center leading-relaxed transition-colors duration-300 ${
                      isHovered || isBelowHovered
                        ? "text-gray-200"
                        : "text-gray-400"
                    }`}
                  >
                    {value.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-[#f4a702] rounded-b-2xl transition-all duration-500 ${
                      isHovered
                        ? "opacity-100"
                        : isBelowHovered
                        ? "opacity-50"
                        : "opacity-0"
                    }`}
                  ></div>

                  {/* Corner decorations */}
                  <div
                    className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl transition-all duration-500 ${
                      isHovered || isBelowHovered
                        ? "border-[#f4a702]"
                        : "border-transparent"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl transition-all duration-500 ${
                      isHovered || isBelowHovered
                        ? "border-[#f4a702]"
                        : "border-transparent"
                    }`}
                  ></div>

                  {/* Connection line */}
                  {isHovered && getCardsBelow(i).length > 0 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#f4a702] to-transparent animate-pulse"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SeoOptimizingValuesSection;
