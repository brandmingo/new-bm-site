import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918799719725" // change with your number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5            /* Position */
        bg-[#25D366] text-white          /* Color */
        p-3 rounded-full                 /* Padding & Circle */
        text-3xl                         /* Icon Size */
        shadow-lg                        /* Shadow */
        flex items-center justify-center /* Center Icon */
        hover:scale-110 transition-all ease-in-out duration-300
        z-50
      "
    >
      <FaWhatsapp />
    </a>
  );
}
