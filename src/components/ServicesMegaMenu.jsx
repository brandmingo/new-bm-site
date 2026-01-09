import React, { useState } from "react";
import { ChevronRight, Code, Palette, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const services = {
    development: {
      title: "Development",
      icon: Code,
      mainLink: "/services/webdevelopment",
      items: [
        { name: "WordPress Development", link: "/services/wordpress-website" },
        { name: "Shopify Development", link: "/services/shopify" },
        { name: "E-Commerce Solutions", link: "/services/e-commerce" },
        { name: "React Development", link: "services/react-website" },
        { name: "PHP Development", link: "/services/php-website" },
      ],
    },
    design: {
      title: "Design",
      icon: Palette,
      mainLink: "/services/design",
      items: [
        { name: "Branding", link: "/services/design" },
        { name: "UI/UX Design", link: "/services/design" },
        { name: "Graphic Design", link: "/services/design" },
        { name: "Logo Design", link: "/services/design" },
        { name: "Print Design", link: "/services/design" },
      ],
    },
    marketing: {
      title: "Marketing",
      icon: TrendingUp,
      mainLink: "/services/marketing",
      items: [
        {
          name: "Ads And Campaigns",
          link: "/services/ads-and-campaigns",
        },
        {
          name: "Social Media Management",
          link: "/services/social-media-marketing",
        },
        { name: "SEO Optimizing", link: "/services/seo-optimizing" },
        {
          name: "Ecommerce Account Management",
          link: "/services/e-commerce-account-management",
        },
      ],
    },
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Services Link */}
      <Link
        to="/services"
        className="text-sm font-medium tracking-wide text-white hover:text-[#f4a702] transition-colors duration-300"
      >
        Services
      </Link>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 pt-4 w-screen max-w-5xl z-50"
          style={{ top: "100%" }}
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-8 p-8">
              {Object.entries(services).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <div key={key} className="space-y-4">
                    {/* Category Header - Now Clickable */}
                    <Link
                      to={category.mainLink}
                      onClick={handleLinkClick}
                      className="group/header flex items-center gap-3 pb-3 border-b border-gray-800 cursor-pointer hover:border-[#f4a702]/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4a702]/20 to-orange-500/10 border border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center group-hover/header:scale-110 group-hover/header:bg-gradient-to-br group-hover/header:from-[#f4a702] group-hover/header:to-orange-500 group-hover/header:text-white group-hover/header:border-transparent transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white group-hover/header:text-[#f4a702] transition-colors duration-300">
                          {category.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-[#f4a702] opacity-0 group-hover/header:opacity-100 group-hover/header:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>

                    {/* Service Links */}
                    <div className="space-y-1">
                      {category.items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          onClick={handleLinkClick}
                          className="group flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-gradient-to-br hover:from-gray-800/50 hover:to-black transition-all duration-200"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f4a702] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-200"></div>
                          <span className="text-sm text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
