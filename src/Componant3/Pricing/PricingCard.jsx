/* eslint-disable react/prop-types */

const PricingCard = ({
  // currency,
  // price,
  pricingDateLine,
  pricingDesc,
  pricingTitle,
  pricingIcon,
  pricingContent1,
  pricingContent2,
  pricingContent3,
  // pricingContent4,
  // pricingUrl,
  // pricingBtn,
  pricingShape1,
  // pricingShape2,
}) => {
  return (
    <div className="group bg-white rounded-xl relative z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:opacity-0 before:bg-SecondaryColor-0 before:rounded-xl before:-z-10 before:transition-all before:duration-500 hover:before:h-full hover:before:opacity-100 hover:before:top-0">
      <div className="absolute top-10 right-10 animate-pulse -z-10">
        <img src={pricingShape1} draggable="false" />
      </div>
      {/* <div className="absolute bottom-10 right-10 animate-zoomInOut -z-10">
        <img src={pricingShape2} draggable="false" />
      </div> */}
      <h4 className="font-AlbertSans font-medium text-lg text-PrimaryColor-0 pl-8 pr-10 py-2 bg-[#f5f8ed] rounded-r-full inline-block transition-all duration-500 mt-10">
        {pricingTitle}
      </h4>
      <div className="font-AlbertSans flex items-baseline gap-3 px-[30px] mt-6 pb-4">
        <div className="flex items-center gap-1">
          {/* <h6 className="font-AlbertSans font-bold text-[50px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
            {currency}
          </h6>
          <CountUp
            start={-11}
            end={price}
            suffix=""
            className="text-[50px] font-bold font-AlbertSans text-HeadingColor-0 transition-all duration-500 group-hover:text-white"
          /> */}
        </div>
        <p className="text-TextColor-0 font-AlbertSans">{pricingDateLine}</p>
      </div>
      <p className="font-AlbertSans text-TextColor-0 px-[30px]">
        {pricingDesc}
      </p>
      <ul className="pb-[40px]">
        <li className="flex gap-2 items-center font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-3 mt-9">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent1}
        </li>
        <li className="flex gap-2 items-center font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-3">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent2}
        </li>
        <li className="flex gap-2 items-center font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-3">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent3}
        </li>
        {/* <li className="flex gap-2 items-center font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white px-[30px] mb-1">
          <div className="text-[10px] text-PrimaryColor-0">{pricingIcon}</div>
          {pricingContent4}
        </li> */}
      </ul>
      {/* <div className="px-[30px] pb-10 flex justify-center">
        <Link to={pricingUrl}>
          <button className="primary-btn2 mt-9 group-hover:before:w-full group-hover:before:left-0">
            {pricingBtn}
            <FaArrowRightLong size={"20"} />
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default PricingCard;
