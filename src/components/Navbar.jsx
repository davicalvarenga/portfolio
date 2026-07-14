import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Início" },
  { to: "/projetos", label: "Projetos" },
  { to: "/habilidades", label: "Habilidades" },
  { to: "/contato", label: "Contato" },
];

const navLinkClass = ({ isActive }) =>
  `font-accent text-label-caps uppercase pb-1 transition-colors duration-300 block ${
    isActive
      ? "text-secondary border-b-2 border-secondary"
      : "text-on-surface-variant hover:text-secondary-fixed-dim"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-industrial border-b-2 border-outline-variant">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-full mx-auto">
        <NavLink
          to="/"
          className="font-sans text-headline font-black tracking-tighter text-primary italic uppercase"
          onClick={() => setOpen(false)}
        >
          DAVI_ALVARENGA
        </NavLink>

        <ul className="hidden md:flex gap-gutter items-center">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contato"
          className="relative hidden md:inline-block bg-primary-container text-on-primary-container font-accent text-label-caps px-10 py-3 uppercase font-black italic -skew-x-12 border-2 border-primary shadow-[0_0_15px_rgba(119,1,208,0.4)] hover:bg-on-primary-container hover:text-primary-container transition-all duration-300"
        >
          <span className="inline-block skew-x-12">Contrate-me</span>
        </NavLink>

        <button
          type="button"
          className="md:hidden text-primary"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-3xl">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-outline-variant bg-surface px-margin-mobile py-6 flex flex-col gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={navLinkClass}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contato"
            onClick={() => setOpen(false)}
            className="self-start bg-primary-container text-on-primary-container font-accent text-label-caps px-8 py-3 uppercase font-black italic -skew-x-12 border-2 border-primary"
          >
            <span className="inline-block skew-x-12">Contrate-me</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
