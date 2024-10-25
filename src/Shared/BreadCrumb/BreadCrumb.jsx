import PropTypes from "prop-types";

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbSubtitle,
}) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center h-[400px] sm:h-[530px] text-center pt-20">
      <div className="Container">
        <h1 className="font-AlbertSans font-extrabold text-4xl sm:text-[46px] text-white capitalize">
          {breadCrumbTitle}
        </h1>
        <p className="font-AlbertSans text-lg text-white my-10">
          {breadCrumbSubtitle}
        </p>
      </div>
    </div>
  );
};

BreadCrumb.propTypes = {
  breadCrumbTitle: PropTypes.string,
  breadCrumbSubtitle: PropTypes.string,
};

export default BreadCrumb;
