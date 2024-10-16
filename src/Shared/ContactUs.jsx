import { Link } from "react-router-dom";
import buttonShape from "/images/whatsapp.svg";

const ContactUs = () => (
  <Link to={"/about"}>
    <button className="primary-btn flex flex-row">
      {`Contáctanos`}
      <img src={buttonShape} draggable="false" className="size-6" />
    </button>
  </Link>
)

export default ContactUs;