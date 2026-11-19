// Classes compartilhadas dos botões/links de ação.
const base =
  "inline-flex items-center gap-2 border px-4 py-2 font-mono text-sm transition-colors disabled:cursor-wait disabled:opacity-60";

export const primaryButton = `${base} border-accent bg-accent text-bg hover:bg-transparent hover:text-accent`;
export const secondaryButton = `${base} border-line text-fg hover:border-accent hover:text-accent`;
