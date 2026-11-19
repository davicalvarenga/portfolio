import { profile, socials } from "../data/profile";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul className="flex gap-6">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              className="transition-colors hover:text-fg"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
