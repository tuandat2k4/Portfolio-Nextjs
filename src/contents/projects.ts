import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: [
      { name: "Next.js", icon: "/icons/next.svg" },
      { name: "TypeScript", icon: "/icons/ts.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/e-commerce-website.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Socket.io", icon: "/icons/socket.svg" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/task-manager.webp",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: [
      { name: "Next.js", icon: "/icons/next.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "Framer Motion", icon: "/icons/framermotion.svg" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/portfolio-website.jpg",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform with user authentication and markdown support.",
    technologies: [
      { name: "GraphQL", icon: "/icons/graphql.svg" },
      
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/blog-website.jpeg",
  },
  {
    title: "Weather App",
    description: "A weather application that provides real-time weather updates.",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },

    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/weather-app.png",
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using WebSocket technology.",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Socket.io", icon: "/icons/socket.svg" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/chat-app.png",
  },
  {
    title: "Recipe Finder",
    description: "A recipe search application using the Edamam API.",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },

    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/recipe-finder.png",
  },
  {
    title: "Expense Tracker",
    description: "A personal finance tracker to manage expenses and income.",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/expense-tracker.webp",
  },
];
