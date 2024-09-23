const CounterCard = ({
  // eslint-disable-next-line react/prop-types
  counterIcon,
  // eslint-disable-next-line react/prop-types
  counterDesc,
}) => {
  return (
    <div className="text-center mb-7">
      <div>
        <img src={counterIcon} draggable="false" className="m-auto mb-2" />
      </div>
      <p className="font-AlbertSans text-white text-xl">{counterDesc}</p>
    </div>
  );
};

export default CounterCard;
