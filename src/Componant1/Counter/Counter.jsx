import CounterCard from "./CounterCard";
import counterIcon from "/images/counter-icon.png";
import counterIcon2 from "/images/counter-icon2.png";
import counterIcon3 from "/images/counter-icon3.png";
import counterIcon4 from "/images/counter-icon4.png";

const counterData = [
  {
    id: 1,
    counterIcon: counterIcon,
    counterDesc: "Vias internas",
    counterSuffex: "",
  },
  {
    id: 2,
    counterIcon: counterIcon2,
    counterDesc: "Puertas eléctricas",
    counterSuffex: "",
  },
  {
    id: 3,
    counterIcon: counterIcon3,
    counterDesc: "Luminarias",
    counterSuffex: "",
  },
  {
    id: 4,
    counterIcon: counterIcon4,
    counterDesc: "Paisajismo nativo",
    counterSuffex: ".7",
  },
  {
    id: 5,
    counterIcon: counterIcon,
    counterDesc: "Servicio de Agua",
    counterSuffex: "",
  },
  {
    id: 6,
    counterIcon: counterIcon,
    counterDesc: "Electricidad",
    counterSuffex: "",
  },
  {
    id: 7,
    counterIcon: counterIcon2,
    counterDesc: "Tratamiento de aguas residuales",
    counterSuffex: "",
  },
  {
    id: 8,
    counterIcon: counterIcon3,
    counterDesc: "Alta valorización",
    counterSuffex: "",
  },
];

const Counter = () => {
  return (
    <section className="py-28 bg-[url('/images/counter-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-4 items-center justify-center">
          {counterData.map(
            ({
              id,
              counterIcon,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterIcon={counterIcon}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Counter;
