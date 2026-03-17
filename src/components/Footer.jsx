import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-black to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-4">
            <img
              src="/src/assets/images/BM-WHITE-logo.png"
              alt="Brandmingo Logo"
              className="w-48 mb-6 brightness-110"
            />
            <p className="mb-6 text-gray-400 leading-relaxed">
              We offer a holistic approach to digital marketing, ensuring that
              our clients' brands receive maximum exposure and drive measurable
              results.
            </p>

            {/* Newsletter with modern design */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 bg-white/10 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-linear-to-r from-orange-500 to-orange-600 text-white p-2 rounded-md hover:shadow-lg hover:shadow-orange-500/50 transition-all group-hover:scale-105">
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* Social icons with modern style */}
            <div>
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, label: "Facebook", url: " https://www.facebook.com/brandmingo" },
                  { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/brandmingo?igsh=dmZoeHBraWI0b2xh" },
                  { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/96415644/admin/dashboard/" },
                  { icon: FaXTwitter, label: "X (Twitter)", url:"https://x.com/brandmingo" },
                  { icon: FaYoutube, label: "YouTube", url:"www.youtube.com/@Brandmingo" },
                ].map(({ icon: IconComponent, label, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    aria-label={label}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg flex items-center justify-center hover:bg-linear-to-r hover:from-orange-500 hover:to-orange-600 hover:border-transparent transition-all hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    <IconComponent className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-[#f4a702] to-orange-600"></span>
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Our Offerings
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-[#f4a702] to-orange-600"></span>
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Web Development", link: "/services/webdevelopment" },
                {
                  name: "Design",
                  link: "/services/design",
                },
                {
                  name: "Marketing",
                  link: "/services/marketing",
                },
                {
                  name: "Ecommerce Account Management",
                  link: "/e-commerce-account-management",
                },
                { name: "SEO Optimizing", link: "/services/seo-optimizing" },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.link}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-[#f4a702] to-orange-600"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-all">
                  <FaMapMarkerAlt className="text-[#f4a702]" />
                </div>
                <a
                  href="https://www.google.com/maps/place/Ithum+Tower,+Sector+62,+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm leading-relaxed"
                >
                  Office No. B-806, 8th Floor, Ithum Tower, Block A, Sector 62,
                  Noida, Uttar Pradesh 201301
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-all">
                  <FaPhoneAlt className="text-[#f4a702]" />
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918799719725"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    +91 8799719725
                  </a>
                  <a
                    href="tel:+919990613140"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    +91 9990613140
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-all">
                  <FaEnvelope className="text-[#f4a702]" />
                </div>
                <a
                  href="mailto:hello@brandmingo.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  hello@brandmingo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with gradient border */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Brandmingo. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookie"
                className="text-gray-500 hover:text-orange-500 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
