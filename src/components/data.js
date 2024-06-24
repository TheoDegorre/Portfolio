const project = [
  {
    id: 1,
    name: "The Wild Fork",
    logo_url: "./src/assets/images/projet/thewildfork_logo.png",
    image_url: "./src/assets/images/projet/thewildfork_page.png",
    description:
      "The Wild Fork is a static website with an goal : Let you find the best place to lunch ! It's realized with HTML, CSS and a little bit of JS",
    is_demo: "false",
    url_demo: "",
    is_repo: "true",
    url_repo: "https://github.com/TheoDegorre/BugBusters.git",
  },
  {
    id: 2,
    name: "greenDoor",
    logo_url: "../assets/images/projet/greenDoor_logo.svg",
    image_url: "./assets/images/projet/greendoor_page.png",
    description:
      "greenDoor is an interactiv website which guide you to the perfect greenplant for your home. It provide advise for care, a quizz to help your choice of plants and a favorite page to keep your collection",
    is_demo: "true",
    url_demo: "https://greendoor-eight.vercel.app/",
    is_repo: "true",
    url_repo:
      "https://github.com/TheoDegorre/Project-2-JS-Nantes-RAMCss-II-P2-GreenDoor.git",
  },
  {
    id: 3,
    name: "Po'Pote",
    logo_url: "./src/assets/images/projet/popote_logo2.png",
    image_url: "./src/assets/images/projet/popote_page.png",
    description:
      "Po'pote is a complete website to explore, create and store your recipes. With an account you can create and keep your favorite meal but also create a menu for a week and keep and eye on the calories.",
    is_demo: "false",
    url_demo: "",
    is_repo: "true",
    url_repo:
      "https://github.com/WildCodeSchool-2024-02/JS-Nantes-RamCSS-P3-PoPote.git",
  },

  {
    id: 4,
    name: "Rick&Morty",
    logo_url: "./src/assets/images/projet/ReactRick&Morty_logo.png",
    image_url: "./src/assets/images/projet/ReactRick&Morty_page.png",
    description:
      "Rick&Morty is an exercice design by MrLootman for train on React componants and hooks with an API fetch of a marvellous content based on Rick and Morty's series",
    is_demo: "false",
    url_demo: "",
    is_repo: "false",
    url_repo: "",
  },
  {
    id: 5,
    name: "TrashExpress",
    logo_url: "./src/assets/images/projet/trashexpress_logo.png",
    image_url: "./src/assets/images/projet/trashexpress_page.png",
    description:
      "TrashExpress is a small website created in less 2 days. The purpose was to create a site on the theme of nature. So with my team we decided to do a satirical site on wild dumping, but with an educational aim. We used some cool features: like a search bar and an interactive map. Without forgetting a little game : T-rex game like  ",
    is_demo: "false",
    url_demo: "",
    is_repo: "true",
    url_repo: "https://github.com/TheoDegorre/Trash_Express.git",
  },
  {
    id: 6,
    name: "MorganEcholsCSS",
    logo_url: "./src/assets/images/projet/morganEcholCSS_logo.png",
    image_url: "./src/assets/images/projet/morganEcholCSS_logo.png",
    description:
      "Morgan-EcholsCSS is an very little project on basic CSS. The goal was to reproduce the amazing painting of the artist on CSS with stacking some grid",
    is_demo: "false",
    url_demo: "",
    is_repo: "true",
    url_repo: "https://github.com/TheoDegorre/morgan-echols-css.git",
  },
  {
    id: 7,
    name: "React-Mario",
    logo_url: "./src/assets/images/projet/ReactMario_logo.png",
    image_url: "./src/assets/images/projet/ReactMario_page.png",
    description:
      "React-Mario is an little exercice of a Api fetch with react, the goal was to do a fonctionnal page on a short time",
    is_demo: "false",
    url_demo: "",
    is_repo: "false",
    url_repo: "",
  },
  // {
  //   id: 8,
  //   name: "Stream-Waves",
  //   logo_url: "",
  //   image_url:"",
  //   description:
  //     "Stream-Waves is a little interactiv website wich propose de stream webRadios. There are all cateogries of radio, some well known and some totally obscure",
  //   is_demo: false,
  //   url_demo: "",
  //   is_repo: true,
  //   url_repo: "",
  // },
  // {
  //   id: 9,
  //   name: "Wild-Series",
  //   logo_url: "",
  //   image_url:"",
  //   description:
  //     "A litle project with an accent made on back-end to provide a website of series",
  //   is_demo: false,
  //   url_demo: "",
  //   is_repo: true,
  //   url_repo: "",
  // },
];

const experience = [
  {
    id: 1,
    job_name: "Agricultural auditor",
    company_name: "Kiwa France",
    logo_url: "./src/assets/images/experience/logo_kiwa.jpg",
    period: "02/21 to 02/24",
    description:
      "Carrying out agricultural audits at producers, packing stations, processing stations for all types of standards: GGAP/TESCO/HVE/VER/Carrefour/Système U/Plaisir et Confiance/Tomate et Cucumber de France/LEAF/... Monitoring certification files, writing audit reports, planning audit interventions. ",
    skills: [
      "Quality audit",
      "Report writing",
      "Client records management",
      "Sense of observation and analysis",
    ],
  },
  {
    id: 2,
    job_name: "Agronome expert",
    company_name: "Agricool",
    logo_url: "./src/assets/images/experience/logo_agricool.png",
    period: " 01/18 to 02/21",
    description:
      "Monitoring of company production. Carrying out on-site productivity checks. Implementation of phytosanitary and biological protection programs. Carrying out quality control. Development of the quality center. Implementation of management and quality control tools.",
    skills: [
      "Project management",
      "Quality control",
      "Audit qualité",
      "Employee training",
    ],
  },
  {
    id: 3,
    job_name: "Experimentation technician",
    company_name: "Japan Agro Service",
    logo_url: "./src/assets/images/experience/logo_jas.jpg",
    period: " 03/17 to 11/17",
    description:
      "Setting up experimental plots. Monitoring plant health and growth. Recording data on plant growth, development, yield, and other variables. Applying phytosanitary treatment.",
    skills: ["", ""],
  },
];

export default { project, experience };
