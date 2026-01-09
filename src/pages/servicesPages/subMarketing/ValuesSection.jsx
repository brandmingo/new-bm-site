import React, { useEffect, useRef, useState } from "react";

const ValuesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const values = [
    {
      title: "Brand Recognition",
      desc: "Strengthen your brand's visibility and trustworthiness, making it a recognized and respected name in the industry.",
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Brand Awareness",
      desc: "Our strategic approach ensures your brand's visibility and recognition, making a memorable mark in your industry.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Social Media Engagement",
      desc: "Transform your brand's social media presence with engaging content, fostering valuable connections.",
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
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      title: "Profile Optimization",
      desc: "Enhance your online presence with profile optimization that captivates, engages, and leaves a lasting impact on your audience.",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Social Media Posting",
      desc: "Stay connected and engaged with your audience through consistent, meaningful, and impactful social media content.",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Social Media Boosting",
      desc: "Supercharge your online presence with our targeted strategies, expanding your reach and elevating your brand's influence.",
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
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#f4a702] bg-[#f4a702]/10 px-4 py-2 rounded-full border border-[#f4a702]/30">
              Our Values
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">We're Your Full-Service </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
              SMM Company in India
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            At Brandmingo we take immense pride in being India's premier
            full-service social media management agency. Our commitment to
            excellence is unwavering, demonstrated through our strategic
            prowess, creative content, and data-driven insights. We offer a
            comprehensive suite of services, encompassing everything from
            content creation to audience engagement and performance analysis.
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

export default ValuesSection;
