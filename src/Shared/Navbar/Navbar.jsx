/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FaBars } from "react-icons/fa6";
import Logo from "/images/Logo40X40.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import ContactUs from "../../Shared/ContactUs";

const Navbar = ({alternative}) => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const pathname = window.location.pathname;

  return (
    <nav
      className={`w-full transition-all duration-300 ${alternative ? 'bg-black' : 'bg-transparent'} absolute z-[99999]`}
    >
      {/* top Navbar */}
      <header className="bg-transparent overflow-hidden md:block" />
      {/* top Navbar */}
      <header
        className="header-section bg-transparent border-t border-b border-BorderColor4-0"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
            {/* website Logo */}
            <div className="">
              <Link to="/" className="flex flex-row items-center gap-3 items-baseline">
                <img
                  draggable="false"
                  src={Logo}
                  className="hidden lg:block"
                  alt="website_logo"
                />
                <p className="hidden lg:block font-AlbertSans font-bold leading-6 sm:text-2xl xl:text-3xl text-[#4BAA00]">
                  Cantares
                </p>
              </Link>
            </div>
            {/* small screen size */}
            <div className="w-full lg:hidden flex justify-between h-[70px] items-center p-3">
              <div>
                <Link to="/" className="flex flex-row items-baseline gap-3">
                  <img
                    draggable="false"
                    src={Logo}
                    className="block lg:hidden"
                    alt="constre_website_logo"
                  />
                  <p className="block lg:hidden font-AlbertSans font-bold leading-6 text-[30px] text-[#4BAA00]">
                  Inversora Cantares
                  </p>
                </Link>
              </div>
              {/* toggle bar mode. */}
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            {/* All navLink are hear with active */}
            <div className="flex gap-6 items-center">
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } text-right lg:w-fit ease-in-out flex-1 lg:flex lg:items-center space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-AlbertSans font-medium sm:text-base text-white transition-all duration-500
                `}
              >
                <HashLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to={`${pathname === '/' ? '#projects' : '/?#projects'}`}
                >
                  <span>Proyectos</span>
                </HashLink>
                {/* <HashLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="#pricing"
                >
                  <span>Planes</span>
                </HashLink> */}
                <HashLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="#benefits"
                >
                  <span>¿Porque comprar?</span>
                </HashLink>
                <HashLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="#faq"
                >
                  <span>Preguntas frecuentes</span>
                </HashLink>
                {/* <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="/about"
                >
                  <span>Noticias</span>
                </NavLink> */}
              </ul>
              <div className="hidden lg:flex items-center">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

Navbar.propTypes = {
  alternative: false,
};

export default Navbar;
