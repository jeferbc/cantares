/* eslint-disable no-unused-vars */
import pricingShape1 from "/images/hojitas-90X90.webp";
import pricingShape2 from "/images/pricing-shape-2.png";
import { FaCheck, FaCircle, FaStarOfLife } from "react-icons/fa6";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    id: 1,
    // currency: "$",
    // price: 39,
    // pricingDateLine: "Month",
    // pricingDesc:
    //   "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Pago a 1 mes",
    pricingIcon: <FaCircle />,
    pricingContent1: "Desuento De $12.000.000",
    pricingContent2: "Firma inmediata de escrituras",
    pricingContent3: "Siembra de linderos",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Más información",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
  {
    id: 2,
    // currency: "$",
    // price: 59,
    // pricingDateLine: "Month",
    // pricingDesc:
    //   "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Pago a 3 meses",
    pricingIcon: <FaCircle />,
    pricingContent1: "Desuento De $5.000.000",
    pricingContent3: "Financiación con nosotros",
    pricingContent2: "Comprenta con el 40% del pago",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Más información",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
  {
    id: 3,
    // currency: "$",
    // price: 89,
    // pricingDateLine: "Month",
    // pricingDesc:
    //   "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Pago a 6 meses",
    pricingIcon: <FaCircle />,
    pricingContent1: "Sin intereses",
    pricingContent3: "Financiación con nosotros",
    pricingContent2: "Comprenta con el 40% del pago",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Más información",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
  {
    id: 4,
    // currency: "$",
    // price: 89,
    // pricingDateLine: "Month",
    // pricingDesc:
    //   "Fast project turnaround time, substantial cost savings & quality standards.",
    pricingTitle: "Pago a 1 año",
    pricingIcon: <FaCircle />,
    pricingContent1: "Interés del 1% a partir del septimo mes",
    pricingContent2: "Comprenta con el 40% del pago",
    pricingContent3: "Siembra de linderos",
    pricingUrl: "/pricing_inner",
    pricingBtn: "Más información",
    pricingShape1: pricingShape1,
    pricingShape2: pricingShape2,
  },
];

const Pricing = () => {
  return (
    <section className="py-28 bg-[#f5f8ed]" id="pricing">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
            <FaStarOfLife />
            Plan de precios <FaStarOfLife />
          </h5>
          <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
            Separa tu lote con solo
            <br /> $10.000.000 COP
          </h1>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {pricingData.map(
              ({
                id,
                currency,
                price,
                pricingDateLine,
                pricingDesc,
                pricingTitle,
                pricingIcon,
                pricingContent1,
                pricingContent2,
                pricingContent3,
                pricingContent4,
                pricingUrl,
                pricingBtn,
                pricingShape1,
                pricingShape2,
              }) => {
                return (
                  <div key={id}>
                    <PricingCard
                      currency={currency}
                      price={price}
                      pricingDateLine={pricingDateLine}
                      pricingDesc={pricingDesc}
                      pricingTitle={pricingTitle}
                      pricingIcon={pricingIcon}
                      pricingContent1={pricingContent1}
                      pricingContent2={pricingContent2}
                      pricingContent3={pricingContent3}
                      pricingContent4={pricingContent4}
                      pricingUrl={pricingUrl}
                      pricingBtn={pricingBtn}
                      pricingShape1={pricingShape1}
                      pricingShape2={pricingShape2}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
