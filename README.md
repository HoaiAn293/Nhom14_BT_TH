# ClickUp Clone - Quản lý dự án

Dự án giao diện quản lý dự án dựa trên ClickUp, sử dụng HTML và Tailwind CSS.

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Build cho production:
```bash
npm run build
```

## Cấu trúc dự án

```
├── index.html          # File HTML chính
├── src/
│   ├── style.css       # File CSS với Tailwind directives
│   ├── app.js          # File JavaScript chính để điều hướng
│   └── components/     # Folder chứa 6 components
│       ├── dashboard/
│       │   └── dashboard.js
│       ├── tasklist/
│       │   └── tasklist.js
│       ├── board/
│       │   └── board.js
│       ├── calendar/
│       │   └── calendar.js
│       ├── settings/
│       │   └── settings.js
│       └── profile/
│           └── profile.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Components

1. **Dashboard** - Trang tổng quan với thống kê và công việc gần đây
2. **Task List** - Danh sách công việc với filter và search
3. **Board View** - Bảng Kanban với các cột trạng thái
4. **Calendar** - Lịch xem và quản lý sự kiện
5. **Settings** - Cài đặt tài khoản, thông báo, giao diện
6. **Profile** - Hồ sơ người dùng và hoạt động

## Công nghệ sử dụng

- HTML5
- Tailwind CSS 3.3.6
- Vanilla JavaScript (ES6 Modules)
- Vite (Build tool)

## Tính năng

- ✅ Giao diện responsive
- ✅ 6 components chính
- ✅ Điều hướng giữa các components
- ✅ Styling với Tailwind CSS
- ✅ UI/UX hiện đại
