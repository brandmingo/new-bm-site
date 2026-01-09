import React, { useEffect, useRef, useState } from "react";

const AdvertisingSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const platforms = [
    {
      name: "Google Ads",
      description: "Google Ads is recognized online advertising platform.",
      image: "/src/assets/images/23.png", // Replace with your image path
      delay: "0ms",
    },
    {
      name: "Facebook Ads",
      description: "Facebook offers a powerful advertising platform.",
      image: "/src/assets/images/24.png", // Replace with your image path
      delay: "100ms",
    },
    {
      name: "LinkedIn Ads",
      description: "Our LinkedIn Ads Services offer a powerful way to target.",
      image: "/src/assets/images/25.png", // Replace with your image path
      delay: "200ms",
    },
    {
      name: "Quora Ads",
      description: "Quora to boost your brand's online presence and engage.",
      image: "/src/assets/images/26.png", // Replace with your image path
      delay: "0ms",
    },
    {
      name: "Pinterest Ads",
      description:
        "Pinterest to grow your brand's visibility and inspire action.",
      image: "/src/assets/images/27.png", // Replace with your image path
      delay: "100ms",
    },
    {
      name: "Twitter Ads",
      description:
        "Twitter ads aimed reaching precisely the right audience for your audience.",
      image: "/src/assets/images/Untitled-design-6.png", // Replace with your image path
      delay: "200ms",
    },
  ];

  return (
    <div
      className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Get More Customers with Our Targeted
          </h2>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#f4a702] transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Advertising Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-900/80 to-black border-2 border-gray-800 rounded-2xl p-8 hover:border-[#f4a702]/50 hover:shadow-2xl hover:shadow-[#f4a702]/20 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? platform.delay : "0ms",
                transitionDuration: "800ms",
              }}
            >
              {/* Image Container */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-[#f4a702]/30 transition-all duration-300">
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<div class="text-4xl">📢</div>';
                  }}
                />
              </div>

              {/* Platform Name */}
              <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4 group-hover:text-[#f4a702] transition-colors duration-300">
                {platform.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {platform.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 w-0 h-1 bg-[#f4a702] mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Optional CTA Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="bg-[#f4a702] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#f4a702]/50">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingSolutions;
