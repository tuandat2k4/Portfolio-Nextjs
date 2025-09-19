
import { AboutData } from '../types';

export const aboutDataByLocale: Record<'vi' | 'en', AboutData> = {
  vi: {
    title: "Giới thiệu",
    description: "Tôi là một lập trình viên full-stack đam mê xây dựng các ứng dụng web đẹp và hữu ích.",
    image: "/profile.avif",
    personalInfo: {
      name: "Tuấn Đạt",
      role: "Fullstack Developer Intern",
      location: "Ho Chi Minh City, Vietnam",
      email: "tdat96386@gmail.com"
    },
    bio: [
      "Tôi là cử nhân mới tốt nghiệp, có niềm đam mê mạnh mẽ với phát triển web. Tôi thích tạo ra những ứng dụng đẹp, responsive, thân thiện với người dùng và giải quyết vấn đề thực tế.",
      "Hành trình lập trình của tôi bắt đầu từ thời đại học, nơi tôi khám phá ra niềm yêu thích với code và giải quyết vấn đề. Tôi luôn không ngừng học hỏi và nâng cao kỹ năng của mình.",
      "Tôi yêu thích làm việc với các công nghệ hiện đại như React, Next.js, Node.js và nhiều hệ quản trị cơ sở dữ liệu. Tôi luôn sẵn sàng học công nghệ mới và cập nhật xu hướng mới nhất trong phát triển web.",
      "Khi không viết code, bạn có thể thấy tôi khám phá công nghệ mới, đóng góp cho các dự án mã nguồn mở hoặc chia sẻ kiến thức cùng cộng đồng."
    ],
    achievements: [
      "Tốt nghiệp loại giỏi ngành CNTT",
      "Hoàn thành nhiều dự án full-stack với công nghệ hiện đại",
      "Tích cực đóng góp vào các dự án mã nguồn mở",
      "Kỹ năng phân tích và giải quyết vấn đề tốt",
      "Khả năng làm việc nhóm và giao tiếp hiệu quả",
      "Đam mê học hỏi và phát triển bản thân liên tục"
    ]
  },
  en: {
    title: "About",
    description: "I am a full‑stack developer passionate about building beautiful and useful web apps.",
    image: "/profile.avif",
    personalInfo: {
      name: "Tuan Dat",
      role: "Fullstack Developer Intern",
      location: "Ho Chi Minh City, Vietnam",
      email: "tdat96386@gmail.com"
    },
    bio: [
      "I am a recent graduate with a strong passion for web development. I love creating beautiful, responsive, user‑friendly applications that solve real problems.",
      "My coding journey started in university, where I discovered my love for code and problem solving. I continuously learn and improve my skills.",
      "I enjoy working with modern technologies like React, Next.js, Node.js and various databases. I am always open to learning new tech and keeping up with trends.",
      "When not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the community."
    ],
    achievements: [
      "Graduated with good standing in Computer Science",
      "Completed multiple full‑stack projects with modern tech",
      "Active contributor to open‑source projects",
      "Strong analytical and problem‑solving skills",
      "Effective teamwork and communication",
      "Passionate about continuous learning and growth"
    ]
  }
};
