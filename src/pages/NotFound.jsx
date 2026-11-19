import { Link } from "react-router-dom";
import { secondaryButton } from "../components/buttonStyles";

const NotFound = () => (
  <div className="py-20 md:py-28">
    <p className="font-serif text-8xl leading-none font-medium text-accent italic md:text-9xl">404</p>
    <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight md:text-5xl">
      Página não encontrada
    </h1>
    <p className="mt-4 text-muted">O endereço acessado não existe neste portfólio.</p>
    <Link to="/" className={`${secondaryButton} mt-8`}>
      ← Voltar ao início
    </Link>
  </div>
);

export default NotFound;
