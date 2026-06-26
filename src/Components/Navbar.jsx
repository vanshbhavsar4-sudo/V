import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Vansh Portfolio</h1>

        <ul className="hidden md:flex gap-8">
          {links.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition ${isActive ? "text-cyan-400" : "hover:text-cyan-400"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button type="button" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800 px-6 py-4">
          {links.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;