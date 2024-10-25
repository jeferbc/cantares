import { Helmet } from "react-helmet-async";

const HelmetChanger = () => {
  return (
    <Helmet>
      <title>Venta de Lotes y Fincas en el Eje Cafetero</title>
      <meta name="description" content="Descubre lotes y fincas en parcelaciones exclusivas del Eje Cafetero, ideales para construir tu casa campestre rodeada de naturaleza. Con acceso pavimentado, cercanía a aeropuertos y puntos turísticos, invierte en tranquilidad y alta valorización."/>
      <meta name="keywords" content="lotes en venta eje cafetero, fincas en el eje cafetero, parcelaciones eje cafetero, lotes en Armenia, lotes en Pereira, venta de lotes campestres, inversión en el eje cafetero, alta valorización, compra de finca eje cafetero, terrenos en Colombia"/>
      <meta property="og:title" content="Venta de Lotes y Fincas en Parcelaciones del Eje Cafetero - Alta Valorización" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Compra tu lote o finca en el Eje Cafetero y construye la casa de tus sueños en un entorno natural. Con fácil acceso, cercanía a aeropuertos y puntos turísticos, es una inversión segura y rentable" />
      <meta property="og:image" content="<%= ../assets/images/logo/croko.png" />
      <meta property="og:url" content="https://inversoracantares.com" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default HelmetChanger;
