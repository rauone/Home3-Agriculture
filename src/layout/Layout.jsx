import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? <NavbarHome /> : <Navbar />}
      <Outlet /> {/* Вставляем динамический контент */}
      <Footer />
    </>
  );
}

export default Layout;
