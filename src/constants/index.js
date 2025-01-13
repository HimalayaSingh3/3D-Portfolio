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
  portfolio,
  notes,
  todo,
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
    title: "UI/UX Design",
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
    name: "SAAS AI Form Generator",
    description: "Build a SaaS AI Form Generator that allows users to create custom forms by leveraging OpenAI's GPT-3 to automatically generate form questions based on user input. Users can specify form details (e.g., survey, feedback, registration form), and the app will generate relevant fields and questions for the form. The platform will offer user authentication through Clerk, backend storage with Supabase and Prisma, and a modern UI with Tailwind CSS and ShadCN UI.",
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
        name: "prisma",
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
    name: "Phone No Manager",
    description:
      "Create a Phone Number Manager app using Clerk for authentication, Supabase for database management, and React for building the frontend, styled with Tailwind CSS, ShadCN UI, and Material-UI (MUI). This app allows users to securely save, manage, and organize their phone numbers with an intuitive interface.",
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
    name: "Full Stack Link Saver",
    description:
      "Create a Full-Stack Link Saver using the MERN stack (MongoDB, Express.js, React, and Node.js) without authentication. This app will allow users to save and manage their favorite links, with features like tagging, searching, and organizing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn ui",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/HimalayaSingh3/MERN-Stack-Link-Saver-App",
  },
  {
    name: "Personal Landing Page Generator",
    description:
      "Develop a Personal Landing Page Generator using React and Tailwind CSS. This tool enables users to quickly create and customize a personal or professional landing page by inputting their details. The app generates a responsive and elegant landing page that users can preview and export.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/HimalayaSingh3/Personal-Landing-Page-Generator",
  },
  {
    name: "Readme Generator",
    description:
      "Build a README Generator using React and Tailwind CSS to streamline the creation of professional and visually appealing README files for GitHub projects. The app allows users to input project details through an interactive form and generates a Markdown file that can be downloaded and used directly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/HimalayaSingh3/Readme-Generator",
  },
  {
    name: "Video Conference App",
    description:
      "Create a Video Conference App using React and ZEGOCLOUD that enables users to join and host video calls, with features such as screen sharing, real-time messaging, and multiple participants. This app can be used for meetings, online classes, or virtual events, providing a seamless and scalable video conferencing experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "zegocloud",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/HimalayaSingh3/Video-Conference-App",
  },
  {
    name: "Discussio Chat App",
    description: "Build a Chat App using Next.js, Clerk for authentication, and Stream for real-time messaging. This app will provide an interactive, secure, and seamless chat experience with user authentication, private and group chat features, and real-time message synchronization.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "stream",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "ToDoism App",
    description: "Build a To-Do List app using React for the frontend, Clerk for authentication, Supabase for backend data storage, Prisma as the ORM, and ShadCN UI along with Tailwind CSS for styling. This app will allow users to create, view, update, and delete tasks, while ensuring secure access and an intuitive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Notes Manager",
    description: "Create a Notes Manager app using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create, organize, and manage their notes in a user-friendly interface. The app supports features like creating, editing, deleting, categorizing, and searching notes, making it a powerful tool for personal or work-related note-taking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node",
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
    ],
    image: notes,
    source_code_link:
      "https://github.com/HimalayaSingh3/Full-Stack-Notes-Manager",
  },
];

export { services, technologies, experiences, projects };
