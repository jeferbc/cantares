import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Scroll from "../Shared/ScrollTop";

const Main = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Scroll />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
