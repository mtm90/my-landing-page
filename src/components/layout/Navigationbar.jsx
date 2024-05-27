import { NavLink } from "react-router-dom";

export default function Navigationbar() {
  return (
    <>
      <div className="navbar">
        <div>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Home
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            About me
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/hire-me"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Hire me
          </NavLink>
        </div>
      </div>
    </>
  );
}
