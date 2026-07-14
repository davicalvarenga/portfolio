import { useState } from "react";

const STATUS_LABEL = {
  idle: "INITIALIZE_TRANSFER",
  sending: "TRANSMITTING...",
  sent: "TRANSFER_COMPLETE",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");

    // TODO: back-end — troque a simulação abaixo pela chamada real da API,
    // por exemplo: await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 2000);
    }, 1200);
  };

  return (
    <div className="bg-noise relative pt-[88px]">
      <main className="flex-grow flex flex-col md:flex-row relative z-10 w-full min-h-[calc(100vh-64px)]">
        {/* Left: kinetic typography */}
        <section className="w-full md:w-1/2 bg-surface-container-lowest flex items-center justify-center p-8 md:p-margin-desktop border-b md:border-b-0 md:border-r border-outline-variant relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-outline-variant/30" />
            <div className="absolute top-1/3 left-0 w-full h-px bg-outline-variant/30" />
          </div>
          <div className="z-10 text-left -rotate-2 transform">
            <h1
              className="font-sans text-display-mobile md:text-display-lg text-primary uppercase leading-tight tracking-tighter kinetic-text"
              data-text="ESTABLISH"
            >
              ESTABLISH
            </h1>
            <h1
              className="font-sans text-display-mobile md:text-display-lg text-secondary-container uppercase leading-tight tracking-tighter ml-8 md:ml-12 kinetic-text"
              data-text="CONNECTION"
            >
              CONNECTION
            </h1>
            <div className="mt-12 space-y-4 font-accent text-label-caps text-on-surface-variant">
              <p className="flex items-center gap-4">
                <span className="text-secondary-container">SYS.STATUS:</span>
                <span className="text-primary font-bold">ONLINE_AWAITING_INPUT</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="text-secondary-container">LOCALIZAÇÃO:</span>
                <span className="text-primary font-bold">BRASIL // REMOTO</span>
              </p>
            </div>
          </div>
        </section>

        {/* Right: form */}
        <section className="w-full md:w-1/2 bg-surface-dim flex items-center justify-center p-8 md:p-margin-desktop">
          <div className="w-full max-w-lg">
            <div className="offset-frame bg-surface-container p-8">
              <div className="mb-8 border-b-2 border-outline pb-4 flex justify-between items-end">
                <h2 className="font-sans text-headline text-primary">COMMUNICATION_PROTOCOL</h2>
              </div>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="relative border-b-2 border-outline-variant focus-within:border-secondary-container transition-colors duration-300 pb-2">
                  <label
                    htmlFor="name"
                    className="absolute -top-6 left-0 font-accent text-accent-italic text-secondary-container opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    IDENTIFIER
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="NOME / APELIDO"
                    className="w-full bg-transparent border-none text-on-surface text-body-lg placeholder-on-surface-variant/60 focus:ring-0 px-0 focus:outline-none uppercase"
                  />
                </div>

                <div className="relative border-b-2 border-outline-variant focus-within:border-secondary-container transition-colors duration-300 pb-2">
                  <label
                    htmlFor="email"
                    className="absolute -top-6 left-0 font-accent text-accent-italic text-secondary-container opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    RETURN_ADDRESS
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ENDEREÇO DE EMAIL"
                    className="w-full bg-transparent border-none text-on-surface text-body-lg placeholder-on-surface-variant/60 focus:ring-0 px-0 focus:outline-none uppercase"
                  />
                </div>

                <div className="relative border-b-2 border-outline-variant focus-within:border-secondary-container transition-colors duration-300 pb-2 pt-4">
                  <label
                    htmlFor="message"
                    className="absolute -top-2 left-0 font-accent text-accent-italic text-secondary-container opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    DATA_PAYLOAD
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="DIGITE SUA MENSAGEM..."
                    className="w-full bg-transparent border-none text-on-surface text-body-lg placeholder-on-surface-variant/60 focus:ring-0 px-0 focus:outline-none resize-none mt-4"
                  />
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className={`px-12 py-4 font-accent text-label-caps btn-slanted flex items-center gap-2 group transition-colors duration-300 disabled:cursor-wait ${
                      status === "sent"
                        ? "bg-secondary-container text-on-secondary-container"
                        : "bg-primary-container text-on-primary-container"
                    }`}
                  >
                    <span>{STATUS_LABEL[status]}</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>

              <div className="mt-12 pt-8 border-t-2 border-outline-variant flex gap-6">
                <a aria-label="GitHub" className="text-on-surface-variant hover:text-secondary-container transition-colors" href="#">
                  <span className="material-symbols-outlined">code</span>
                </a>
                <a aria-label="LinkedIn" className="text-on-surface-variant hover:text-secondary-container transition-colors" href="#">
                  <span className="material-symbols-outlined">work</span>
                </a>
                <a aria-label="Twitter" className="text-on-surface-variant hover:text-secondary-container transition-colors" href="#">
                  <span className="material-symbols-outlined">tag</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
