import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white text-center">
      <ul className="flex items-center justify-center gap-10 py-5 px-5 no-underline">
        <li>
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 no-underline ${
                isActive ? "no-underline-active" : ""
              }`
            }
          >
            WorldSpace@2024
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 no-underline ${
                isActive ? "no-underline-active" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 no-underline ${
                isActive ? "no-underline-active" : ""
              }`
            }
          >
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
