import React from "react";

const WhyUs = () => {
  const whyUsCards = [
    {
      number: "01",
      title: "Innovation",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
      description:
        "We constantly push boundaries with cutting-edge strategies and creative solutions that keep your brand ahead of the curve.",
    },
    {
      number: "02",
      title: "Expertise",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      description:
        "Our team of 50+ digital wizards brings over a decade of experience in transforming brands and driving results.",
    },
    {
      number: "03",
      title: "Collaboration",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
      description:
        "We work closely with you as partners, understanding your vision and turning it into reality with seamless teamwork.",
    },
    {
      number: "04",
      title: "Results",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description:
        "We deliver measurable outcomes that make your competition green with envy and take your brand to new heights.",
    },
    {
      number: "05",
      title: "Creativity",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop",
      description:
        "Our quirky approach and out-of-the-box thinking ensures your brand stands out in the digital crowd.",
    },
    {
      number: "06",
      title: "Strategy",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
      description:
        "Proven strategies backed by data and insights to craft campaigns that captivate and convert your audience.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-white">
            Why Us?
          </h3>
          <p className="max-w-4xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            At,{" "}
            <span className="text-[#f4a702] font-semibold">
              Brandmingo Media Private Limited
            </span>{" "}
            is we combine creativity, strategy, and technology to help your
            brand shine in the digital world. From building strong identities to
            delivering measurable results, we make your growth our mission.
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUsCards.map((card, index) => (
            <div key={index} className="group flip-card-wrapper relative">
              {/* Outer Glow - Custom CSS needed for blur effect */}
              <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 glow-effect"></div>

              {/* Card Container */}
              <div className="flip-card relative w-full h-[400px] sm:h-[400px] xs:h-[350px]">
                <div className="flip-card-inner relative w-full h-full transition-transform duration-800">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 flex flex-col justify-center items-center rounded-3xl p-8 sm:p-8 xs:p-6 bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 group-hover:border-[#f4a702]/60">
                    {/* Radial Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:from-amber-900/50 group-hover:via-yellow-800/40 group-hover:to-orange-900/50 transition-all duration-700"></div>

                    {/* Center Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#f4a702]/0 group-hover:bg-[#f4a702]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    <span className="absolute top-6 left-6 text-base font-bold text-[#f4a702] z-10">
                      {card.number}
                    </span>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[180px] sm:h-[180px] xs:h-[150px] object-cover rounded-2xl mb-6 opacity-90 relative z-10"
                    />
                    <h4 className="text-3xl sm:text-2xl xs:text-xl font-bold text-white mb-2 transition-colors duration-700 relative z-10">
                      {card.title}
                    </h4>
                    <div className="w-[60px] h-[3px] bg-[#f4a702] mt-2 relative z-10"></div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 flex flex-col justify-center items-center rounded-3xl p-8 sm:p-8 xs:p-6 bg-gradient-to-br from-gray-900/50 to-black border border-gray-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 group-hover:border-[#f4a702]/60">
                    {/* Radial Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:from-amber-900/50 group-hover:via-yellow-800/40 group-hover:to-orange-900/50 transition-all duration-700"></div>

                    {/* Center Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#f4a702]/0 group-hover:bg-[#f4a702]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                    <span className="absolute top-6 left-6 text-base font-bold text-[#f4a702] z-10">
                      {card.number}
                    </span>
                    <h4 className="text-3xl sm:text-2xl xs:text-xl font-bold text-white mb-4 transition-colors duration-700 relative z-10">
                      {card.title}
                    </h4>
                    <div className="w-[60px] h-[3px] bg-[#f4a702] mb-6 relative z-10"></div>
                    <p className="text-base sm:text-sm xs:text-sm leading-relaxed text-white/85 text-center relative z-10">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Custom CSS for flip effect and glow */}
      <style jsx>{`
        .flip-card-wrapper {
          perspective: 1000px;
        }

        .flip-card-inner {
          transform-style: preserve-3d;
        }

        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .glow-effect {
          background: linear-gradient(
            to right,
            rgba(244, 167, 2, 0.3),
            rgba(255, 140, 66, 0.3),
            rgba(244, 167, 2, 0.3)
          );
          filter: blur(40px);
        }

        @media (max-width: 480px) {
          .flip-card {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
