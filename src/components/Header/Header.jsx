// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/home_image/logo.svg"
// import {Link} from "react-router-dom"

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header>
//       {/* Top Bar */}
//       <div className="container mx-auto  flex items-center justify-between px-4  md:px-22 py-2.5">
//         {/* Logo + Title */}
//         <div className="flex items-center gap-2">
//           <div>
//             <img src={logo} alt="logo" className="w-22 h-22" />
//           </div>
//           <div>
//             <h1 className="font-bold text-xl md:text-[34px] leading-[37.6px]">
//               WeBuyHouses225.com
//             </h1>
//             <p className="text-sm text-gray-700">
//               Need To Sell Your House Fast? We Buy Houses!
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col items-center gap-4">        
//           <div className="flex flex-row gap-5">
//             <a href="#" className="text-blue-600 text-[18px]">
//             Get A Cash Offer Today
//             </a>
//             <a href="#" className="text-blue-600 text-[18px]">
//               Our Company
//             </a>
//           </div>
//           <div className="contact">
//             <p className="text-[28.8px]">
//               <span className="text-[#212529]">Call Us!</span>
//               <b>(225) 772-2747</b>
//             </p>
//           </div>
//         </div>

//       </div>
//        {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? (
//               <FaTimes className="text-2xl" />
//             ) : (
//               <FaBars className="text-2xl" />
//             )}
//           </button>
//         </div>
//       {/* Navigation */}
//       <nav className="bg-black text-white"> 
//         <ul className="flex gap-10 mx-36 py-3">
//           <Link to={"/"}>
//             <li className="font-bold text-[21px] cursor-pointer">
//               Sell Your Home ›
//             </li>
//           </Link>
//           <Link to={"/sellhome"}>
//             <li className="text-[21px] cursor-pointer">
//               How It Works
//             </li>
//           </Link>
//           <Link to={"/compare"}>
//             <li className="text-[21px] cursor-pointer">
//               Compare
//             </li>
//           </Link>
//           <Link to={"/testimonials"}>
//             <li className="text-[21px] cursor-pointer">
//               Testimonials
//             </li>
//           </Link>
//           <li className="text-[21px] cursor-pointer">
//             FAQs
//           </li>
//           <Link to={"/contact"} ><li className="text-[21px] cursor-pointer">
//             Contact
//           </li> </Link>
//         </ul>
//       </nav>
//     </header>
//   );
// };export default Header;


import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/home_image/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md relative">
      {/* Top Bar */}
      <div className="container mx-auto flex items-center justify-between px-4 md:px-12 py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 md:w-16 md:h-16" />
          <div>
            <h1 className="font-bold text-lg md:text-2xl">
              WeBuyHouses225.com
            </h1>
            <p className="text-xs md:text-sm text-gray-700">
              Need To Sell Your House Fast? We Buy Houses!
            </p>
          </div>
        </div>

        {/* Right Section Desktop */}
        <div className="hidden md:flex flex-col items-end gap-2">
          <div className="flex gap-6">
            <a href="#" className="text-blue-600 text-sm md:text-lg">
              Get A Cash Offer Today
            </a>
            <a href="#" className="text-blue-600 text-sm md:text-lg">
              Our Company
            </a>
          </div>
          <p className="text-lg md:text-xl font-bold">
            <span className="text-gray-800">Call Us!</span> (225) 772-2747
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Desktop */}
      <nav className="hidden md:block bg-black text-white">
        <ul className="flex gap-10 px-12 py-3">
          <Link to={"/"}>
            <li className="font-bold text-lg cursor-pointer">
              Sell Your Home ›
            </li>
          </Link>
          <Link to={"/sellhome"}>
            <li className="text-lg cursor-pointer">How It Works</li>
          </Link>
          <Link to={"/compare"}>
            <li className="text-lg cursor-pointer">Compare</li>
          </Link>
          <Link to={"/testimonials"}>
            <li className="text-lg cursor-pointer">Testimonials</li>
          </Link>
          <li className="text-lg cursor-pointer">FAQs</li>
          <Link to={"/contact"}>
            <li className="text-lg cursor-pointer">Contact</li>
          </Link>
        </ul>
      </nav>

      {/* Navigation Mobile - Black Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white md:hidden z-50">
          <ul className="flex flex-col gap-6 px-6 py-8 text-lg">
            <Link to={"/"}>
              <li
                className="cursor-pointer font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Sell Your Home ›
              </li>
            </Link>
            <Link to={"/sellhome"}>
              <li
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </li>
            </Link>
            <Link to={"/compare"}>
              <li
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Compare
              </li>
            </Link>
            <Link to={"/testimonials"}>
              <li
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </li>
            </Link>
            <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              FAQs
            </li>
            <Link to={"/contact"}>
              <li
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

