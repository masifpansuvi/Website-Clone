
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/home_image/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md ">
      {/* Top header */}
      <div className="px-2 sm:px-6 xl:mx-[6%] xl:px-16  py-[22px]">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-2">
          {/* Top links */}
          <div className="flex gap-4 text-blue-600 text-sm font-medium">
            <Link to={"/sellhome"}>Get A Cash Offer Today</Link>
            <Link to={"/sellhome"}>Our Company</Link>
          </div>

          {/* Logo */}
          <img src={logo} alt="logo" className="w-12 h-12" />

          {/* Title */}
          <h1 className="font-bold text-lg">WeBuyHouses225.com</h1>

          {/* Subtitle */}
          <p className="text-sm text-gray-700 text-center">
            Need To Sell Your House Fast? We Buy Houses!
          </p>

          {/* Call + Menu */}
          <div className="flex justify-between items-center w-full mt-2">
            <p className="text-base font-semibold text-gray-800">
              Call Us! <span className="font-bold">(225) 772-2747</span>
            </p>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="border px-3 py-1 rounded text-sm font-medium"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex lg:items-center lg:justify-between justify-around ">
          {/* Logo + Title */}
          <div className="flex justify-center ">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <div className="flex flex-col tracking-tight space-y-0 mx-2">
              <h1 className="font-bold text-[34px] leading-[27px] pb-4">WeBuyHouses225.com</h1>
              <p className="text-gray-700 text-[18px] leading-[21px]">
                Need To Sell Your House Fast? We Buy Houses!
              </p>
            </div>
          </div>

          {/* Links + Contact */}
          <div className="flex flex-col justify-start ">
            <div className="flex gap-6">
              <a href="#" className="text-blue-600 text-lg">
                Get A Cash Offer Today
              </a>
              <a href="#" className="text-blue-600 text-lg">
                Our Company
              </a>
            </div>
            <p className="text-[28px] text-gray-800">
              Call Us! <strong>(225) 772-2747</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block bg-black text-white ">
        <ul className="flex gap-10 xl:mx-[8%] px-12 py-3 ">
          <Link to={"/sellhome"}>
            <li className="font-bold text-lg cursor-pointer text-[21px]">
              Sell Your Home ›
            </li>
          </Link>
          <Link to={"/works"}>
            <li className="text-lg cursor-pointer text-[21px]">How It Works</li>
          </Link>
          <Link to={"/compare"}>
            <li className="text-lg cursor-pointer text-[21px]">Compare</li>
          </Link>
          <Link to={"/testimonials"}>
            <li className="text-lg cursor-pointer text-[21px]">Testimonials</li>
          </Link>
          <li className="text-lg cursor-pointer text-[21px]">FAQs</li>
          <Link to={"/contact"}>
            <li className="text-lg cursor-pointer text-[21px]">Contact Us</li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Nav - Smooth Slide */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black text-white">
          <ul className="flex flex-col gap-6 px-6 py-6 text-lg">
            <Link to={"/"}>
              <li
                className="cursor-pointer font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Sell Your Home ›
              </li>
            </Link>
            <Link to={"/sellhome"}>
              <li onClick={() => setMenuOpen(false)}>How It Works</li>
            </Link>
            <Link to={"/compare"}>
              <li onClick={() => setMenuOpen(false)}>Compare</li>
            </Link>
            <Link to={"/testimonials"}>
              <li onClick={() => setMenuOpen(false)}>Testimonials</li>
            </Link>
            <li onClick={() => setMenuOpen(false)}>FAQs</li>
            <Link to={"/contact"}>
              <li onClick={() => setMenuOpen(false)}>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

