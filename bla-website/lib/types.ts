export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  body: string;
};

export type MembershipContent = {
  eyebrow: string;
  title: string;
  options: {
    title: string;
    description: string;
  }[];
};

export type FaqContent = {
  eyebrow: string;
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type BoardContent = {
  eyebrow: string;
  title: string;
  members: {
    name: string;
    role: string;
  }[];
};

export type GalleryContent = {
  eyebrow: string;
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export type SocialsContent = {
  eyebrow: string;
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type HomePageContent = {
  navigation: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  membership: MembershipContent;
  faq: FaqContent;
  board: BoardContent;
  gallery: GalleryContent;
  socials: SocialsContent;
};

