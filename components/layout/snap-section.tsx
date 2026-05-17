import type { ReactNode } from "react";

type SnapSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SnapSection({ id, className, children }: SnapSectionProps) {
  return (
    <section id={id} className={["snap-page", className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
}
