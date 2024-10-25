import PropTypes from "prop-types";

const Description = ({title1, text1, text2}) => (
  <div className="col-span-2 lg:col-span-2">
    <h2 className="font-AlbertSans font-bold text-3xl sm:text-4xl text-HeadingColor-0">
      {title1}
    </h2>
    <p className="font-AlbertSans text-TextColor-0 mt-6">
      {text1}
    </p>
    <p className="font-AlbertSans text-TextColor-0 mt-7 mb-9">
      {text2}
    </p>
    <h2 className="font-AlbertSans font-semibold text-[28px] text-HeadingColor-0 my-5">
      ¿Porqué elegir esta parcelación?
    </h2>
    <ul className="grid grid-cols-0">
      <li className="relative pl-7 mb-5 text-TextColor-0 text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
        Escrituras individuales
      </li>
      <li className="relative pl-7 mb-5 text-TextColor-0 text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
        Construcción libre
      </li>
      <li className="relative pl-7 mb-5 text-TextColor-0 text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
        Sin pago de administración
      </li>
      <li className="relative pl-7 mb-5 text-TextColor-0 text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
        Vías de acceso pavimentadas y sin peajes
      </li>
      <li className="relative pl-7 mb-2 text-TextColor-0 text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
        Ciudades con aeropuerto:
      </li>
      <ul className="pl-7 mb-2">
        <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
          Pereira 40 min (Internacional)
        </li>
        <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
          Armenia 40 min (Internacional)
        </li>
        <li className="relative pl-7 font-AlbertSans mb-5 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
          Cartago 30 min
        </li>
      </ul>
      <li className="relative pl-7 mb-2 text-TextColor-0 text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
        Lugares turísticos:
      </li>
      <ul className="pl-7">
        <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
          Quimbaya 20 min (Pánaca)
        </li>
        <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
          Montenegro 40 min (Parque del café)
        </li>
        <li className="relative pl-7 font-AlbertSans mb-2 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
          Salento 40 min (Valle del cocora)
        </li>
        <li className="relative pl-7 font-AlbertSans mb-7 text-TextColor-0 font-light text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
          Filandia 30 min (Pueblo cafetero)
        </li>
      </ul>
    </ul>
    <h2 className="font-AlbertSans font-semibold text-[28px] text-HeadingColor-0 my-5">
      Alta valorización garantizada
    </h2>
    <p className="font-AlbertSans text-TextColor-0 mt-6">
      Nuestro proyecto se sitúa en un área de alta valorización,
      ideal tanto para quienes desean construir su hogar soñado
      como para inversionistas que buscan hacer una excelente inversión
      a futuro.
    </p>
    <p className="font-AlbertSans text-TextColor-0 mt-6">
      Si sueñas con un hogar en la naturaleza, cerca de los
      paisajes más bellos de Colombia, y con acceso directo a
      los atractivos culturales y naturales del Eje Cafetero.
      Ven y construye aquí tu hogar de ensueño.
    </p>
  </div>
)

Description.propTypes = {
  title1: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

export default Description;