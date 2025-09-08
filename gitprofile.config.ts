// gitprofile.config.ts

const CONFIG = {
  github: {
    username: "elchemista",
  },

  // If deploying to https://<USERNAME>.github.io/, set base to '/'.
  // If deploying to https://<USERNAME>.github.io/<REPO_NAME>/, set base to '/<REPO_NAME>/'.
  base: "/gitprofile/",

  projects: {
    github: {
      display: true,
      header: "Github Projects",
      mode: "automatic",
      automatic: {
        sortBy: "stars",
        limit: 6,
        exclude: {
          forks: false,
          projects: [
            "elchemista/rassifier",
            "elchemista/agent_dsl",
            "elchemista/fuzler",
          ],
        },
      },
      manual: {
        projects: ["elchemista/gitprofile", "elchemista/pandora"],
      },
    },

    external: {
      header: "My Projects",
      projects: [
        {
          title: "Arcatech",
          description:
            "Online system for mechanical parts catalogs, orders, and supplier workflows. AI agent requests availability/prices via Email/WhatsApp and updates the DB in real time. Built end-to-end with Elixir/Phoenix LiveView in 4 weeks.",
          imageUrl: "https://elchemista.com/images/arcatech.webp",
          link: "https://arcatech.fly.dev/",
        },
        {
          title: "Yacht & Tours",
          description:
            "Boat-booking platform with price search/filters, calendar & pricing management, guest–host chat, real-time notifications, Stripe payments, e-invoicing, admin dashboard, and MMK sync. Built with Elixir/LiveView + Svelte; scalable and distributed.",
          imageUrl: "https://elchemista.com/images/yachtandtours.webp",
          link: "https://yachtandtours.fly.dev/",
        },
        {
          title: "RedoMap",
          description:
            "Embeddable Svelte web app for navigator-style exploration—no installs or registration. QR to start, paid map sales, builder dashboard, and browser audio guides. AI assists content; analytics reveal visitor interests. Live for 5+ years.",
          imageUrl: "https://elchemista.com/images/redomap.webp",
          link: "https://www.redomap.com/en/",
        },
        {
          title: "Consulente Tech (beta)",
          description:
            "AI-assisted job posts and proposals connecting clients with freelancers. Structured quotes, direct chat, and org teams for freelancers. First version live and collecting feedback. Built with Phoenix LiveView.",
          imageUrl: "https://elchemista.com/images/consulente.webp",
          link: "https://consulente.tech/",
        },
      ],
    },
  },

  seo: {
    title: "Portfolio of Yuriy Zhar",
    description:
      "I build revenue-driven products with AI—full-stack in Elixir, Go, Svelte & Rust (plus Python when it adds value). I help SMBs and e-commerce automate operations, reduce manual work, and sell more.",
    imageURL: "https://elchemista.com/images/profile.webp",
  },

  social: {
    linkedin: "yuriy-zhar-207a37257",
    x: "elchemista",
    stackoverflow: "",
    discord: "elchemista",
    telegram: "",
    website: "https://elchemista.com",
    email: "elchemista@gmail.com",
  },

  resume: {
    fileUrl: "https://elchemista.com/curriculum",
  },

  skills: [
    "Elixir",
    "Phoenix LiveView",
    "Go",
    "Svelte",
    "TypeScript",
    "Rust",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "AWS Lambda",
    "AWS IoT Core",
    "Docker",
    "Git",
    "Tailwind CSS",
    "Stripe",
    "RAG/LLM",
  ],

  experiences: [
    {
      company: "Yacht & Tours (Campania Nautica e Turismo Srls)",
      position: "Developer & Consultant (Self-Employed)",
      from: "April 2025",
      to: "Present",
      companyLink: "https://yachtandtours.fly.dev/",
    },
    {
      company: "MAXWELL GROUP SRL",
      position: "Back-End Consultant (Self-Employed)",
      from: "January 2019",
      to: "Present",
      companyLink: "",
    },
    {
      company: "RDM SRL",
      position: "Full-Stack Web Developer",
      from: "April 2018",
      to: "April 2025",
      companyLink: "",
    },
    {
      company: "CLUSTERCORE SRL",
      position: "Back-End Developer",
      from: "June 2021",
      to: "April 2022",
      companyLink: "",
    },
    {
      company: "E-SOUL SRL",
      position: "Full-Stack Web Developer",
      from: "May 2017",
      to: "September 2018",
      companyLink: "",
    },
    {
      company: "Paradox Engineering",
      position: "Software Developer",
      from: "January 2015",
      to: "July 2015",
      companyLink: "",
    },
    {
      company: "I.T. Computer Di Daniela Gasparini",
      position: "System Administrator",
      from: "June 2014",
      to: "July 2015",
      companyLink: "",
    },
  ],

  certifications: [],

  educations: [
    {
      institution: "I.T.I.S. Magistri Cumacini, Lazzago (Como), Italy",
      degree: "Senior IT Engineering Technician",
      from: "2014",
      to: "2014",
    },
  ],

  // blog: {
  //   source: "dev",
  //   username: "", // Hide blog section
  //   limit: 2,
  // },

  googleAnalytics: { id: "" },
  // hotjar: { id: "", snippetVersion: 6 },

  themeConfig: {
    defaultTheme: "dracula",
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      "caramellatte",
      "abyss",
      "silk",
      "procyon",
    ],
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
