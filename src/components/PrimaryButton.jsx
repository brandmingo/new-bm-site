function PrimaryButton() {
  return (
    <button className="relative overflow-hidden text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 group shadow-md">
      {/* Default White Background */}
      <span className="absolute inset-0 bg-white rounded-full transition-all duration-300 group-hover:opacity-0"></span>

      {/* Hover Gradient Background */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] via-[#ff6900] to-[#ff4d00] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-white">
        <span className="text-xl leading-none">🔥</span>
        <span>Let's Talk</span>

        <svg
          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      {/* Border Outline */}
      <span className="absolute inset-0 rounded-full border border-neutral-700 group-hover:border-transparent transition-all duration-300"></span>
    </button>
  );
}

export default PrimaryButton;
