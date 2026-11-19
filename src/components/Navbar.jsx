import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Início" },
  { to: "/projetos", label: "Projetos" },
  { to: "/habilidades", label: "Habilidades" },
  { to: "/contato", label: "Contato" },
];

const navLinkClass = ({ isActive }) =>
  `border-b-2 pb-0.5 transition-colors ${
    isActive ? "border-accent text-fg" : "border-transparent text-muted hover:text-fg"
  }`;

const Navbar = () => (
  <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-5 text-[15px] md:px-8">
      <NavLink to="/" className="font-semibold text-fg hover:text-accent">
        {profile.shortName}
      </NavLink>
      <nav aria-label="Principal">
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
