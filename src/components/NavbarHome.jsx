import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex gap-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/about" className="hover:text-gray-300">About</Link>
      <Link to="/services" className="hover:text-gray-300">Services</Link>
      <Link to="/projects" className="hover:text-gray-300">Projects</Link>
      <Link to="/news" className="hover:text-gray-300">News</Link>
      <Link to="/shop" className="hover:text-gray-300">Shop</Link>
      <Link to="/contact" className="hover:text-gray-300">Contact</Link>
    </nav>
  );
};

export default NavbarHome;
