import React from "react";
import aboutHeroBg from "/src/assets/images/Home/bg-home2.png";
import { ArrowUpRight } from "lucide-react";

const Aureialondon = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      >
        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

        {/* Top padding to account for fixed navbar */}
        <div className="h-20"></div>

        {/* Content Container - Optimized for Laptop Screen */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-16">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
            {/* Left Content - Takes 6 columns on large screens */}
            <div className="lg:col-span-6 space-y-4 lg:space-y-6">
              {/* Client Badge with Animation */}
              <div className="inline-block animate-fade-in">
                <span className="bg-gradient-to-r from-[#f4a702] to-orange-600 text-black text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg shadow-[#f4a702]/30 inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  TISVA
                </span>
              </div>

              {/* Title with Creative Styling */}
              <div className="space-y-2 lg:space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
                  <span className="text-[#f4a702]">Illuminating </span>
                  <span className="text-white">Growth</span>
                </h1>

                {/* Decorative Line */}
                <div className="flex items-center gap-3">
                  <div className="h-1 w-16 lg:w-20 bg-gradient-to-r from-[#f4a702] to-orange-600 rounded-full"></div>
                  <div className="h-1 w-8 lg:w-12 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Description with Better Typography */}
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
                Discover how digiBanda empowered Tisva to accelerate growth with
                data-driven strategies, driving remarkable store visits,
                conversions, and social media engagement.
              </p>

              {/* Service Tags - Creative Layout */}
              <div className="space-y-2 lg:space-y-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  <span className="group bg-black/60 backdrop-blur-md text-white text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] hover:text-black transition-all duration-300 cursor-pointer">
                    Digital Marketing Strategy
                  </span>
                  <span className="group bg-black/60 backdrop-blur-md text-white text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] hover:text-black transition-all duration-300 cursor-pointer">
                    Social Media Management
                  </span>
                  <span className="group bg-black/60 backdrop-blur-md text-white text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] hover:text-black transition-all duration-300 cursor-pointer">
                    Branding
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="group bg-black/60 backdrop-blur-md text-white text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] hover:text-black transition-all duration-300 cursor-pointer">
                    SEO
                  </span>
                  <span className="group bg-black/60 backdrop-blur-md text-white text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] hover:text-black transition-all duration-300 cursor-pointer">
                    UI/UX
                  </span>
                  <span className="group bg-black/60 backdrop-blur-md text-white text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] hover:text-black transition-all duration-300 cursor-pointer">
                    Retail Foot Traffic
                  </span>
                  <span className="group bg-black/60 backdrop-blur-md text-white text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-gray-700 hover:border-[#f4a702] hover:bg-[#f4a702] hover:text-black transition-all duration-300 cursor-pointer">
                    Development
                  </span>
                </div>
              </div>

              {/* CTA Button with Creative Design */}
              <div className="pt-3 lg:pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919990613140"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#f4a702] to-orange-600 text-black font-bold py-2.5 lg:py-3 px-6 lg:px-8 rounded-full transition-all duration-300 shadow-xl shadow-[#f4a702]/40 hover:shadow-2xl hover:shadow-[#f4a702]/60 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Book a Call</span>
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </a>

                {/* Secondary Button */}
                <button className="group bg-white/10 backdrop-blur-md text-white font-bold py-2.5 lg:py-3 px-6 lg:px-8 rounded-full border-2 border-white/20 hover:border-[#f4a702] hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Image - Takes 6 columns, Full Height */}
            <div className="lg:col-span-6 relative group mt-8 lg:mt-0">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#f4a702]/30 to-orange-600/30 rounded-3xl blur-3xl group-hover:blur-[80px] transition-all duration-700 opacity-60"></div>

              {/* Image Container - Laptop Optimized Height */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-800 group-hover:border-[#f4a702] transition-all duration-500 shadow-2xl shadow-black/50">
                {/* Image with laptop-optimized height */}
                <div className="h-[400px] sm:h-[500px] lg:h-[65vh] xl:h-[70vh]">
                  <img
                    src="/src/assets/images/PortfolioImages/develpment/aureialondon.png"
                    alt="Tisva Project"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f4a702]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Number Badge */}
              <div className="absolute -top-4 lg:-top-5 -right-4 lg:-right-5 bg-gradient-to-br from-[#f4a702] to-orange-600 text-black w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl shadow-xl shadow-[#f4a702]/50 border-4 border-black group-hover:rotate-12 transition-transform duration-500">
                01
              </div>

              {/* Bottom Stats Card */}
              <div className="absolute -bottom-4 lg:-bottom-5 left-4 lg:left-6 right-4 lg:right-6 bg-black/80 backdrop-blur-xl rounded-xl lg:rounded-2xl p-3 border border-gray-800 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-[#f4a702] font-bold text-lg lg:text-xl">
                      300%
                    </div>
                    <div className="text-gray-400 text-xs">ROI Increase</div>
                  </div>
                  <div>
                    <div className="text-[#f4a702] font-bold text-lg lg:text-xl">
                      5M+
                    </div>
                    <div className="text-gray-400 text-xs">Impressions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Success Snapshot Section */}
      <div className="w-full bg-black py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <span className="text-white">Success </span>
              <span className="text-[#f4a702]">Snapshot</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-base sm:text-lg">
              Experience how our tailored strategy ignited Tisva's growth,
              elevating brand awareness, driving foot traffic, and enhancing
              customer engagement.
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Store Visits */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702] to-orange-500 opacity-0 blur-lg rounded-2xl group-hover:opacity-30 transition"></div>

              <div className="relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 group-hover:border-[#f4a702]/50 transition">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] group-hover:bg-[#f4a702] group-hover:text-white transition">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  {/* Stats */}
                  <div>
                    <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] to-orange-400">
                      1096%
                    </h3>

                    <h4 className="mt-3 text-lg text-white font-bold">
                      Increase in store visits in 1 year
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Conversion Rate */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702] to-orange-500 opacity-0 blur-lg rounded-2xl group-hover:opacity-30 transition"></div>

              <div className="relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 group-hover:border-[#f4a702]/50 transition">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] group-hover:bg-[#f4a702] group-hover:text-white transition">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  {/* Stats */}
                  <div>
                    <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] to-orange-400">
                      45%
                    </h3>

                    <h4 className="mt-3 text-lg text-white font-bold">
                      Increase in conversion rate
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Social Media */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702] to-orange-500 opacity-0 blur-lg rounded-2xl group-hover:opacity-30 transition"></div>

              <div className="relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 group-hover:border-[#f4a702]/50 transition">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] group-hover:bg-[#f4a702] group-hover:text-white transition">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  {/* Stats */}
                  <div>
                    <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f4a702] to-orange-400">
                      78%
                    </h3>

                    <h4 className="mt-3 text-lg text-white font-bold">
                      Increase in social media engagement
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Story Section */}
      <div className="relative">
        {/* Top Black Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>

        <div
          className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-32"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  The Story of <span className="text-[#f4a702]">Tisva</span>
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  TISVA, a brand by Usha International Limited, offers aesthetic
                  luminaires that go beyond ordinary lighting concepts for
                  contemporary homes. Combining beauty with cutting-edge
                  technology, TISVA showcases beautiful lighting with
                  customizable hues, colours, and brightness to suit different
                  moods.
                </p>
              </div>

              {/* Right - Project Name */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="text-right">
                  <h3
                    className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-wider"
                    style={{ fontFamily: "sans-serif", letterSpacing: "0.1em" }}
                  >
                    TISVA
                  </h3>
                  <div className="mt-2 h-1 w-full bg-gradient-to-r from-transparent via-[#f4a702] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Black Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Project Banner Section */}
      <div className="w-full bg-black py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative group overflow-hidden rounded-3xl border-2 border-gray-800 hover:border-[#f4a702]/50 transition-all duration-500">
            {/* Image Container */}
            <div className="relative h-[450px] sm:h-[500px] lg:h-[500px] xl:h-[500px] overflow-hidden bg-black">
              <img
                src="/src/assets/images/PortfolioImages/develpment/aureialondon/3.png"
                alt="Tisva Project Banner"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f4a702]/30 to-orange-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
          </div>
        </div>
      </div>

      {/* The Barrier Section */}
      <div className="w-full bg-black py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              The Barrier They Couldn't{" "}
              <span className="text-[#f4a702]">Overcome</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              TISVA faced significant challenges in the fiercely competitive
              market. Their online presence was weak, struggling to capture the
              attention of potential customers. Visitors to their website often
              found themselves frustrated with the poor user experience,
              navigating through a site that didn't reflect the brand's high
              standards.
            </p>
          </div>

          {/* Barrier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - Online Presence */}
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-6 lg:p-8 text-center hover:border-[#f4a702]/50 transition-all duration-500 transform hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702]/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Online Presence
                </h3>
              </div>
            </div>

            {/* Card 2 - User Experience */}
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-6 lg:p-8 text-center hover:border-[#f4a702]/50 transition-all duration-500 transform hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702]/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  User Experience
                </h3>
              </div>
            </div>

            {/* Card 3 - Website Traffic */}
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-6 lg:p-8 text-center hover:border-[#f4a702]/50 transition-all duration-500 transform hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702]/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Website Traffic
                </h3>
              </div>
            </div>

            {/* Card 4 - Brand Awareness */}
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-6 lg:p-8 text-center hover:border-[#f4a702]/50 transition-all duration-500 transform hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a702]/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Brand Awareness
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Roadmap Section */}
      <div className="w-full bg-black py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              The <span className="text-[#f4a702]">Roadmap</span>
            </h2>
          </div>

          {/* Content Box */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f4a702]/30 to-orange-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 group-hover:border-[#f4a702]/50 rounded-3xl p-8 lg:p-12 transition-all duration-500">
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed text-center">
                After identifying their problems, we went to the drawing board
                and drafted multiple strategies to position TISVA as a market
                leader. Through our efforts, we were able to achieve significant
                results. Their brand identity and messaging were significantly
                improved, resulting in increased brand recognition and
                awareness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Turned Things Around Section */}
      <div className="w-full bg-black py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              How We Turned Things{" "}
              <span className="text-[#f4a702]">Around?</span>
            </h2>
          </div>

          {/* Banner Image */}
          <div className="relative group overflow-hidden rounded-3xl border-2 border-gray-800 hover:border-[#f4a702]/50 transition-all duration-500">
            {/* Image Container */}
            <div className="relative h-[450px] sm:h-[500px] lg:h-[500px] xl:h-[520px] overflow-hidden bg-black">
              <img
                src="/src/assets/images/PortfolioImages/develpment/aureialondon/1.png"
                alt="How We Turned Things Around"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f4a702]/30 to-orange-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aureialondon;
