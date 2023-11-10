export type EmploymentShape = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  focus: string[];
};

export const employment: EmploymentShape[] = [
  {
    company: "Freelance",
    position: "Fullstack Developer / Designer",
    startDate: "current",
    endDate: "",
    description:
      "As an independent developer and designer, I help people, teams and visionaries build high performance websites, apps, and digital products.",
    focus: ["Full-stack Development", "Visual Design", "UX"],
  },
  {
    company: "Tetra",
    position: "Fullstack Developer",
    startDate: "2020—2023",
    endDate: "",
    description:
      "Working with crypto startups, founders and open-source foundations taught me the ins and outs of fintech and allowed me to broaden my skill deeper into the backend. We were a close-knit team collaborating remotely, daily. Chris handled design, Taylor operations and I wore the developer hat.",
    focus: ["Full-stack Development", "UX"],
  },
  {
    company: "noip.com",
    position: "Lead front-end Dev / Designer",
    startDate: "2012—2017",
    endDate: "",
    description:
      "Working at noip.com was an invaluable learning experience and a great introduction to the world of SaaS. In my time there, I was able to refresh the brand and identity, and rebuild both the marketing website and the admin dashboard.",
    focus: [
      "Frontend development",
      "User experience",
      "Visual, graphic design",
      "Creative direction",
    ],
  },
  {
    company: "Atlantis Casino Resort Spa",
    position: "Webmaster / Visual Designer",
    startDate: "2020—2023",
    endDate: "",
    description:
      "My duties at the Atlantis consisted of maintaining content on the website and building out email blasts for casino events and promotions. Leading the casino’s website redesign, I learned a great deal about version control, accessibility and project management.",
    focus: [
      "Web Development",
      "Visual Design",
      "Email design and dev",
      "Digital Advertising",
    ],
  },
  {
    company: "Simple Media",
    position: "Junior Designer",
    startDate: "2007—2008",
    endDate: "",
    description:
      "Simple media gave me a huge opportunity to come on as a fresh, junior designer to not only assist the team with simple design tasks, but also learn from pros and get an insight into the business.",
    focus: ["Graphic Design", "Visual Design"],
  },
];

export default employment;
