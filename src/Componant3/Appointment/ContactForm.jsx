import { FaArrowRightLong } from "react-icons/fa6";
const ContactForm = () => {
  return(
    <form action="https://formspree.io/f/mbljjpye" method="post" className="flex flex-col gap-7">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
        required
        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
      />
      <input
        type="text"
        name="number"
        id="number"
        placeholder="Número de teléfono"
        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
        required
      />
      <div className="flex flex-col md:flex-row gap-7">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
        />
      </div>
      <textarea
        name="message"
        id="message"
        placeholder="Deja tu mensaje"
        className="border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
      ></textarea>
      <div className="inline-block">
        <button type="submit" className="primary-btn2">
          Envíar
          <FaArrowRightLong size={"20"} />
        </button>
      </div>
    </form>
  )
}

export default ContactForm;