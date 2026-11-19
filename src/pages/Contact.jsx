import { useState } from "react";
import Prompt from "../components/Prompt";
import { primaryButton, secondaryButton } from "../components/buttonStyles";
import { profile, socials } from "../data/profile";

// Endpoint que recebe o POST do formulário (ex.: webhook do n8n ou Formspree).
// Defina em .env.local: VITE_CONTACT_ENDPOINT=https://...
// Sem ele, o formulário não é exibido e a página mostra só os canais diretos.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const LIMITS = { name: 100, email: 254, message: 3000 };

const EMPTY_FORM = { name: "", email: "", message: "" };

const fieldClass =
  "mt-2 w-full border border-line bg-panel px-3 py-2 text-fg placeholder:text-faint focus:border-accent focus:outline-none";

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
    <div className="py-16 md:py-20">
      <header>
        <Prompt cmd="./contato.sh" />
        <h1 className="mt-6 font-mono text-3xl font-semibold tracking-tight md:text-4xl">
          Contato
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Estou aberto a estágio ou vaga júnior em desenvolvimento ({profile.location}). O
          canal mais rápido é o LinkedIn; meus projetos e código estão no GitHub.
        </p>
      </header>

      <ul className="mt-10 flex flex-wrap gap-3">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
              {s.label.toLowerCase()} ↗
            </a>
          </li>
        ))}
      </ul>

      {CONTACT_ENDPOINT && (
        <section className="mt-12 border-t border-line pt-8" aria-labelledby="form-title">
          <h2 id="form-title" className="font-mono text-sm text-accent">
            <span className="text-faint">## </span>
            enviar mensagem
          </h2>
          <form className="mt-6 flex max-w-xl flex-col gap-6" onSubmit={handleSubmit}>
            <label className="font-mono text-sm text-muted">
              nome
              <input
                name="name"
                type="text"
                required
                maxLength={LIMITS.name}
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={`${fieldClass} font-sans`}
              />
            </label>
            <label className="font-mono text-sm text-muted">
              e-mail
              <input
                name="email"
                type="email"
                required
                maxLength={LIMITS.email}
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={`${fieldClass} font-sans`}
              />
            </label>
            <label className="font-mono text-sm text-muted">
              mensagem
              <textarea
                name="message"
                rows={5}
                required
                maxLength={LIMITS.message}
                value={form.message}
                onChange={handleChange}
                className={`${fieldClass} resize-y font-sans`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === "sending"} className={primaryButton}>
                {status === "sending" ? "enviando..." : "enviar →"}
              </button>
              <p role="status" aria-live="polite" className="font-mono text-sm">
                {status === "sent" && (
                  <span className="text-ok">mensagem enviada. obrigado pelo contato!</span>
                )}
                {status === "error" && (
                  <span className="text-danger">
                    não foi possível enviar. confira os campos ou fale comigo pelo LinkedIn.
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
