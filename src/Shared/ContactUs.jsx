import buttonShape from "/images/whatsapp.svg";
import PropTypes from "prop-types";

const ContactUs = ({classes}) => {
  const classList = `${classes} primary-btn flex flex-row`;
  return(
    <a href="https://wa.me/573234603133?text=Hola%20,%20quiero%20más%20información%20de%20los%20lotes%20en%20venta" target='_blank' className={classList}>
      {`Contáctanos`}
      <img src={buttonShape} draggable="false" className="size-6" />
    </a>
  )
}

ContactUs.propTypes = {
  classes: PropTypes.string
};

export default ContactUs;