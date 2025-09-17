# Tài Liệu TypeScript Types

## 📋 Tổng Quan
File này chứa tất cả các định nghĩa TypeScript cho website Portfolio. Tất cả types đều được ghi chú rõ ràng với ví dụ minh họa.

## 🗂️ Các Loại Types

### 1. **CÁC LOẠI DỮ LIỆU DỰ ÁN**
- `Technology`: Công nghệ/kỹ năng cá nhân với tên và biểu tượng
- `Project`: Thông tin đầy đủ về dự án cho thẻ dự án

### 2. **CÁC LOẠI DỮ LIỆU KỸ NĂNG** 
- `Skill`: Kỹ năng cá nhân với tên và logo
- `SkillCategory`: Nhóm kỹ năng theo danh mục (Frontend, Backend, v.v.)

### 3. **CÁC LOẠI DỮ LIỆU KINH NGHIỆM**
- `Experience`: Mục kinh nghiệm làm việc cho timeline

### 4. **CÁC LOẠI DỮ LIỆU GIỚI THIỆU**
- `PersonalInfo`: Cấu trúc thông tin cá nhân
- `AboutData`: Dữ liệu đầy đủ trang giới thiệu

### 5. **CÁC LOẠI DỮ LIỆU LIÊN HỆ**
- `FormData`: Cấu trúc dữ liệu form liên hệ
- `FormStatus`: Trạng thái gửi form

### 6. **CÁC LOẠI DỮ LIỆU ANIMATION**
- `AnimationVariants`: Các biến thể animation của Framer Motion

## 🚀 Ví Dụ Sử Dụng

### Sử Dụng Types Dự Án
```typescript
import { Project, Technology } from '@/types';

const myProject: Project = {
  title: "Ứng Dụng Của Tôi",
  description: "Một ứng dụng tuyệt vời",
  technologies: [
    { name: "React", icon: "/icons/react.svg" }
  ],
  githubLink: "https://github.com",
  demoLink: "https://demo.com",
  image: "/projects/app.png"
};
```

### Sử Dụng Types Kỹ Năng
```typescript
import { SkillCategory, Skill } from '@/types';

const frontendSkills: SkillCategory = {
  title: "Frontend",
  skills: [
    { name: "React", logo: reactLogo }
  ]
};
```

### Sử Dụng Types Kinh Nghiệm
```typescript
import { Experience } from '@/types';

const myExperience: Experience = {
  id: 1,
  img: companyLogo,
  role: "Developer",
  company: "Tech Corp",
  date: "2024 - Hiện tại",
  desc: "Xây dựng các ứng dụng tuyệt vời",
  skills: ["React", "TypeScript"]
};
```

## ✅ Lợi Ích

1. **An Toàn Kiểu Dữ Liệu**: Ngăn ngừa lỗi runtime
2. **IntelliSense**: Gợi ý code tốt hơn
3. **Tài Liệu**: Code tự giải thích
4. **Refactoring**: Dễ dàng thay đổi code
5. **Làm Việc Nhóm**: Hợp đồng rõ ràng giữa các component

## 🔧 Bảo Trì

- Thêm types mới khi tạo tính năng mới
- Cập nhật types hiện có khi cấu trúc dữ liệu thay đổi
- Giữ comments luôn cập nhật
- Sử dụng tên mô tả để dễ đọc hơn
