import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { GiWorld } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Đóng navbar khi route thay đổi
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="flex items-center justify-between px-5 py-2 text-white fixed top-0 left-0 w-full z-10 bg-black">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 no-underline ${
              isActive ? "no-underline-active" : ""
            }`
          }
        >
          <GiWorld className="text-4xl" />
          WorldSpace
        </NavLink>
      </div>

      {/* Liên kết Navbar */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-black lg:static lg:block lg:flex lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row gap-5 font-semibold">
          <li>
            <NavLink to="/capsules" className="hover:underline">
              Capsules
            </NavLink>
          </li>
          <li>
            <NavLink to="/cores" className="hover:underline">
              Cores
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="hover:underline">
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/dragons" className="hover:underline">
              Dragons
            </NavLink>
          </li>
          <li>
            <NavLink to="/launches" className="hover:underline">
              Launches
            </NavLink>
          </li>
          <li>
            <NavLink to="/roadster" className="hover:underline">
              Roadster
            </NavLink>
          </li>
          <li>
            <NavLink to="/rockets" className="hover:underline">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/ships" className="hover:underline">
              Ships
            </NavLink>
          </li>
          <li>
            <NavLink to="/starlink" className="hover:underline">
              Starlink
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Giỏ hàng và nút chuyển menu di động */}
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 no-underline ${
              isActive ? "no-underline-active" : ""
            }`
          }
        >
          <CiShoppingCart />
          Shop <span className="text-green-500">(BUILDING)</span>
        </NavLink>
      </div>

      {/* Biểu tượng menu hamburger */}
      <div className="lg:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? (
            <BiX className="text-3xl" />
          ) : (
            <BiMenu className="text-3xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
