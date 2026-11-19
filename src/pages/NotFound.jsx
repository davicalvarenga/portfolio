import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-[140px] px-margin-mobile md:px-margin-desktop pb-24 text-center min-h-[60vh]">
      <div className="font-accent text-label-caps text-outline-variant tracking-widest uppercase mb-4">
        Error_404
      </div>
      <h1 className="font-sans text-headline text-primary mb-4 uppercase">Página não encontrada</h1>
      <p className="text-body-lg text-on-surface-variant mb-8">
        O endereço acessado não existe neste portfólio.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 bg-primary-container text-on-primary-container font-accent text-label-caps uppercase -skew-x-12 border-2 border-primary"
      >
        <span className="inline-block skew-x-12">Voltar ao início</span>
      </Link>
    </div>
  );
};

export default NotFound;
