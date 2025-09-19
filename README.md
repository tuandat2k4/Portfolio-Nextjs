# 🌟 Portfolio Website - Tuấn Đạt

Portfolio cá nhân được xây dựng bằng **Next.js 15**, **TypeScript**, **Tailwind CSS** và **Framer Motion**. Dự án showcase các kỹ năng lập trình web và dự án học tập của tôi.

## ✨ Tính năng nổi bật

- 🎨 **UI/UX hiện đại**: Responsive design, dark/light mode
- 🚀 **Hiệu ứng mượt mà**: Framer Motion animations (fade, slide, stagger, hover)
- 🌍 **Đa ngôn ngữ**: Hỗ trợ tiếng Việt và tiếng Anh
- 📱 **Mobile-first**: Tối ưu cho mọi thiết bị
- 📧 **Form liên hệ**: Gửi email trực tiếp qua API
- ⚡ **Performance cao**: Next.js 15 với App Router

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Heroicons, React Icons
- **Email**: Nodemailer (Gmail)
- **Deployment**: Vercel

## 🚀 Cài đặt và chạy

### 1. Clone repository
```bash
git clone https://github.com/tuandat2k4/portfolio-website.git
cd portfolio-website
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file `.env.local` trong thư mục gốc:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=recipient@gmail.com
```

### 4. Chạy development server
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

### 5. Build cho production
```bash
npm run build
npm run start
```

## 📁 Cấu trúc dự án

```
portfolio-website/
├── public/
│   ├── icons/           # SVG icons
│   ├── tech_logo/       # Technology logos
│   ├── projects/        # Project screenshots
│   └── profile.avif     # Profile image
├── src/
│   ├── app/
│   │   ├── about/       # About page
│   │   ├── skills/      # Skills page
│   │   ├── experience/  # Experience page
│   │   ├── projects/    # Projects page
│   │   ├── contact/     # Contact page
│   │   ├── api/contact/ # Email API
│   │   ├── components/  # Reusable components
│   │   └── context/     # Theme context
│   ├── contents/        # Data files
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
└── README.md
```

## 🎯 Tùy chỉnh cho riêng bạn

### Thông tin cá nhân
Chỉnh sửa file `src/contents/aboutData.ts`:
```typescript
export const aboutDataByLocale = {
  vi: {
    personalInfo: {
      name: "Tên của bạn",
      role: "Sinh viên CNTT", // hoặc "Developer"
      location: "Thành phố của bạn",
      email: "email@example.com"
    }
  }
}
```

### Dự án
Cập nhật file `src/contents/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    title: "Tên dự án",
    description: "Mô tả dự án",
    technologies: [
      { name: "React", icon: "/tech_logo/react.png" }
    ],
    githubLink: "https://github.com/username/repo",
    demoLink: "https://demo.vercel.app",
    image: "/projects/project-image.jpg"
  }
]
```

### Kỹ năng
Chỉnh sửa file `src/contents/skillsInfo.ts` để thêm/bớt kỹ năng của bạn.

## 📧 API Contact Form

Form liên hệ sử dụng API endpoint `POST /api/contact`:

**Request Body:**
```json
{
  "name": "Tên người gửi",
  "email": "email@example.com", 
  "message": "Nội dung tin nhắn"
}
```

**Validation:**
- Tên: 2-100 ký tự
- Email: định dạng hợp lệ
- Tin nhắn: 10-2000 ký tự

## 🎨 Customization

### Màu sắc
Chỉnh sửa file `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#007AFF', // Màu chính
      secondary: '#6B7280' // Màu phụ
    }
  }
}
```

### Font chữ
Thay đổi font trong `src/app/layout.tsx`:
```typescript
const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})
```

## 🚀 Deployment

### Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Kết nối với Vercel
3. Thêm biến môi trường trong Vercel dashboard
4. Deploy!

### Netlify
1. Build project: `npm run build`
2. Upload thư mục `out/` lên Netlify
3. Cấu hình biến môi trường

## 📱 Responsive Design

Website được tối ưu cho:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+) 
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Build production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📚 Học được gì từ dự án này?

- ✅ Next.js 15 với App Router
- ✅ TypeScript trong React
- ✅ Tailwind CSS styling
- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ Dark/Light theme
- ✅ Internationalization (i18n)
- ✅ API routes
- ✅ Email integration
- ✅ Performance optimization

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy:
1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push và tạo Pull Request

## 📄 License

Dự án này được sử dụng cho mục đích học tập và cá nhân. Bạn có thể tự do sử dụng và chỉnh sửa theo nhu cầu.

## 📞 Liên hệ

- 📧 Email: [tdat96386@gmail.com](mailto:tdat96386@gmail.com)
- 💼 LinkedIn: [Tuấn Đạt](https://www.linkedin.com/in/dat-phan-7186732b6/)
- 🐙 GitHub: [@tuandat2k4](https://github.com/tuandat2k4)
- 🐦 Twitter: [@DatPhan0726](https://x.com/DatPhan0726)

---

⭐ **Nếu dự án này hữu ích, hãy cho một star nhé!** ⭐