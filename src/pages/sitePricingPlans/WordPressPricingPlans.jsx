import React, { useState } from "react";
import { Check } from "lucide-react";

const WebDevelopmentPricing = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("wordpress");

  const technologies = [
    { id: "wordpress", name: "WordPress" },
    { id: "shopify", name: "Shopify" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "react", name: "React" },
    { id: "php", name: "PHP" },
  ];

  const plans = {
    wordpress: [
      {
        type: "Basic",
        title: "Basic WordPress",
        subtitle: "Perfect for Small Businesses",
        icon: (
          <svg
            className="w-10 h-10"
            viewBox="0 0 122.52 122.523"
            fill="currentColor"
          >
            <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L11.354 35.188a52.662 52.662 0 00-2.646 26.072zm88.038-2.704c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
          </svg>
        ),
        features: [
          "Up to 5 Pages",
          "Premium Theme",
          "Responsive Design",
          "Basic SEO Setup",
          "Contact Form",
          "Social Media Integration",
          "Mobile Friendly",
          "Email Support",
        ],
      },
      {
        type: "Advanced",
        title: "Advanced WordPress",
        subtitle: "Best for Growing Businesses",
        icon: (
          <svg
            className="w-10 h-10"
            viewBox="0 0 122.52 122.523"
            fill="currentColor"
          >
            <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L11.354 35.188a52.662 52.662 0 00-2.646 26.072zm88.038-2.704c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
          </svg>
        ),
        features: [
          "Up to 15 Pages",
          "Premium Pro Theme",
          "Custom Design",
          "Advanced SEO",
          "Blog Integration",
          "WhatsApp Integration",
          "Lead Management",
          "Google Analytics",
          "Live Chat",
          "Speed Optimization",
          "Admin Training",
          "Priority Support",
        ],
      },
      {
        type: "E-Commerce",
        title: "E-Commerce WordPress",
        subtitle: "Complete Online Store",
        icon: (
          <svg
            className="w-10 h-10"
            viewBox="0 0 122.52 122.523"
            fill="currentColor"
          >
            <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L11.354 35.188a52.662 52.662 0 00-2.646 26.072zm88.038-2.704c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
          </svg>
        ),
        features: [
          "Unlimited Pages",
          "WooCommerce Setup",
          "100 Product Listings",
          "Shopping Cart",
          "Payment Gateways",
          "Inventory Management",
          "Order Management",
          "Customer Accounts",
          "Product Search",
          "Shipping Integration",
          "Coupon System",
          "Sales Analytics",
          "Email Notifications",
          "Dedicated Support",
        ],
      },
    ],
    shopify: [
      {
        type: "Basic",
        title: "Basic Shopify",
        subtitle: "Start Your Online Store",
        icon: (
          <svg
            className="w-10 h-10"
            viewBox="0 0 122.52 122.52"
            fill="currentColor"
          >
            <path d="M95.7 27.8c-.1-.6-.5-.9-1-.9-.4 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.8-.8-2.4-.5-3 0-.1 0-1.6.5-4.2 1.3-2.5-7.3-7-14-14.9-14h-.6c-2.1-2.8-4.7-4.1-7-4.1-17.4 0-25.7 21.7-28.3 32.7-7.4 2.3-12.6 3.9-13.2 4.1-4.1 1.3-4.2 1.4-4.7 5.3C1 45.5 0 108.1 0 108.1l74.3 12.9 44.2-9.8S95.8 28.4 95.7 27.8z" />
          </svg>
        ),
        features: [
          "Shopify Theme Setup",
          "Up to 50 Products",
          "Mobile Responsive",
          "Payment Gateway",
          "Basic SEO",
          "Social Media Links",
          "Email Support",
          "Order Management",
        ],
      },
      {
        type: "Advanced",
        title: "Advanced Shopify",
        subtitle: "Scale Your Business",
        icon: (
          <svg
            className="w-10 h-10"
            viewBox="0 0 122.52 122.52"
            fill="currentColor"
          >
            <path d="M95.7 27.8c-.1-.6-.5-.9-1-.9-.4 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.8-.8-2.4-.5-3 0-.1 0-1.6.5-4.2 1.3-2.5-7.3-7-14-14.9-14h-.6c-2.1-2.8-4.7-4.1-7-4.1-17.4 0-25.7 21.7-28.3 32.7-7.4 2.3-12.6 3.9-13.2 4.1-4.1 1.3-4.2 1.4-4.7 5.3C1 45.5 0 108.1 0 108.1l74.3 12.9 44.2-9.8S95.8 28.4 95.7 27.8z" />
          </svg>
        ),
        features: [
          "Custom Theme Design",
          "Up to 200 Products",
          "Advanced Customization",
          "Multiple Payment Options",
          "Advanced SEO",
          "Product Variants",
          "Discount Codes",
          "Abandoned Cart Recovery",
          "Analytics Integration",
          "Live Chat",
          "Priority Support",
        ],
      },
      {
        type: "E-Commerce",
        title: "Enterprise Shopify",
        subtitle: "Full-Scale E-Commerce",
        icon: (
          <svg
            className="w-10 h-10"
            viewBox="0 0 122.52 122.52"
            fill="currentColor"
          >
            <path d="M95.7 27.8c-.1-.6-.5-.9-1-.9-.4 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.8-.8-2.4-.5-3 0-.1 0-1.6.5-4.2 1.3-2.5-7.3-7-14-14.9-14h-.6c-2.1-2.8-4.7-4.1-7-4.1-17.4 0-25.7 21.7-28.3 32.7-7.4 2.3-12.6 3.9-13.2 4.1-4.1 1.3-4.2 1.4-4.7 5.3C1 45.5 0 108.1 0 108.1l74.3 12.9 44.2-9.8S95.8 28.4 95.7 27.8z" />
          </svg>
        ),
        features: [
          "Unlimited Products",
          "Custom App Integration",
          "Multi-Currency Support",
          "Advanced Shipping",
          "Multi-Channel Selling",
          "Wholesale Pricing",
          "Customer Segmentation",
          "Marketing Automation",
          "Advanced Analytics",
          "API Integration",
          "24/7 Dedicated Support",
        ],
      },
    ],
    ecommerce: [
      {
        type: "Basic",
        title: "Basic E-Commerce",
        subtitle: "Essential Online Store",
        icon: (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        ),
        features: [
          "Custom E-Commerce Site",
          "Up to 100 Products",
          "Shopping Cart",
          "Payment Integration",
          "Order Management",
          "Basic SEO",
          "Mobile Responsive",
          "Email Support",
        ],
      },
      {
        type: "Advanced",
        title: "Advanced E-Commerce",
        subtitle: "Professional Store",
        icon: (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        ),
        features: [
          "Up to 500 Products",
          "Advanced Filter System",
          "Wishlist Feature",
          "Multiple Payment Gateway",
          "Inventory Management",
          "Customer Reviews",
          "Advanced SEO",
          "Shipping Calculator",
          "Discount System",
          "Analytics Dashboard",
          "Priority Support",
        ],
      },
      {
        type: "E-Commerce",
        title: "Enterprise E-Commerce",
        subtitle: "Complete Solution",
        icon: (
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        ),
        features: [
          "Unlimited Products",
          "Multi-Vendor Support",
          "Advanced Analytics",
          "Custom Integration",
          "B2B & B2C Features",
          "Multi-Currency",
          "Multi-Language",
          "Marketing Automation",
          "AI Recommendations",
          "Advanced Security",
          "24/7 Support",
        ],
      },
    ],
    react: [
      {
        type: "Basic",
        title: "Basic React Website",
        subtitle: "Modern Single Page App",
        icon: (
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 841.9 595.3"
          >
            <g>
              <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
              <circle cx="420.9" cy="296.5" r="45.7" />
            </g>
          </svg>
        ),
        features: [
          "Single Page Application",
          "Responsive Design",
          "Fast Performance",
          "Modern UI/UX",
          "API Integration",
          "Component-Based",
          "SEO Optimized",
          "Email Support",
        ],
      },
      {
        type: "Advanced",
        title: "Advanced React App",
        subtitle: "Dynamic Web Application",
        icon: (
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 841.9 595.3"
          >
            <g>
              <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
              <circle cx="420.9" cy="296.5" r="45.7" />
            </g>
          </svg>
        ),
        features: [
          "Multi-Page Application",
          "State Management",
          "Custom Animations",
          "Real-Time Features",
          "Advanced Routing",
          "API Development",
          "Authentication System",
          "Dashboard Integration",
          "Performance Optimization",
          "Testing Included",
          "Priority Support",
        ],
      },
      {
        type: "E-Commerce",
        title: "React E-Commerce",
        subtitle: "Full-Stack Solution",
        icon: (
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 841.9 595.3"
          >
            <g>
              <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
              <circle cx="420.9" cy="296.5" r="45.7" />
            </g>
          </svg>
        ),
        features: [
          "Full-Stack React App",
          "Product Management",
          "Shopping Cart",
          "Payment Integration",
          "User Authentication",
          "Admin Dashboard",
          "Order Tracking",
          "Inventory System",
          "Analytics Integration",
          "Cloud Deployment",
          "Dedicated Support",
        ],
      },
    ],
    php: [
      {
        type: "Basic",
        title: "Basic PHP Website",
        subtitle: "Dynamic Web Solution",
        icon: (
          <svg className="w-10 h-10" viewBox="0 0 256 256" fill="currentColor">
            <g>
              <path d="M128 0C57.308 0 0 57.307 0 128s57.308 128 128 128 128-57.307 128-128S198.692 0 128 0zm0 238.833c-61.337 0-111.083-49.746-111.083-111.083S66.663 16.917 128 16.917s111.083 49.746 111.083 111.083S189.337 238.833 128 238.833z" />
              <path d="M146.876 69.583c2.708 0 5.208.833 7.375 2.333l15.792-9.292c-5.875-5.125-13.625-8.333-22.084-8.333-18.958 0-34.458 15.667-34.458 34.917 0 19.292 15.5 34.875 34.458 34.875 8.459 0 16.209-3.125 22.042-8.292l-15.709-9.333c-2.166 1.5-4.75 2.375-7.541 2.375-7.917 0-14.375-6.458-14.375-14.458 0-8 6.458-14.458 14.5-14.458zM81.375 69.583c2.708 0 5.208.833 7.375 2.333l15.792-9.292c-5.875-5.125-13.625-8.333-22.084-8.333-18.958 0-34.458 15.667-34.458 34.917 0 19.292 15.5 34.875 34.458 34.875 8.459 0 16.209-3.125 22.042-8.292l-15.709-9.333c-2.166 1.5-4.75 2.375-7.541 2.375-7.917 0-14.375-6.458-14.375-14.458 0-8 6.458-14.458 14.5-14.458zM128 134.667c-13.917 0-25.208-11.292-25.208-25.209V55.833h-17.625v53.625c0 23.625 19.208 42.875 42.833 42.875s42.833-19.25 42.833-42.875V55.833H153.25v53.625c0 13.917-11.333 25.209-25.25 25.209z" />
            </g>
          </svg>
        ),
        features: [
          "Custom PHP Development",
          "Dynamic Content",
          "Database Integration",
          "Contact Forms",
          "Responsive Design",
          "Basic SEO",
          "Security Features",
          "Email Support",
        ],
      },
      {
        type: "Advanced",
        title: "Advanced PHP Website",
        subtitle: "Professional Solution",
        icon: (
          <svg className="w-10 h-10" viewBox="0 0 256 256" fill="currentColor">
            <g>
              <path d="M128 0C57.308 0 0 57.307 0 128s57.308 128 128 128 128-57.307 128-128S198.692 0 128 0zm0 238.833c-61.337 0-111.083-49.746-111.083-111.083S66.663 16.917 128 16.917s111.083 49.746 111.083 111.083S189.337 238.833 128 238.833z" />
              <path d="M146.876 69.583c2.708 0 5.208.833 7.375 2.333l15.792-9.292c-5.875-5.125-13.625-8.333-22.084-8.333-18.958 0-34.458 15.667-34.458 34.917 0 19.292 15.5 34.875 34.458 34.875 8.459 0 16.209-3.125 22.042-8.292l-15.709-9.333c-2.166 1.5-4.75 2.375-7.541 2.375-7.917 0-14.375-6.458-14.375-14.458 0-8 6.458-14.458 14.5-14.458zM81.375 69.583c2.708 0 5.208.833 7.375 2.333l15.792-9.292c-5.875-5.125-13.625-8.333-22.084-8.333-18.958 0-34.458 15.667-34.458 34.917 0 19.292 15.5 34.875 34.458 34.875 8.459 0 16.209-3.125 22.042-8.292l-15.709-9.333c-2.166 1.5-4.75 2.375-7.541 2.375-7.917 0-14.375-6.458-14.375-14.458 0-8 6.458-14.458 14.5-14.458zM128 134.667c-13.917 0-25.208-11.292-25.208-25.209V55.833h-17.625v53.625c0 23.625 19.208 42.875 42.833 42.875s42.833-19.25 42.833-42.875V55.833H153.25v53.625c0 13.917-11.333 25.209-25.25 25.209z" />
            </g>
          </svg>
        ),
        features: [
          "Custom Framework",
          "API Development",
          "User Authentication",
          "Admin Panel",
          "Advanced Database",
          "Third-Party Integration",
          "Payment Gateway",
          "Advanced Security",
          "Performance Optimization",
          "Documentation",
          "Priority Support",
        ],
      },
      {
        type: "E-Commerce",
        title: "PHP E-Commerce",
        subtitle: "Custom Store Solution",
        icon: (
          <svg className="w-10 h-10" viewBox="0 0 256 256" fill="currentColor">
            <g>
              <path d="M128 0C57.308 0 0 57.307 0 128s57.308 128 128 128 128-57.307 128-128S198.692 0 128 0zm0 238.833c-61.337 0-111.083-49.746-111.083-111.083S66.663 16.917 128 16.917s111.083 49.746 111.083 111.083S189.337 238.833 128 238.833z" />
              <path d="M146.876 69.583c2.708 0 5.208.833 7.375 2.333l15.792-9.292c-5.875-5.125-13.625-8.333-22.084-8.333-18.958 0-34.458 15.667-34.458 34.917 0 19.292 15.5 34.875 34.458 34.875 8.459 0 16.209-3.125 22.042-8.292l-15.709-9.333c-2.166 1.5-4.75 2.375-7.541 2.375-7.917 0-14.375-6.458-14.375-14.458 0-8 6.458-14.458 14.5-14.458zM81.375 69.583c2.708 0 5.208.833 7.375 2.333l15.792-9.292c-5.875-5.125-13.625-8.333-22.084-8.333-18.958 0-34.458 15.667-34.458 34.917 0 19.292 15.5 34.875 34.458 34.875 8.459 0 16.209-3.125 22.042-8.292l-15.709-9.333c-2.166 1.5-4.75 2.375-7.541 2.375-7.917 0-14.375-6.458-14.375-14.458 0-8 6.458-14.458 14.5-14.458zM128 134.667c-13.917 0-25.208-11.292-25.208-25.209V55.833h-17.625v53.625c0 23.625 19.208 42.875 42.833 42.875s42.833-19.25 42.833-42.875V55.833H153.25v53.625c0 13.917-11.333 25.209-25.25 25.209z" />
            </g>
          </svg>
        ),
        features: [
          "Custom E-Commerce",
          "Product Management",
          "Order System",
          "Payment Integration",
          "Inventory Management",
          "Customer Portal",
          "Admin Dashboard",
          "Shipping Integration",
          "Sales Analytics",
          "Marketing Tools",
          "Dedicated Support",
        ],
      },
    ],
  };

  const currentPlans = plans[selectedTechnology];

  return (
    <div className="w-full bg-black py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            <span className="text-white">Choose the Right Plan </span>
            <br />
            <span className="text-[#f4a702]">for Your Business Growth</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            At <span className="font-semibold text-[#f4a702]">Brandmwigo</span>{" "}
            Our flexible pricing plans are crafted to match your business stage
            — from startups to fast-scaling brands. Get transparent pricing,
            powerful features, and expert support that delivers real value for
            your investment.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setSelectedTechnology(tech.id)}
                className={`px-6 md:px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 border-2 ${
                  selectedTechnology === tech.id
                    ? "bg-[#f4a702] text-black border-[#f4a702]"
                    : "bg-transparent text-white border-gray-700 hover:border-[#f4a702]/50"
                }`}
              >
                {tech.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-black border-2 border-gray-800 rounded-2xl p-6 md:p-8 hover:border-[#f4a702]/50 hover:shadow-2xl hover:shadow-[#f4a702]/20 transition-all duration-500 group h-full flex flex-col"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-xl bg-[#f4a702]/10 border-2 border-[#f4a702]/30 text-[#f4a702] flex items-center justify-center mb-6 group-hover:bg-[#f4a702] group-hover:text-white transition-all duration-300">
                {plan.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {plan.title}
              </h3>
              <p className="text-[#f4a702] text-sm md:text-base font-semibold mb-6">
                {plan.subtitle}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-[#f4a702]" />
                    </div>
                    <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - Now at bottom */}
              <button className="w-full bg-[#f4a702] hover:bg-orange-500 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 mt-auto">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPricing;
