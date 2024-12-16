import {
  bootstrap,
  express,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  logo,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "BackEnd Developer",
    icon: backend,
  },
  {
    title: "Editing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "OctaNet",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Developed and maintained web applications using React.js for dynamic and responsive user interfaces.",
      "Built a Weather App integrating the OpenWeatherMap API to fetch real-time weather data with features like city-based search.",
      "Created a To-Do List App with React.js, enabling users to add, edit, and delete tasks, ensuring seamless performance and a user-friendly design.",
      "Implemented responsive designs using modern CSS frameworks like Tailwind CSS and Bootstrap, ensuring compatibility across various devices and browsers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Microsoft Learn",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2024 - Oct 2024",
    points: [
      "Developed and maintained web applications using React.js, Node.js, and other related technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to create high-quality and responsive products such as portfolio websites, weather apps, and task management tools.",
      "Built and implemented dynamic, user-friendly interfaces with a focus on responsive design and cross-browser compatibility.",
      "Designed a 3D interactive portfolio using Three.js and React Three Fiber, optimizing performance and enhancing user experience with animations using GSAP.",
    ],
  },
  
];


const projects = [
  {
    name: "Pet Scheduler",
    description:
      "Not Available",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "node",
        color: "white-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phone No Manager",
    description:
      "Not Available",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "shadcn ui",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Password Manager",
    description:
      "Not Available",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "To Do List App",
    description:
      "Not Available",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Notes Manager",
    description:
      "Not Available",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "Not Available",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
