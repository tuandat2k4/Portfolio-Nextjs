export interface Technology {
  name: string;
  icon: string;
}
export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  githubLink: string;
  demoLink: string;
  image: string;
}
