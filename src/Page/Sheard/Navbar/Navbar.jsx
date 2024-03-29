import Headroom from "react-headroom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Services</Link>
      </li>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Industries</Link>
      </li>
      <li>
        <Link to="/">Client</Link>
      </li>
    </>
  );
  return (
    <Headroom className="bg-base-100">
      <div className=" navbar z-50   top-3  bg-base-100 container mx-auto">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="ml-20 text-xl ">
            <img
              className="h-12 md:h-14 w-16 rounded"
              src="https://i.ibb.co/Zx9dHn3/Black-White-Simple-Monochrome-Initial-Name-Logo.png"
            ></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/global" className=" "></Link>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
