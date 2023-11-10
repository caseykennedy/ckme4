export type ProjectShape = {
  featured?: boolean;
  category: string;
  client: string;
  color: string;
  publicID: string;
  credits?: string[];
  deliverables?: string[];
  description?: string;
  domain: string;
  imgFolder: string;
  process?: string[];
  repository?: string;
  services: string[];
  slug: string;
  tagline?: string;
  objectives?: string[];
  technology: string[];
  year: number;
};

export const projects: ProjectShape[] = [
  {
    featured: true,
    client: "Zeda, Inc.",
    slug: "zeda-inc",
    year: 2021,
    category: "case study",
    color: "#8E72FF",
    publicID: "/images/cover.png",
    imgFolder: "/images/projects/zeda",
    description:
      "Zeda is a leading global technology solutions company. Their foundation focuses on additive manufacturing, nanotech, precision machining and regulatory know-how.",
    tagline: "Building the future together",
    credits: [],
    technology: ["React", "NextJS", "Sanity", "Tailwind"],
    deliverables: ["Website", "CMS", "Design System"],
    services: ["Visual Design", "Web Development", "Content Strategy"],
    objectives: [
      "Define the content strategy and user experience",
      "Design an aesthetic user interface",
      "Develop a website with robust SEO and integrated CMS",
    ],
    process: [
      "This project required a deep dive into react, redux and chrome extensions—as well as several new APIs which communicate with the handshake blockchain and USB devices.",
      "Tasks included ui+ux design, writing async functions, data mutations and serialization, cross window message passing, building views and layouts, and writing methods for the NODE backend.",
    ],
    repository: "https://github.com/caseykennedy/zeda",
    domain: "z8a.com",
  },
  {
    featured: false,
    client: "Cahuilla Casino Hotel",
    slug: "cahuilla-casino",
    year: 2019,
    category: "website",
    color: "#E1B50A",
    publicID: "portfolio/thumbnails/i7vgcgbqqmhdutqvizo6",
    imgFolder: "/images/projects/cahuilla-casino",
    technology: ["Wordpress", "PHP", "Javascript", "CSS"],
    services: ["Visual Design", "Web Development", "Branding"],
    domain: "cahuillacasinohotel.com",
  },
  {
    featured: false,
    client: "Cahuilla Consortium",
    slug: "cahuilla-consortium",
    year: 2020,
    category: "website",
    color: "#8E72FF",
    publicID: "/images/cover.png",
    imgFolder: "/images/projects/ccvap",
    technology: ["React", "Gatsby", "Typescript", "Sanity CMS", "theme-ui"],
    services: ["Visual Design", "Web Development", "Content Strategy"],
    repository: "https://github.com/caseykennedy/ccvap",
    domain: "cahuillaconsortium.org",
  },
  {
    featured: false,
    client: "Fresh Bakin'",
    slug: "freshbakin",
    year: 2021,
    category: "website",
    color: "#6ea7bf",
    publicID: "portfolio/thumbnails/mmxbsyrcgqv4iue9g5az",
    imgFolder: "/images/projects/freshbakin",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
    services: ["Visual Design", "Fullstack Development"],
    repository: "https://github.com/caseykennedy/freshbakin",
    domain: "freshbakin.com",
  },
  {
    featured: false,
    client: "Meco",
    slug: "meco",
    year: 2020,
    category: "website",
    color: "#B8860B",
    publicID: "portfolio/thumbnails/lddxzl6hpcpdczyx7mqk",
    imgFolder: "/images/projects/meco",
    technology: ["React", "Gatsby", "Typescript", "Sanity CMS", "Theme UI"],
    services: ["Visual Design", "Web Development", "CMS Integration"],
    repository: "https://github.com/caseykennedy/meco",
    domain: "meco-reno.com",
  },
  {
    featured: false,
    client: "Bridge",
    slug: "bridge",
    year: 2021,
    category: "website",
    color: "#0F95A7",
    publicID: "portfolio/thumbnails/c1do4ofdrmrpqqp20mtt",
    imgFolder: "/images/projects/bridge",
    technology: ["React", "Gatsby", "Typescript"],
    services: ["Visual Design", "Web Development"],
    repository: "https://github.com/caseykennedy/encirca-bridge",
    domain: "encirca-bridge.netlify.app",
  },
  {
    featured: false,
    client: "The Life Change Center",
    slug: "the-life-change-center",
    year: 2021,
    category: "website",
    color: "#004C4C",
    publicID: "portfolio/thumbnails/mvr41q34sdoiyawbmgmc",
    imgFolder: "/images/projects/tlcc",
    technology: ["Wordpress"],
    services: ["Content Strategy", "Web Development"],
    domain: "thelifechangecenter.org",
  },
  {
    featured: false,
    client: "dWeb Foundation",
    slug: "dweb-foundation",
    year: 2021,
    category: "website",
    color: "#2D00FF",
    publicID: "portfolio/thumbnails/nqtfuoe8quyckq5m5bnv",
    imgFolder: "/images/projects/dweb",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
    services: ["Visual Design", "Web Development", "CMS Integration"],
    repository: "https://github.com/caseykennedy/encirca-bridge",
    domain: "decentralizedinter.net",
  },
  {
    featured: false,
    client: "Orthopaedic Implant Co.",
    slug: "oic",
    year: 2021,
    category: "website",
    color: "#F8CB46",
    publicID: "portfolio/thumbnails/orgc5ixg3bhxzikzlv3g",
    imgFolder: "/images/projects/oic",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
    services: ["Visual Design", "Web Development", "CMS Integration"],
    repository: "https://github.com/caseykennedy/encirca-bridge",
    domain: "orthoimplantcompany.com",
  },
];

export default projects;
