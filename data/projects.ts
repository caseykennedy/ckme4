export type ProjectShape = {
  featured?: boolean;
  category: string;
  client: string;
  color: string;
  coverImg: string;
  credits?: string[];
  delvierables?: string[];
  description?: string;
  domain: string;
  imgFolder: string;
  process?: string[];
  repository?: string;
  services: string[];
  slug: string;
  tagline?: string;
  tasks?: string[];
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
    coverImg: "/images/cover.png",
    imgFolder: "/images/projects/zeda",
    description:
      "Zeda is a leading global technology solutions company. Our foundation combines expertise from diverse industries, including additive manufacturing, nanotech, precision machining and regulatory know-how.",
    tagline: "Building the future together",
    credits: [],
    technology: ["React", "NextJS", "Typescript", "Sanity CMS", "TailwindCSS"],
    delvierables: ["Website", "Blog", "CMS"],
    services: ["Visual Design", "Web Development", "Content Strategy"],
    tasks: [
      "Refactor the UI and theme.",
      "Integrate multiple account creation and account admin functions.",
      "Integrate Ledger hardware wallet support.",
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
    client: "Cahuilla Casino Resort",
    slug: "cahuilla-casino",
    year: 2019,
    category: "website",
    color: "#8E72FF",
    coverImg: "/images/cover.png",
    imgFolder: "/images/projects/cahuilla-casino",
    technology: ["Wordpress", "PHP", "Javascript", "CSS"],
    services: ["Visual Design", "Web Development", "Branding"],
    domain: "cahuillacasinoresort.com",
  },
  {
    featured: false,
    client: "Cahuilla Consortium",
    slug: "cahuilla-consortium",
    year: 2020,
    category: "website",
    color: "#8E72FF",
    coverImg: "/images/cover.png",
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
    color: "#000000",
    coverImg: "/images/cover.png",
    imgFolder: "/images/projects/freshbakin",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
    services: ["Visual Design", "Web Development", "Content Strategy"],
    repository: "https://github.com/caseykennedy/freshbakin",
    domain: "freshbakin.com",
  },
  {
    featured: false,
    client: "Meco",
    slug: "meco",
    year: 2020,
    category: "website",
    color: "#000000",
    coverImg: "/images/cover.png",
    imgFolder: "/images/projects/meco",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
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
    color: "#000000",
    coverImg: "/images/cover.png",
    imgFolder: "/images/projects/bridge",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
    services: ["Visual Design", "Web Development", "CMS Integration"],
    repository: "https://github.com/caseykennedy/encirca-bridge",
    domain: "encirca-bridge.netlify.app",
  },
  {
    featured: false,
    client: "The Life Change Center",
    slug: "the-life-change-center",
    year: 2021,
    category: "website",
    color: "#000000",
    coverImg: "/images/cover.png",
    imgFolder: "/images/projects/tlcc",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
    services: ["Visual Design", "Web Development", "CMS Integration"],
    repository: "https://github.com/caseykennedy/encirca-bridge",
    domain: "tlccreno.org",
  },
  {
    featured: false,
    client: "dWeb Foundation",
    slug: "dweb-foundation",
    year: 2021,
    category: "website",
    color: "#000000",
    coverImg: "/images/cover.png",
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
    client: "Orthopaedic Implant Company",
    slug: "oic",
    year: 2021,
    category: "website",
    color: "#000000",
    coverImg: "/images/cover.png",
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
    domain: "orthopaedicimplantcompany.com",
  },
  {
    featured: false,
    client: "Miner49",
    slug: "miner49",
    year: 2022,
    category: "website",
    color: "#000000",
    coverImg: "/images/cover.png",
    imgFolder: "/images/projects/miner49",
    technology: [
      "React",
      "Gatsby",
      "Typescript",
      "Sanity CMS",
      "Styled Components",
    ],
    services: ["Visual Design", "Web Development", "CMS Integration"],
    // repository: "",
    domain: "miner49.com",
  },
];

export default projects;
