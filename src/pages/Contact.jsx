import { useState } from "react";
import { primaryButton, secondaryButton } from "../components/buttonStyles";
import { socials } from "../data/profile";

// Endpoint que recebe o POST do formulário (ex.: webhook do n8n ou Formspree).
// Defina em .env.local: VITE_CONTACT_ENDPOINT=https://...
// Sem ele, o formulário não é exibido e a página mostra só os canais diretos.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const LIMITS = { name: 100, email: 254, message: 3000 };

const EMPTY_FORM = { name: "", email: "", message: "" };

const fieldClass =
  "mt-2 w-full border border-line bg-panel px-4 py-3 text-base text-fg placeholder:text-faint focus:border-fg focus:outline-none";

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value.slice(0, LIMITS[name]) }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("Falha ao enviar o formulário de contato:", err);
      setStatus("error");
    }
  };

  return (
    <div className="py-16 md:py-24">
      <header className="max-w-3xl">
        <h1 className="font-serif text-5xl leading-[1.02] font-medium tracking-[-0.03em] md:text-7xl">
          Vamos conversar<span className="text-accent">?</span>
        </h1>
        <p className="mt-6 font-serif text-xl leading-snug text-fg/90 md:text-2xl">
          Estou aberto a estágio ou vaga júnior em desenvolvimento, presencial em Goiânia ou
          remoto. O canal mais rápido é o LinkedIn; meus projetos e código estão no GitHub.
        </p>
      </header>

      <ul className="mt-10 flex flex-wrap gap-3">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>

      {CONTACT_ENDPOINT && (
        <section className="mt-12 border-t border-line pt-8" aria-labelledby="form-title">
          <h2 id="form-title" className="font-serif text-3xl font-medium tracking-tight">
            Enviar mensagem
          </h2>
          <form className="mt-6 flex max-w-xl flex-col gap-6" onSubmit={handleSubmit}>
            <label className="text-sm font-semibold text-muted">
              Nome
              <input
                name="name"
                type="text"
                required
                maxLength={LIMITS.name}
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={fieldClass}
              />
            </label>
            <label className="text-sm font-semibold text-muted">
              E-mail
              <input
                name="email"
                type="email"
                required
                maxLength={LIMITS.email}
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={fieldClass}
              />
            </label>
            <label className="text-sm font-semibold text-muted">
              Mensagem
              <textarea
                name="message"
                rows={5}
                required
                maxLength={LIMITS.message}
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === "sending"} className={primaryButton}>
                {status === "sending" ? "Enviando..." : "Enviar →"}
              </button>
              <p role="status" aria-live="polite" className="text-sm">
                {status === "sent" && (
                  <span className="text-ok">Mensagem enviada. Obrigado pelo contato!</span>
                )}
                {status === "error" && (
                  <span className="text-danger">
                    Não foi possível enviar. Confira os campos ou fale comigo pelo LinkedIn.
                  </span>
                )}
              </p>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default Contact;
