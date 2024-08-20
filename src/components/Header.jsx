import { GiWorld } from "react-icons/gi";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
          <Link to="/">
            <GiWorld className="text-4xl text-white" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/capsules" className="text-white text-sm">
                Capsules
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
