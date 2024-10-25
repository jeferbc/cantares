import { FiPhoneCall } from "react-icons/fi";
import shape from "/images/appointment-shape.png";
import shape2 from "/images/appointment-shape2.png";
import ContactUs from "../../Shared/ContactUs";
import ContactForm from "./ContactForm";

const Appointment = () => {
  return (
    <section className="py-28 relative bg-[linear-gradient(to_bottom,_rgba(121,185,0,1)_40%,_rgba(255,255,255,1)_32%)] sm:bg-[linear-gradient(to_bottom,_rgba(121,185,0,1)_41.5%,_rgba(255,255,255,1)_32%)] md:bg-[linear-gradient(to_top,_rgba(255,255,255,1)_52.5%,_rgba(121,185,0,1)_48.5%)] lg:bg-[linear-gradient(to_right,_rgba(121,185,0,1)_50%,_rgba(255,255,255,1)_50%)] border-r-8 border-b-8 border-PrimaryColor-0 overflow-hidden">
      <img src={shape} className="absolute -left-2 -top-2 z-20" />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 md:gap-40 lg:gap-28 items-center">
          <div className="relative text-center">
            <img
              src={shape2}
              className="absolute right-0 -top-20 animate-zoomInOut hidden 2xl:block"
            />
            <div className="w-[110px] h-[110px] text-white relative rounded-full flex justify-center items-center m-auto before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border before:text-white before:border-dashed before:border-white before:rounded-full before:animate-rotational">
              <FiPhoneCall size={"50"} />
            </div>
            <h2 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-9 mb-11">
              Déjanos un mensaje
              <br />
              Nosotros te contactamos
            </h2>
            <div className="flex flex-row w-100 justify-center">
              <ContactUs classes="!bg-black" />
            </div>
          </div>
          <div className="mr-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
