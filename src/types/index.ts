
export interface Technology {
  name: string;    // Tên công nghệ sử dụng
  icon: string;    // Đường dẫn đến biểu tượng
}

export interface Project {
  title: string;           // Tiêu đề dự án
  description: string;     // Mô tả dự án
  technologies: Technology[];  // Danh sách công nghệ sử dụng
  githubLink: string;      // Link GitHub repository
  demoLink: string;        // Link demo trực tiếp
  image: string;           // Đường dẫn ảnh preview dự án
}

export interface Skill {
  name: string;    // Tên kỹ năng  
  logo: string;    // Đường dẫn logo (PNG)
}

export interface SkillCategory {
  title: string;   // Tiêu đề danh mục (ví dụ: "Frontend", "Backend")
  skills: Skill[]; // Danh sách kỹ năng trong danh mục này
}

export interface ExperienceType {
  id: number;              // ID duy nhất
  img: string;             // Đường dẫn logo công ty (PNG)
  role: string;            // Chức vụ/vai trò
  company: string;         // Tên công ty
  date: string;            // Thời gian làm việc (ví dụ: "Tháng 4/2024 - Hiện tại")
  desc: string;            // Mô tả công việc
  skills: string[];        // Danh sách kỹ năng sử dụng trong vai trò này
}


export interface PersonalInfo {
  name: string;        // Họ và tên
  role: string;        // Vai trò hiện tại
  location: string;    // Vị trí hiện tại
  email: string;       // Email liên hệ
}

export interface AboutData {
  title: string;           // Tiêu đề trang
  description: string;     // Mô tả chính
  image?: string;          // Ảnh cá nhân (optional)
  personalInfo: PersonalInfo;  // Thông tin cá nhân
  bio: string[];           // Các đoạn tiểu sử
  achievements: string[];  // Danh sách thành tựu
}




