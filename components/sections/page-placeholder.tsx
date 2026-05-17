type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return <h1 className="snap-page__title">{title}</h1>;
}
