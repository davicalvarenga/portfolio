import { Link, useLocation } from "react-router-dom";
import Prompt from "../components/Prompt";
import { secondaryButton } from "../components/buttonStyles";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-16 md:py-24">
      <Prompt cmd={`cd ${pathname}`} />
      <p className="mt-2 break-all font-mono text-sm text-danger" aria-hidden="true">
        bash: cd: {pathname}: No such file or directory
      </p>
      <h1 className="mt-8 font-mono text-3xl font-semibold tracking-tight">
        Página não encontrada
      </h1>
      <p className="mt-4 text-muted">O endereço acessado não existe neste portfólio.</p>
      <Link to="/" className={`${secondaryButton} mt-8`}>
        ← voltar ao início
      </Link>
    </div>
  );
};

export default NotFound;
