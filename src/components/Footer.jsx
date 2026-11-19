import { socials } from "../data/profile";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 border-t-4 border-primary relative z-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-full mx-auto">
        <div className="font-accent text-label-caps text-on-surface uppercase tracking-widest text-center md:text-left">
          © {new Date().getFullYear()} DAVI_ALVARENGA. TODOS OS DIREITOS RESERVADOS.
        </div>
        <ul className="flex flex-wrap gap-8 items-center justify-center">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                className="text-body-lg text-outline hover:text-secondary transition-colors"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
