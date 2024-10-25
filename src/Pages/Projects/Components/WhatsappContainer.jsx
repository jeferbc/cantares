import { FaArrowRight } from "react-icons/fa6";
import wedgetIcon from "/images/widget-icon.png";
import PropTypes from "prop-types";

const WhatsappContainer = ({projectName}) => (
  <div className="rounded-lg px-9 overflow-hidden bg-[url('/images/sidebar-bg.jpg')] bg-cover bg-no-repeat bg-center py-[50px]">
    <img src={wedgetIcon} draggable="false" />
    <h6 className="font-AlbertSans font-medium text-lg text-white mt-5 mb-2">
      Llámanos en cualquier momento
    </h6>
    <p className="font-AlbertSans font-semibold text-2xl text-white">
      +57 3234603133
    </p>
    <a href={`https://wa.me/573234603133?text=Hola%20,%20quiero%20más%20información%20de%20los%20lotes%20en%20venta%20en%20${projectName}`}
       target='_blank'
       className="font-AlbertSans text-white flex gap-2 items-center bg-PrimaryColor-0 w-full h-[58px] rounded-md justify-center z-10 relative before:absolute before:top-0 before:right-0 before:scale-0 before:-z-10 before:w-full before:h-full before:bg-SecondaryColor-0 before:rounded before:transition-all before:duration-500 hover:before:scale-100 hover:text-white mt-4 mb-[52px]">
        Contáctanos
        <FaArrowRight />
    </a>
  </div>
)

WhatsappContainer.propTypes = {
  projectName: PropTypes.string
};

export default WhatsappContainer;