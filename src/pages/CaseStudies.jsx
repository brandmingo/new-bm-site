import React from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
import CaseStudiesPage from "./CaseStudiesPage";

const CaseStudies = () => {
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
              <span className="text-[#f4a702] font-medium">CASE-STUDIES</span>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] space-y-4 sm:space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-4 sm:mt-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] via-orange-400 to-[#f4a702]">
                Case-studies
              </span>
            </h1>

            <p className="max-w-3xl text-center text-gray-200 text-xs sm:text-sm md:text-base px-2">
              Witness how smart strategy, powerful creativity, and data-backed
              campaigns helped brands scale faster. At Brandmingo, every case
              study reflects measurable impact, real business growth, and
              marketing that truly delivers results.
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}

      <CaseStudiesPage />
    </div>
  );
};

export default CaseStudies;
