import { Project } from "../types";

// Danh sách các dự án theo ngôn ngữ
export const projectsByLocale: Record<'vi' | 'en', Project[]> = {
  vi: [
  {
    title: "Nền tảng E-commerce",
    description: "Nền tảng thương mại điện tử full-stack xây dựng bằng Next.js, TypeScript và Tailwind CSS.",
    technologies: [
      { name: "Next.js", icon: "/icons/next.svg" },
      { name: "TypeScript", icon: "/tech_logo/typescript.png" },
      { name: "Tailwind CSS", icon: "/tech_logo/tailwindcss.png" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/e-commerce-website.png",
  },
  {
    title: "Ứng dụng Quản lý Công việc",
    description: "Ứng dụng quản lý công việc hỗ trợ cộng tác với cập nhật thời gian thực.",
    technologies: [
      { name: "React", icon: "/tech_logo/react.png" },
      { name: "Node.js", icon: "/tech_logo/nodejs.png" },
      { name: "MongoDB", icon: "/tech_logo/mongodb.png" },
      { name: "Socket.io", icon: "/icons/socket.svg" }, // Chỉ có SVG
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/task-manager.webp",
  },
  {
    title: "Website Portfolio",
    description: "Website cá nhân giới thiệu các dự án và kỹ năng của tôi.",
    technologies: [
      { name: "Next.js", icon: "/icons/next.svg" },
      { name: "Tailwind CSS", icon: "/tech_logo/tailwindcss.png" },
      { name: "Framer Motion", icon: "/icons/framermotion.svg" }, // Chỉ có SVG
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/portfolio-website.jpg",
  },
  {
    title: "Nền tảng Blog",
    description: "Nền tảng viết blog với xác thực người dùng và hỗ trợ markdown.",
    technologies: [
      { name: "GraphQL", icon: "/icons/graphql.svg" }, // Chỉ có SVG
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/blog-website.jpeg",
  },
  {
    title: "Ứng dụng Thời tiết",
    description: "Ứng dụng thời tiết cung cấp cập nhật theo thời gian thực.",
    technologies: [
      { name: "React", icon: "/tech_logo/react.png" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/weather-app.png",
  },
  {
    title: "Ứng dụng Trò chuyện",
    description: "Ứng dụng chat thời gian thực sử dụng công nghệ WebSocket.",
    technologies: [
      { name: "React", icon: "/tech_logo/react.png" },
      { name: "Node.js", icon: "/tech_logo/nodejs.png" },
      { name: "Socket.io", icon: "/icons/socket.svg" }, // Chỉ có SVG
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/chat-app.png",
  },
  {
    title: "Tìm công thức nấu ăn",
    description: "Ứng dụng tìm kiếm công thức nấu ăn sử dụng API của Edamam.",
    technologies: [
      { name: "React", icon: "/tech_logo/react.png" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/recipe-finder.png",
  },
  {
    title: "Quản lý Chi tiêu",
    description: "Ứng dụng theo dõi tài chính cá nhân để quản lý thu chi.",
    technologies: [
      { name: "React", icon: "/tech_logo/react.png" },
      { name: "Firebase", icon: "/tech_logo/firebase.png" },
    ],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/expense-tracker.webp",
  },
  ],
  en: [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform built with Next.js, TypeScript and Tailwind CSS.",
      technologies: [
        { name: "Next.js", icon: "/icons/next.svg" },
        { name: "TypeScript", icon: "/tech_logo/typescript.png" },
        { name: "Tailwind CSS", icon: "/tech_logo/tailwindcss.png" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/e-commerce-website.png",
    },
    {
      title: "Task Management App",
      description: "Task management application with real-time collaboration support.",
      technologies: [
        { name: "React", icon: "/tech_logo/react.png" },
        { name: "Node.js", icon: "/tech_logo/nodejs.png" },
        { name: "MongoDB", icon: "/tech_logo/mongodb.png" },
        { name: "Socket.io", icon: "/icons/socket.svg" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/task-manager.webp",
    },
    {
      title: "Portfolio Website",
      description: "Personal website showcasing my projects and skills.",
      technologies: [
        { name: "Next.js", icon: "/icons/next.svg" },
        { name: "Tailwind CSS", icon: "/tech_logo/tailwindcss.png" },
        { name: "Framer Motion", icon: "/icons/framermotion.svg" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/portfolio-website.jpg",
    },
    {
      title: "Blog Platform",
      description: "Blog writing platform with user authentication and markdown support.",
      technologies: [
        { name: "GraphQL", icon: "/icons/graphql.svg" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/blog-website.jpeg",
    },
    {
      title: "Weather App",
      description: "Weather application providing real-time updates.",
      technologies: [
        { name: "React", icon: "/tech_logo/react.png" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/weather-app.png",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application using WebSocket technology.",
      technologies: [
        { name: "React", icon: "/tech_logo/react.png" },
        { name: "Node.js", icon: "/tech_logo/nodejs.png" },
        { name: "Socket.io", icon: "/icons/socket.svg" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/chat-app.png",
    },
    {
      title: "Recipe Finder",
      description: "Recipe search application using Edamam API.",
      technologies: [
        { name: "React", icon: "/tech_logo/react.png" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/recipe-finder.png",
    },
    {
      title: "Expense Tracker",
      description: "Personal finance tracking application for managing income and expenses.",
      technologies: [
        { name: "React", icon: "/tech_logo/react.png" },
        { name: "Firebase", icon: "/tech_logo/firebase.png" },
      ],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/projects/expense-tracker.webp",
    },
  ]
};
