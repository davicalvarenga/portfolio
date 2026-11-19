// Classes compartilhadas dos botões/links de ação.
const base =
  "inline-flex items-center gap-2 border-[1.5px] px-5 py-2.5 text-[15px] font-semibold transition-colors disabled:cursor-wait disabled:opacity-60";

export const primaryButton = `${base} border-fg bg-fg text-bg hover:border-accent hover:bg-accent`;
export const secondaryButton = `${base} border-line text-fg hover:border-fg`;
