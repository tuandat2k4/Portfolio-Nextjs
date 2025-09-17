
// Import types
import { SkillCategory, ExperienceType } from '../types';

export const SkillsInfo: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: '/tech_logo/html.png' },
      { name: 'CSS', logo: '/tech_logo/css.png' },
      { name: 'SASS', logo: '/tech_logo/sass.png' },
      { name: 'JavaScript', logo: '/tech_logo/javascript.png' },
      { name: 'React JS', logo: '/tech_logo/reactjs.png' },
      { name: 'Angular', logo: '/tech_logo/angular.png' },
      { name: 'Redux', logo: '/tech_logo/redux.png' },
      { name: 'Next JS', logo: '/icons/next.svg' },
      { name: 'Tailwind CSS', logo: '/tech_logo/tailwindcss.png' },
      { name: 'GSAP', logo: '/tech_logo/gsap.png' },
      { name: 'Material UI', logo: '/tech_logo/materialui.png' },
      { name: 'Bootstrap', logo: '/tech_logo/bootstrap.png' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: '/tech_logo/springboot.png' },
      { name: 'Node JS', logo: '/tech_logo/nodejs.png' },
      { name: 'Express JS', logo: '/tech_logo/express.png' },
      { name: 'MySQL', logo: '/tech_logo/mysql.png' },
      { name: 'MongoDB', logo: '/tech_logo/mongodb.png' },
      { name: 'Firebase', logo: '/tech_logo/firebase.png' },
      { name: 'PostgreSQL', logo: '/tech_logo/postgre.png' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: '/tech_logo/c.png' },
      { name: 'C++', logo: '/tech_logo/cpp.png' },
      { name: 'Java', logo: '/tech_logo/java.png' },
      { name: 'Python', logo: '/tech_logo/python.png' },
      { name: 'C-Sharp', logo: '/tech_logo/csharp.png' },
      { name: 'JavaScript', logo: '/tech_logo/javascript.png' },
      { name: 'TypeScript', logo: '/tech_logo/typescript.png' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: '/tech_logo/git.png' },
      { name: 'GitHub', logo: '/tech_logo/github.png' },
      { name: 'VS Code', logo: '/tech_logo/vscode.png' },
      { name: 'Postman', logo: '/tech_logo/postman.png' },
      { name: 'Compass', logo: '/tech_logo/mc.png' },
      { name: 'Vercel', logo: '/tech_logo/vercel.png' },
      { name: 'Netlify', logo: '/tech_logo/netlify.png' },
      { name: 'Figma', logo: '/tech_logo/figma.png' },
    ],
  },
];

// Dữ liệu kinh nghiệm làm việc
export const experiences: ExperienceType[] = [
    {
      id: 0,
      img: '/company_logo/webverse_logo.png',
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: '/company_logo/agc_logo.png',
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: '/company_logo/newtonschool_logo.png',
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
];
  