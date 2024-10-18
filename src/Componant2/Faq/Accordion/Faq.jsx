// import { Link } from "react-router-dom";
import FaqAccordion from "./FaqAccordion";
import subTitleShape from "/images/sub-title-shape.png";
// import buttonShape from "/images/button-shape-1.png";
import faqIcon from "/images/faq-icon.png";
import faqMainShape from "/images/faqs-shape2.png";

const Faq = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      faqIcon: faqIcon,
      title: "¿Como es el proceso de firma de escrituras?",
      text:  `<ol class="list-decimal pl-[40px]">
                <li><strong class="font-semibold text-[17px] ">Investigación Legal:</strong> Verificar titularidad, gravámenes, límites y restricciones.</li>
                <li><strong class="font-semibold text-[17px] ">Contrato de Compraventa:</strong> Firmar con detalles sobre precio, plazos y condiciones.</li>
                <li><strong class="font-semibold text-[17px] ">Escrituración:</strong> Notario elabora y registra la escritura pública.</li>
                <li><strong class="font-semibold text-[17px] ">Pago de Impuestos:</strong> Cubrir impuestos de transferencia y gastos notariales.</li>
                <li><strong class="font-semibold text-[17px] ">Entrega de Escrituras:</strong> Notario entrega escrituras, confirmando la titularidad.</li>
              </ol>`,
      active: true,
    },
    {
      faqIcon: faqIcon,
      title: "¿Porqué es una buena inversión comprar los lotes?",
      text:  `<p>El <strong class="font-semibold text-[17px] ">Eje Cafetero</strong>, una región colombiana de gran belleza y prosperidad, ha emergido como un destino atractivo por sus paisajes y desarrollo económico. Su cercanía a ciudades como Pereira y Armenia, y a atractivos como el Parque del Café, lo convierte en un lugar ideal para disfrutar de la naturaleza.</p>
              <p>El <strong class="font-semibold text-[17px] ">crecimiento económico</strong> de la región, impulsado por inversiones en infraestructura y turismo, ha generado un aumento en la demanda de <strong class="font-semibold text-[17px] ">viviendas campestres</strong>, reflejando su potencial como oportunidad de inversión.</p>
              <p>La <strong class="font-semibold text-[17px] ">valorización de viviendas</strong> en el Eje Cafetero destaca el encanto natural y las oportunidades de crecimiento económico, posicionándolo como un destino atractivo para quienes buscan calidad de vida en un entorno natural.</p>`,
      active: false,
    },
    {
      faqIcon: faqIcon,
      title: "¿Cómo puedo mantener mi lote organizado?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: false,
    },
    {
      faqIcon: faqIcon,
      title: "¿Con que servicios disponen los lotes en parcelación?",
      text:  `<p>En el <strong class="font-semibold text-[17px]">Eje Cafetero</strong>, ofrecemos parcelaciones con lotes de 1.000 m² a 2.700 m², enfocadas en la calidad de vida y la conexión con la naturaleza. Contamos con <strong class="font-semibold text-[17px]">servicios básicos</strong> de agua y electricidad, vías internas bien mantenidas, iluminación, paisajismo nativo, y portería eléctrica para seguridad.</p>
              <p>Nuestras parcelaciones tienen <strong class="font-semibold text-[17px]">escrituras individuales</strong>, sin trámites complicados ni pagos de administración. Además, su ubicación estratégica garantiza una alta valorización en el mediano plazo, haciendo de tu inversión una decisión inteligente.</p>
              <p>¡Empieza a construir tus sueños hoy!</p>`,
      active: false,
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-28 bg-[url('/images/faq-bg.jpg')] bg-cover bg-no-repeat
     bg-center" id="faq"
    >
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={faqMainShape}
              className="absolute -top-28 right-10 animate-movebtn"
            />
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              FAQ
            </h5>
            <h2 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-6">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="w-full mx-auto">
            <div>
              {faqs.map((faq, index) => (
                <FaqAccordion
                  key={index}
                  faqIcon={faq.faqIcon}
                  title={faq.title}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </FaqAccordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
