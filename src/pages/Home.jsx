import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { profile, socials } from "../data/profile";

const Home = () => {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen relative flex items-center px-margin-mobile md:px-margin-desktop pt-40 pb-16 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-[200%] h-[40px] bg-primary-container opacity-20 -rotate-[35deg] top-[20%] -left-[50%] blur-sm" />
          <div className="absolute w-[200%] h-[120px] bg-primary-container opacity-10 -rotate-[35deg] top-[40%] -left-[50%]" />
          <div className="absolute w-[2px] h-[200%] bg-secondary-container opacity-30 rotate-[55deg] top-[-50%] right-[20%]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full max-w-[1920px] mx-auto relative z-10">
          <div className="md:col-span-10 md:col-start-2 relative">
            <div className="relative inline-block">
              <div className="absolute -top-12 -left-8 font-accent text-label-caps text-outline-variant tracking-widest uppercase hidden md:block">
                File_No. 001 // Init_Sequence
              </div>
              <h1 className="flex flex-col relative">
                <span className="font-sans text-display-mobile md:text-display-lg text-primary uppercase tracking-tighter leading-[0.85]">
                  O CÓDIGO
                </span>
                <span className="font-sans text-display-mobile md:text-display-lg text-surface-container-lowest uppercase tracking-tighter leading-[0.85] ml-0 md:ml-24 relative inline-block mt-2">
                  <span className="absolute inset-0 text-secondary-container translate-x-[4px] translate-y-[4px] z-[-1]">
                    DA PERSUASÃO
                  </span>
                  <span className="absolute inset-0 text-primary-container -translate-x-[2px] -translate-y-[2px] z-[-2]">
                    DA PERSUASÃO
                  </span>
                  DA PERSUASÃO
                </span>
              </h1>
              <div className="mt-12 max-w-2xl border-l-4 border-primary-container pl-6">
                <p className="font-accent text-label-caps text-secondary-fixed-dim uppercase mb-4">
                  {profile.name} // {profile.role}
                </p>
                <p className="text-body-lg text-on-surface-variant">{profile.bio}</p>
                <p className="text-body-lg text-on-surface mt-4 font-bold">{profile.goal}</p>
              </div>

              <div className="mt-12 flex flex-wrap gap-6">
                <Link
                  to="/projetos"
                  className="px-8 py-3 bg-primary-container text-on-primary-container font-accent text-label-caps uppercase -skew-x-12 border-2 border-primary shadow-[0_0_15px_rgba(119,1,208,0.4)] hover:shadow-[0_0_25px_rgba(119,1,208,0.6)] transition-all duration-300"
                >
                  <span className="inline-block skew-x-12">Ver projetos</span>
                </Link>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border-2 border-outline-variant text-on-surface font-accent text-label-caps uppercase -skew-x-12 hover:border-secondary-fixed-dim hover:text-secondary-fixed-dim transition-colors duration-300"
                  >
                    <span className="inline-flex items-center gap-2 skew-x-12">
                      <span className="material-symbols-outlined text-base">{s.icon}</span>
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-16 flex items-center gap-8 border-t border-outline-variant pt-6 max-w-md">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-accent text-label-caps text-outline-variant">System Load</span>
                    <span className="font-accent text-label-caps text-secondary-container">84%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-high relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-secondary-container w-[84%] animate-glitch-progress" />
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant">memory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Log (projetos em destaque) */}
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low relative z-10 border-y border-outline-variant">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-end justify-between border-b-2 border-outline-variant pb-6 mb-16">
            <h2 className="font-sans text-headline text-primary uppercase flex items-center gap-4">
              <span className="text-outline-variant font-accent text-label-caps">Sec. 02</span>
              Operations Log
            </h2>
            <Link
              to="/projetos"
              className="font-accent text-label-caps text-secondary-container hover:text-primary transition-colors flex items-center gap-2 uppercase"
            >
              Ver Todos <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-accent text-accent-italic text-secondary-container mb-8">
            Estabelecer Conexão
          </h2>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 border-b-2 border-outline-variant hover:border-secondary-container text-primary font-sans text-body-lg py-4 px-2 uppercase transition-colors duration-300"
          >
            Falar com Davi
            <span className="material-symbols-outlined">terminal</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
