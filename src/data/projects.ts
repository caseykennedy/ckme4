export type ProjectShape = {
  category: string;
  client: string;
  color: string;
  coverImg: string;
  credits: string[];
  delvierables: string[];
  description: string;
  imgFolder: string;
  process: string[];
  repository: string;
  services: string[];
  slug: string;
  tagline: string;
  tasks: string[];
  technology: string[];
  url: string;
  year: number;
};

const projects: ProjectShape[] = [
  {
    client: "Zeda, Inc.",
    slug: "zeda-inc",
    year: 2021,
    category: "Fullstack Development",
    color: "#8E72FF",
    coverImg: "/images/projects/zeda/cover.jpg",
    imgFolder: "/static/images/projects/ck-portfolio",
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
    url: "https://z8a.com",
  },
];

export default projects;
