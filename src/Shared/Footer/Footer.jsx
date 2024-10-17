import { Link } from "react-router-dom";
// import footerLogo from "/images/logo.png";
import footerShape from "/images/footer-social-shape.png";
import footerShape2 from "/images/footer-shape2.png";
import footerShape3 from "/images/footer-shape.png";
import footerLine from "/images/footer-line.png";
import {
  // FaArrowRightLong,
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer-bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
      <img
        src={footerLine}
        draggable="false"
        className="absolute -z-10 right-0 -bottom-20 opacity-70"
      />
      <img
        src={footerShape3}
        draggable="false"
        className="absolute -z-10 top-0 left-0 animate-dance2"
      />
      <div className="Container">
        <div className="relative">
          <div className="bg-[url('/images/footer-social.jpg')] bg-no-repeat bg-cover bg-center relative rounded-md ">
            <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row lg:items-center lg:justify-between p-10 mb-[90px]">
              <div>
                <h2 className="font-AlbertSans font-bold text-white text-[30px] sm:text-[40px]">
                  Síguenos en nuestras redes sociales
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h5 className="font-AlbertSans font-semibold text-white text-lg uppercase">
                  Síguenos:
                </h5>
                <ul className="flex gap-3">
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaFacebookF />
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaXTwitter />
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaLinkedinIn />
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                      <FaPinterestP />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex justify-center items-center w-full absolute top-1/4 left-16 md:left-1/3 lg:left-16 hidden ">
              <img
                src={footerShape2}
                draggable="false"
                className="animate-zoomInOut"
              />
            </div>
          </div>
          <img
            src={footerShape}
            draggable="false"
            className="absolute -z-10 -bottom-[70px] -right-[10px] animate-dance2"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            {/* <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
            <p className="font-AlbertSans text-white mt-7 mb-5">
              Construye la casa de campo de tus sueños
            </p> */}
            <div>
              <h6 className="font-AlbertSans font-medium text-white text-lg pl-8 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:w-[22px] before:h-[2px]">
                Contacto
              </h6>
              <Link to={"/"} className="mt-[18px] block">
                <button className="flex items-center gap-3 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0">
                  <FaPhone className="text-PrimaryColor-0" />
                  +57 (323) 4603133
                </button>
              </Link>
              <Link to={"/"} className="mt-[18px] block">
                <button className="flex items-center gap-3 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0">
                  <MdEmail size={"18"} className="text-PrimaryColor-0" />
                  inversoracantares@gmail.com
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-[30px]">
              Compañia
            </h4>
            <ul>
              <li>
                <HashLink to={"#header"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Inicio
                  </button>
                </HashLink>
              </li>
              <li>
                <HashLink to={"#projects"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Proyectos
                  </button>
                </HashLink>
              </li>
              <li>
                {/* <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Blog
                  </button>
                </Link> */}
              </li>
            </ul>
          </div>  
        </div>
        <div className="text-left sm:text-center pb-6 mt-[108px]">
          <p className="font-AlbertSans text-white">
            © Copyrights 2024 Inversora cantares. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
