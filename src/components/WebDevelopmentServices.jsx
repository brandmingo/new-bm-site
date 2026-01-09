import React from "react";
import { Check } from "lucide-react";

const WebDevelopmentServices = () => {
  const services = [
    {
      id: 1,
      title: "WordPress Development",
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 122.52 122.523"
          fill="currentColor"
        >
          <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L11.354 35.188a52.662 52.662 0 00-2.646 26.072zm88.038-2.704c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
          <path d="M62.184 65.857l-15.768 45.819a52.716 52.716 0 0032.152.001l-.396-.766-15.988-45.054zm45.25-29.698c.225 1.655.354 3.434.354 5.349 0 5.268-.986 11.188-3.959 18.593l-15.918 46.028c15.493-9.037 25.915-25.787 25.915-44.997 0-9.22-2.394-17.885-6.592-25.336l.2-.637zM61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.526 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
        </svg>
      ),
      features: [
        "Premium Themes",
        "Customized Design",
        "Responsive Website",
        "SEO Friendly",
        "Contact Form",
        "Leads Database",
        "Whatsapp Integration",
        "Call to Action",
        "Admin Panel",
      ],
    },
    {
      id: 2,
      title: "WooCommerce",
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 122.52 122.52"
          fill="currentColor"
        >
          <path d="M61.26 0C27.48 0 0 27.48 0 61.26s27.48 61.26 61.26 61.26 61.26-27.48 61.26-61.26S95.04 0 61.26 0zm37.11 41.03c-1.71 8.87-5.78 22.79-11.13 37.29-5.37 14.58-10.23 25.04-12.78 29.14-2.97-3.84-9.61-14.13-15.69-28.51-4.97-11.75-8.17-21.53-9.57-26.73-.69.19-1.93 3.08-2.98 6.96-.68 2.53-1.21 4.77-1.57 6.48l-5.73-1.7c2.86-11.59 6.32-21.26 9.04-26.4 3.46-6.56 6.96-9.94 10.38-10.04 3.13-.09 5.74 2.28 7.73 7.03 2.47 5.89 5.3 14.75 8.43 26.34 3.04 11.26 5.28 18.83 6.67 22.52 3.37-7.63 7.15-18.37 10.62-31.43 2.62-9.87 3.94-16.34 3.92-19.23-.02-2.71-.66-4.2-1.9-4.43-1.61-.3-4.04.82-7.21 3.32l-2.25-4.89c4.89-4.08 9.4-6.52 13.39-7.24 3.89-.71 6.67.65 8.27 4.04 1.29 2.73 1.76 7.41 1.36 13.88z" />
        </svg>
      ),
      features: [
        "Premium Themes",
        "Orders",
        "Catalogue",
        "Product Listing",
        "Payment Gateway",
        "Customized Design",
        "Responsive Website",
        "SEO Friendly",
        "Admin Panel",
      ],
    },
    {
      id: 3,
      title: "Shopify Development",
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 122.52 122.52"
          fill="currentColor"
        >
          <path d="M95.7 27.8c-.1-.6-.5-.9-1-.9-.4 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.8-.8-2.4-.5-3 0-.1 0-1.6.5-4.2 1.3-2.5-7.3-7-14-14.9-14h-.6c-2.1-2.8-4.7-4.1-7-4.1-17.4 0-25.7 21.7-28.3 32.7-7.4 2.3-12.6 3.9-13.2 4.1-4.1 1.3-4.2 1.4-4.7 5.3C1 45.5 0 108.1 0 108.1l74.3 12.9 44.2-9.8S95.8 28.4 95.7 27.8zM68.8 30.4c-1.9.6-4 1.2-6.3 2V31c0-3.5-.5-6.3-1.3-8.6 3.7.5 6.3 4.5 7.6 8zm-11.4-13c.8 1.6 1.4 4 1.7 7.5v.4c-4.6 1.4-9.6 3-14.7 4.5 2.8-10.7 8.2-16.2 13-17.4zM51 4.6c1 0 2 .3 2.9 1-6.4 2.1-13.1 9.3-16 22.6-3.8 1.2-7.4 2.3-10.7 3.3C29.9 19.9 37.3 4.6 51 4.6z" />
          <path d="M94.7 26.9c-.4 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.3-.3-.6-.4-1-.5L74.3 121l44.2-9.8S95.8 28.4 95.7 27.8c-.1-.6-.5-.9-1-.9zm-13.2 39.8c-1.5-.8-2.6-1.4-2.6-2.5 0-1.2 1-2 2.6-2 2.3 0 5.2 1 7.5 2.4v-8.5c-2.5-1.2-5-1.8-7.5-1.8-6.2 0-10.5 3.8-10.5 9.1 0 3 2.1 5.3 6 7.4 3.2 1.6 4.3 2.8 4.3 4.5 0 1.8-1.4 2.6-3.4 2.6-3.3 0-7.5-1.7-10.8-4v9c2.8 1.7 6.7 2.5 10 2.5 6.4 0 11-3.2 11-9.4.1-3.4-2.3-5.8-6.6-8.3z" />
        </svg>
      ),
      features: [
        "Ecommerce Store",
        "Premium Themes",
        "Orders",
        "Collections",
        "Product Listing",
        "Payment Gateway",
        "Responsive Website",
        "SEO Friendly",
        "Admin Panel",
      ],
    },
    {
      id: 4,
      title: "React Website Development",
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="currentColor"
        >
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
      features: [
        "Single Page Application (SPA)",
        "Lightning Fast Performance",
        "Reusable UI Components",
        "API Integration",
        "Mobile Responsive Design",
        "SEO Optimized Structure",
        "Secure Authentication",
        "Admin Dashboard",
        "Scalable Architecture",
      ],
    },
  ];

  return (
    <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-white block mb-2">
              Your Premier Full-Service Web
            </span>
            <span className="text-[#f4a702]">Development Company in India</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
            At <span className="font-semibold text-[#f4a702]">Brandmwigo</span>{" "}
            we take immense pride in being India's premier full-service social
            media management agency. Our commitment to excellence is unwavering,
            demonstrated through our strategic prowess, creative content, and
            data-driven insights. We offer a comprehensive suite of services,
            encompassing everything from content creation to audience engagement
            and performance analysis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#f4a702]/50 hover:shadow-lg hover:shadow-[#f4a702]/20 transition-all duration-300 group"
            >
              {/* Icon Header */}
              <div className="w-20 h-20 rounded-xl bg-[#f4a702]/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:bg-[#f4a702] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#f4a702] transition-colors">
                {service.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check className="w-5 h-5 text-[#f4a702]" />
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-[#f4a702] border border-[#f4a702] text-black font-semibold py-3 px-6 rounded-xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
