import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, children }: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-white/10 px-5 py-20">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-[#d3a76c]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-3xl text-3xl font-semibold tracking-normal sm:text-5xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

