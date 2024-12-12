import { useEffect, useState } from "react";
import buttonShape from "/images/whatsapp.svg";
import getClassFromUrl from "../Utils/getClassFromUrl";

const ContactUs = ({classes}) => {
  const [contactClasses, setContactClasses] = useState('');
  const pathname = window.location.pathname;
  const classList = `${classes || ''} ${contactClasses} primary-btn flex flex-row`;

  console.log('classList', classList);
  useEffect(() => {
    setContactClasses(getClassFromUrl());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return(
    <a href="https://wa.me/573234603133?text=Hola%20,%20quiero%20más%20información%20de%20los%20lotes%20en%20venta" target='_blank' className={classList}>
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