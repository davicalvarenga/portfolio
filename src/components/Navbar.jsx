import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "início" },
  { to: "/projetos", label: "projetos" },
  { to: "/habilidades", label: "habilidades" },
  { to: "/contato", label: "contato" },
];

const navLinkClass = ({ isActive }) =>
  `transition-colors ${isActive ? "text-accent" : "text-muted hover:text-fg"}`;

const Navbar = () => {
  const { pathname } = useLocation();
  const path = pathname === "/" ? "~" : `~${pathname.replace(/\/$/, "")}`;

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 font-mono text-sm md:px-6">
        <NavLink to="/" className="min-w-0 truncate text-fg hover:text-accent">
          <span className="text-accent">davi</span>@alvarenga
          <span className="text-faint">:</span>
          <span className="text-muted">{path}</span>
        </NavLink>
        <nav aria-label="Principal">
          <ul className="flex gap-5">
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
};

export default Navbar;
