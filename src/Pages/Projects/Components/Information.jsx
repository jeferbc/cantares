import PropTypes from "prop-types";

const Information = ({title1, text1, title2, text2, title3, text3, title4, text4}) => (
  <div className="rounded-lg overflow-hidden bg-[#f5f8ed] mb-7">
    <div className="mx-9 pt-9 border-b border-dashed border-[#D9DDEC] pb-4">
      <p className="font-AlbertSans text-TextColor-0">{title1}</p>
      <h5 className="font-AlbertSans font-medium text-HeadingColor-0 pt-1">
        {text1}
      </h5>
    </div>
    <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
      <p className="font-AlbertSans text-TextColor-0">{title2}</p>
      <h5 className="font-AlbertSans font-medium text-HeadingColor-0 pt-1">
        {text2}
      </h5>
    </div>
    <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
      <p className="font-AlbertSans text-TextColor-0">
        {title3}
      </p>
      <h5 className="font-AlbertSans font-medium text-HeadingColor-0 pt-1">
        {text3}
      </h5>
    </div>
    {title4 && (
      <div className="mx-9 pt-3 border-b border-dashed border-[#D9DDEC] pb-4">
        <p className="font-AlbertSans text-TextColor-0">
          {title4}
        </p>
        <h5 className="font-AlbertSans font-semibold text-HeadingColor-0 pt-1">
          {text4}
        </h5>
      </div>
    )}
  </div>
)

Information.propTypes = {
  title1: PropTypes.string,
  text1: PropTypes.string,
  title2: PropTypes.string,
  text2: PropTypes.string,
  title3: PropTypes.string,
  text3: PropTypes.string,
  title4: PropTypes.string,
  text4: PropTypes.string
};

export default Information;