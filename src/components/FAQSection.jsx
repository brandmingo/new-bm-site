import { useState } from "react";
import faqBg from "/src/assets/images/Home/bg-home2.png";
import PrimaryButton from "../components/PrimaryButton.jsx";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What kind of clients does Brandmingo work with?",
      a: "We work with startups, growing businesses, creators, and established brands looking for premium design, development, or digital marketing support",
    },
    {
      q: "What services does Brandmingo offer?",
      a: "We provide branding, web development, UI/UX design, performance marketing, social media management, SEO, and full digital growth solutions.",
    },
    {
      q: "How does Brandmingo handle new projects?",
      a: "We begin with discovery → plan strategy → design → execute → optimize.Every project is structured for clarity, speed, and results.",
    },
    {
      q: "How soon can I expect results?",
      a: "Branding & websites show impact instantly.Marketing results typically appear within 20–45 days depending on the campaign type.",
    },
    {
      q: "What sets Brandmingo apart from other agencies?",
      a: "Premium design quality, fast delivery, transparent communication, and data-driven marketing make us a reliable long-term growth partner",
    },
    {
      q: "Does Brandmingo offer complete branding services?",
      a: "Yes, we handle everything from logo design to brand identity, guidelines, packaging, tone of voice, and full visual brand systems.",
    },
  ];

  return (
    <div
      className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${faqBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
          <span className="text-white">Have Questions? </span>
          <span className="text-[#f4a702]">Here Are the Answers</span>
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

        {/* 🔥 Final "Let's Talk" Button */}
        <a
          href="mailto:brandmingomedia@gmail.com"
          className="flex justify-center mt-12"
        >
          <PrimaryButton>Let’s Talk</PrimaryButton>
        </a>
      </div>
    </div>
  );
}

export default FAQSection;
