
/**
 * Công nghệ/Kỹ năng với tên và biểu tượng
 * Dùng trong phần dự án và kỹ năng
 */
export interface Technology {
  name: string;    // Tên công nghệ (ví dụ: "React", "TypeScript")
  icon: string;    // Đường dẫn đến biểu tượng
}

/**
 * Thông tin đầy đủ về dự án
 * Dùng trong trang dự án và thẻ dự án
 */
export interface Project {
  title: string;           // Tiêu đề dự án
  description: string;     // Mô tả dự án
  technologies: Technology[];  // Danh sách công nghệ sử dụng
  githubLink: string;      // Link GitHub repository
  demoLink: string;        // Link demo trực tiếp
  image: string;           // Đường dẫn ảnh preview dự án
}


/**
 * Kỹ năng cá nhân
 * Dùng trong phần kỹ năng
 */
export interface Skill {
  name: string;    // Tên kỹ năng (ví dụ: "HTML", "JavaScript")
  logo: string;    // Đường dẫn logo (PNG)
}

/**
 * Danh mục kỹ năng chứa nhiều kỹ năng
 * Dùng để nhóm kỹ năng theo loại (Frontend, Backend, v.v.)
 */
export interface SkillCategory {
  title: string;   // Tiêu đề danh mục (ví dụ: "Frontend", "Backend")
  skills: Skill[]; // Danh sách kỹ năng trong danh mục này
}

// ========================================
// CÁC LOẠI DỮ LIỆU KINH NGHIỆM
// ========================================

/**
 * Mục kinh nghiệm làm việc
 * Dùng trong trang kinh nghiệm và timeline
 */
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
  role: string;        // Vai trò/chức vụ hiện tại
  location: string;    // Vị trí hiện tại
  email: string;       // Email liên hệ
}

/**
 * Cấu trúc dữ liệu trang giới thiệu
 * Dùng trong trang about
 */
export interface AboutData {
  title: string;           // Tiêu đề trang
  description: string;     // Mô tả chính
  image?: string;          // Ảnh cá nhân (tùy chọn)
  personalInfo: PersonalInfo;  // Thông tin cá nhân
  bio: string[];           // Các đoạn tiểu sử
  achievements: string[];  // Danh sách thành tựu
}

// ========================================
// CÁC LOẠI DỮ LIỆU LIÊN HỆ
// ========================================

/**
 * Dữ liệu form liên hệ
 * Dùng trong form liên hệ
 */
export interface FormData {
  name: string;      // Tên người dùng
  email: string;     // Email người dùng
  message: string;   // Nội dung tin nhắn
}

/**
 * Trạng thái gửi form
 * Dùng để quản lý trạng thái form
 */
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';


export interface AnimationVariants {
  hidden: { opacity: number; y?: number; x?: number };
  visible: { opacity: number; y?: number; x?: number };
  transition?: { duration: number; delay?: number };
}

