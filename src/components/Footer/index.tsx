import React from "react";
import { Link } from "react-router-dom";

import iconInsta from "@assets/icons/insta-icon.svg";
import iconFacebook from "@assets/icons/facebook2-icon.svg";
import iconInstagram from "@assets/icons/youtube-icon.svg";

export function Footer() {
  return (
    <footer className="w-full h-48 pt-7 flex flex-col items-center border-t border-t-gray-300 bg-white gap-2">
      <div className="w-full flex flex-col items-center gap-1">
        <Link to="/">Sobre nós</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Fale conosco</Link>
      </div>
      <div className="w-full flex items-center justify-center gap-1">
        <img src={iconInsta} alt="Icone insta" />
        <img src={iconFacebook} alt="Icone facebook" />
        <img src={iconInstagram} alt="Icone youtube" />
      </div>
    </footer>
  );
}
