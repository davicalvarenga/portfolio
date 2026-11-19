import { profile, socials } from "../data/profile";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                className="hover:text-accent transition-colors"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label.toLowerCase()} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
