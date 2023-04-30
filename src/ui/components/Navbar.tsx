import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-[#191d1f] text-white flex py-5 gap-7 px-2 items-center">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="">
        <div className="flex gap-7 justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "border-b-[1px]" : "text-white text-opacity-60"}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `delay-[25ms] ${isActive ? "border-b-[1px]" : "text-white text-opacity-60"}`
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `delay-[25ms] ${isActive ? "border-b-[1px]" : "text-white text-opacity-60"}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="flex justify-end w-full items-center">
        <ul className="ml-auto flex gap-5">
          <span className="">Hi, Eric!</span>
          <button className="text-white text-opacity-60" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
