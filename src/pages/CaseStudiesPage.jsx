// import React, { useState, useEffect, useRef } from "react";
// import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

// const CaseStudiesPage = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [visibleCards, setVisibleCards] = useState([]);
//   const cardRefs = useRef([]);

//   const caseStudies = [
//     {
//       id: 1,
//       title: "Illuminating Growth",
//       description:
//         "Discover how digiBanda empowered Tisva to accelerate growth with data-driven strategies, driving remarkable store visits, conversions, and social media engagement.",
//       image: "/src/assets/images/PortfolioImages/develpment/aureialondon.png",
//       category: "E-Commerce Strategy",
//       stats: ["300% ROI", "5M+ Reach"],
//       slug: "aureialondon",
//     },
//     {
//       id: 2,
//       title: "See Beyond the Ordinary",
//       description:
//         "Discover how digiBanda partnered with IDEE Eyewear to craft a bold, stylish, and user-centric website that elevates their online presence, reflecting their unique See Through philosophy.",
//       image: "/api/placeholder/800/600",
//       category: "Brand Identity",
//       stats: ["200% Engagement", "98% Satisfaction"],
//       slug: "see-beyond-ordinary-idee",
//     },
//     {
//       id: 3,
//       title: "E-Commerce Revolution",
//       description:
//         "Transformed a traditional retail business into a thriving online marketplace with seamless UX, secure payment integration, and intelligent inventory management.",
//       image: "/api/placeholder/800/600",
//       category: "Full-Stack Development",
//       stats: ["500K+ Users", "99.9% Uptime"],
//       slug: "ecommerce-revolution",
//     },
//     {
//       id: 4,
//       title: "Brand Renaissance",
//       description:
//         "A comprehensive rebranding project that repositioned a legacy company for the modern market with fresh visual identity, messaging, and digital presence.",
//       image: "/api/placeholder/800/600",
//       category: "Rebranding",
//       stats: ["250% Recognition", "5+ Awards"],
//       slug: "brand-renaissance",
//     },
//     {
//       id: 5,
//       title: "Social Media Domination",
//       description:
//         "Created a multi-platform social media strategy that generated millions of impressions and built a loyal community around the brand.",
//       image: "/api/placeholder/800/600",
//       category: "Digital Marketing",
//       stats: ["10M+ Reach", "500% Growth"],
//       slug: "social-media-domination",
//     },
//     {
//       id: 6,
//       title: "Mobile-First Innovation",
//       description:
//         "Developed a cutting-edge mobile application with intuitive UX, real-time features, and seamless performance across iOS and Android platforms.",
//       image: "/api/placeholder/800/600",
//       category: "App Development",
//       stats: ["4.8★ Rating", "1M+ Downloads"],
//       slug: "mobile-first-innovation",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.dataset.index);
//             setTimeout(() => {
//               setVisibleCards((prev) => [...new Set([...prev, index])]);
//             }, index * 150);
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px" }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const handleProjectClick = (slug) => {
//     window.location.href = `/case-study/${slug}`;
//   };

//   return (
//     <div className="w-full min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Grid - 2 columns on desktop */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
//           {caseStudies.map((study, index) => (
//             <div
//               key={study.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               data-index={index}
//               onMouseEnter={() => setHoveredCard(study.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className={`relative group transition-all duration-1000 ease-out ${
//                 visibleCards.includes(index)
//                   ? "opacity-100 translate-y-0 scale-100"
//                   : "opacity-0 translate-y-16 scale-95"
//               }`}
//             >
//               {/* Main Card */}
//               <div className="relative bg-gradient-to-br from-gray-900/80 to-black rounded-3xl overflow-hidden border-2 border-gray-800 transition-all duration-500 hover:border-[#f4a702] hover:shadow-2xl hover:shadow-[#f4a702]/30 h-full">
//                 {/* Animated Gradient Background */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-500/5 to-transparent opacity-0 transition-opacity duration-700 ${
//                     hoveredCard === study.id ? "opacity-100" : ""
//                   }`}
//                 ></div>

//                 {/* Sparkle Effects */}
//                 <div
//                   className={`absolute top-6 right-6 transition-all duration-500 ${
//                     hoveredCard === study.id
//                       ? "opacity-100 scale-100"
//                       : "opacity-0 scale-50"
//                   }`}
//                 >
//                   <Sparkles className="w-6 h-6 text-[#f4a702] animate-pulse" />
//                 </div>

//                 {/* Image Section */}
//                 <div className="relative h-80 lg:h-96 overflow-hidden bg-gray-950">
//                   <img
//                     src={study.image}
//                     alt={study.title}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
//                   />

//                   {/* Gradient Overlay with Animation */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/30 transition-all duration-500"></div>

//                   {/* Category Badge on Image */}
//                   <div
//                     className={`absolute top-6 left-6 transition-all duration-500 ${
//                       hoveredCard === study.id ? "translate-x-2" : ""
//                     }`}
//                   >
//                     <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-[#f4a702]/40">
//                       <TrendingUp className="w-4 h-4 text-[#f4a702]" />
//                       <span className="text-[#f4a702] text-xs font-bold uppercase tracking-wider">
//                         {study.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Stats Overlay - Slides up on hover */}
//                   <div
//                     className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
//                       hoveredCard === study.id
//                         ? "translate-y-0 opacity-100"
//                         : "translate-y-full opacity-0"
//                     }`}
//                   >
//                     <div className="flex gap-4">
//                       {study.stats.map((stat, idx) => (
//                         <div
//                           key={idx}
//                           className="flex-1 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-[#f4a702]/30"
//                         >
//                           <div className="text-[#f4a702] font-bold text-sm text-center">
//                             {stat}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8 relative">
//                   {/* Decorative Line */}
//                   <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

//                   {/* Title with Glow Effect */}
//                   <h3
//                     className={`text-3xl font-bold mb-4 transition-all duration-300 ${
//                       hoveredCard === study.id
//                         ? "text-[#f4a702] drop-shadow-[0_0_10px_rgba(244,167,2,0.5)]"
//                         : "text-white"
//                     }`}
//                   >
//                     {study.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-400 text-base leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
//                     {study.description}
//                   </p>

//                   {/* CTA Button with Enhanced Design */}
//                   <button
//                     onClick={() => handleProjectClick(study.slug)}
//                     className="group/btn relative overflow-hidden inline-flex items-center gap-2 bg-white hover:bg-gradient-to-r hover:from-[#f4a702] hover:via-orange-400 hover:to-[#f4a702] text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#f4a702]/50 transform hover:scale-105"
//                   >
//                     <span className="relative z-10">Dive Deeper</span>
//                     <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />

//                     {/* Button Shine Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
//                   </button>
//                 </div>

//                 {/* Corner Accent Lines */}
//                 <div
//                   className={`absolute bottom-0 right-0 w-32 h-32 transition-all duration-500 ${
//                     hoveredCard === study.id ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-[#f4a702] rounded-br-3xl"></div>
//                 </div>

//                 {/* Number Badge */}
//                 <div className="absolute top-6 right-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 w-12 h-12 rounded-full flex items-center justify-center group-hover:border-[#f4a702] transition-all duration-300">
//                   <span className="text-[#f4a702] font-bold text-lg">
//                     0{index + 1}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudiesPage;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const CaseStudiesPage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const caseStudies = [
    {
      id: 1,
      title: "Illuminating Growth",
      description:
        "Discover how digiBanda empowered Tisva to accelerate growth with data-driven strategies, driving remarkable store visits, conversions, and social media engagement.",
      image: "/src/assets/images/PortfolioImages/develpment/aureialondon.png",
      category: "E-Commerce Strategy",
      stats: ["300% ROI", "5M+ Reach"],
      slug: "aureialondon",
    },
    {
      id: 2,
      title: "See Beyond the Ordinary",
      description:
        "Discover how digiBanda partnered with IDEE Eyewear to craft a bold, stylish, and user-centric website that elevates their online presence, reflecting their unique See Through philosophy.",
      image: "/api/placeholder/800/600",
      category: "Brand Identity",
      stats: ["200% Engagement", "98% Satisfaction"],
      slug: "see-beyond-ordinary-idee",
    },
    {
      id: 3,
      title: "E-Commerce Revolution",
      description:
        "Transformed a traditional retail business into a thriving online marketplace with seamless UX, secure payment integration, and intelligent inventory management.",
      image: "/api/placeholder/800/600",
      category: "Full-Stack Development",
      stats: ["500K+ Users", "99.9% Uptime"],
      slug: "ecommerce-revolution",
    },
    {
      id: 4,
      title: "Brand Renaissance",
      description:
        "A comprehensive rebranding project that repositioned a legacy company for the modern market with fresh visual identity, messaging, and digital presence.",
      image: "/api/placeholder/800/600",
      category: "Rebranding",
      stats: ["250% Recognition", "5+ Awards"],
      slug: "brand-renaissance",
    },
    {
      id: 5,
      title: "Social Media Domination",
      description:
        "Created a multi-platform social media strategy that generated millions of impressions and built a loyal community around the brand.",
      image: "/api/placeholder/800/600",
      category: "Digital Marketing",
      stats: ["10M+ Reach", "500% Growth"],
      slug: "social-media-domination",
    },
    {
      id: 6,
      title: "Mobile-First Innovation",
      description:
        "Developed a cutting-edge mobile application with intuitive UX, real-time features, and seamless performance across iOS and Android platforms.",
      image: "/api/placeholder/800/600",
      category: "App Development",
      stats: ["4.8★ Rating", "1M+ Downloads"],
      slug: "mobile-first-innovation",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (slug) => {
    navigate(`/case-study/${slug}`);
  };

  return (
    <div className="w-full min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group transition-all duration-1000 ease-out ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-16 scale-95"
              }`}
            >
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black rounded-3xl overflow-hidden border-2 border-gray-800 transition-all duration-500 hover:border-[#f4a702] hover:shadow-2xl hover:shadow-[#f4a702]/30 h-full">
                {/* Animated Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-orange-500/5 to-transparent opacity-0 transition-opacity duration-700 ${
                    hoveredCard === study.id ? "opacity-100" : ""
                  }`}
                ></div>

                {/* Sparkle Effects */}
                <div
                  className={`absolute top-6 right-6 transition-all duration-500 ${
                    hoveredCard === study.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  <Sparkles className="w-6 h-6 text-[#f4a702] animate-pulse" />
                </div>

                {/* Image Section */}
                <div className="relative h-80 lg:h-96 overflow-hidden bg-gray-950">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Gradient Overlay with Animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/30 transition-all duration-500"></div>

                  {/* Category Badge on Image */}
                  <div
                    className={`absolute top-6 left-6 transition-all duration-500 ${
                      hoveredCard === study.id ? "translate-x-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-[#f4a702]/40">
                      <TrendingUp className="w-4 h-4 text-[#f4a702]" />
                      <span className="text-[#f4a702] text-xs font-bold uppercase tracking-wider">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Stats Overlay - Slides up on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                      hoveredCard === study.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    <div className="flex gap-4">
                      {study.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-[#f4a702]/30"
                        >
                          <div className="text-[#f4a702] font-bold text-sm text-center">
                            {stat}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  {/* Decorative Line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                  {/* Title with Glow Effect */}
                  <h3
                    className={`text-3xl font-bold mb-4 transition-all duration-300 ${
                      hoveredCard === study.id
                        ? "text-[#f4a702] drop-shadow-[0_0_10px_rgba(244,167,2,0.5)]"
                        : "text-white"
                    }`}
                  >
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                    {study.description}
                  </p>

                  {/* CTA Button with Enhanced Design */}
                  <button
                    onClick={() => handleProjectClick(study.slug)}
                    className="group/btn relative overflow-hidden inline-flex items-center gap-2 bg-white hover:bg-gradient-to-r hover:from-[#f4a702] hover:via-orange-400 hover:to-[#f4a702] text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#f4a702]/50 transform hover:scale-105"
                  >
                    <span className="relative z-10">Dive Deeper</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />

                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Corner Accent Lines */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 transition-all duration-500 ${
                    hoveredCard === study.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-[#f4a702] rounded-br-3xl"></div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 w-12 h-12 rounded-full flex items-center justify-center group-hover:border-[#f4a702] transition-all duration-300">
                  <span className="text-[#f4a702] font-bold text-lg">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
