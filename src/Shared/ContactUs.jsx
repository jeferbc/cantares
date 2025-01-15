import { useEffect, useState } from "react";
import buttonShape from "/images/whatsapp.svg";
import getClassFromUrl from "../Utils/getClassFromUrl";
import getTextFromUrl from "../Utils/getTextFromUrl";

const ContactUs = ({classes}) => {
  const [contactClasses, setContactClasses] = useState('');
  const [contactText, setContactText] = useState('Hola , quiero más información de los lotes en venta');
  const pathname = window.location.pathname;
  const classList = `${classes || ''} ${contactClasses} primary-btn flex flex-row`;



  useEffect(() => {
    setContactClasses(getClassFromUrl());
    setContactText(getTextFromUrl());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return(
    <a href={`https://wa.me/573234603133?text=${encodeURIComponent(contactText)}`} target='_blank' className={classList}>
      {`Contáctanos`}
      <img src={buttonShape} draggable="false" className="size-6" />
    </a>
  )
}

ContactUs.propTypes = {
  classes: '',
  setContactClasses: () => {},
};

export default ContactUs;