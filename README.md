# ClickUp Clone - Task Manager (Quản lý công việc)

Dự án giao diện quản lý công việc dựa trên ClickUp, sử dụng HTML, Tailwind CSS và JavaScript.

## Giới thiệu

Dự án này là một ứng dụng quản lý công việc (Task Manager) được phát triển dựa trên giao diện và cách hoạt động của ClickUp. Mọi người có thể tham khảo ClickUp để hiểu rõ hơn về cách ứng dụng hoạt động.

## Công nghệ sử dụng

- **HTML5**
- **Tailwind CSS**
- **Vanilla JavaScript (ES6 Modules)**
- **Vite** (Build tool)

**Lưu ý về code:**
- Chỉ làm giao diện và tương tác chức năng, **không cần kết nối API**
- Dữ liệu có thể làm cứng ở Frontend
- Code theo format hiện có trong dự án (HTML, Tailwind CSS, JavaScript)

## Cấu trúc dự án

```
├── index.html          # File HTML chính
├── src/
│   ├── style.css       # File CSS với Tailwind directives
│   ├── app.js          # File JavaScript chính để điều hướng
│   └── components/     # Folder chứa 6 components
│       ├── dashboard/  # Component Dashboard
│       ├── tasklist/   # Component Task List
│       ├── board/      # Component Board View
│       ├── calendar/   # Component Calendar
│       ├── settings/   # Component Settings
│       └── profile/    # Component Profile
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

## Yêu cầu Git Workflow

### Mô hình nhánh

Dự án sử dụng mô hình Git workflow với các nhánh:

- **`main`** - Nhánh chính, code ổn định
- **`develop`** - Nhánh phát triển, tích hợp code từ các feature
- **ví dụ `dev_thanhdat*`** - Nhánh tính năng (mỗi thành viên 1 nhánh)
- **`hotfix/*`** - Nhánh sửa lỗi khẩn cấp (nếu phát sinh lỗi, khuyến khích)

### Quy tắc làm việc với Branch

1. **KHÔNG commit / push trực tiếp lên `main`**
2. **KHÔNG merge `dev_*` thẳng vào `main`**
3. **Luồng merge đúng:**
   - `dev_*` → **Pull/Merge Request** → `develop`
   - `develop` → **Pull/Merge Request** → `main`

### Yêu cầu cho mỗi thành viên

- Làm việc trên **branch riêng** (`dev_*`)
- Có **ít nhất 2 commit hợp lệ**
- **Mỗi thành viên chỉnh sửa ít nhất 1 file khác nhau**
- **Chỉ code trong folder component đã chọn**, không chỉnh sửa các file khác

### Phân vai trong nhóm

Nhóm tự phân vai (có thể luân phiên):
- **Team Lead** - Quản lý dự án, merge code
- **Developer** - Phát triển tính năng
- **Reviewer** - Review code trước khi merge

**Lưu ý:** Không đánh giá độ phức tạp nội dung, **chỉ đánh giá workflow Git & teamwork**

## Luồng làm việc với Git

### Bước 1: Clone và setup dự án

Sau khi clone code về, thực hiện các lệnh sau **theo thứ tự**:

```bash
# 1. Clone repository (nếu chưa có)
git clone <repository-url>
cd Nhom14_BT_TH

# 2. Cài đặt dependencies
npm i

# 3. Pull code mới nhất
git pull

# 4. Checkout vào nhánh tương ứng với component bạn sẽ làm
git checkout dev_"tên tương ứng"
```

**Ví dụ:** Nếu bạn làm component Dashboard:
```bash
npm i
git pull
git checkout dev_dashboard
```

### Bước 2: Chọn component để làm việc

- Đã có sẵn **6 nhánh** tương ứng với 6 components:
  - `dev_dashboard`
  - `dev_tasklist`
  - `dev_board`
  - `dev_calendar`
  - `dev_settings`
  - `dev_profile`

- Mỗi người chọn **1 folder trong thư mục `components/`** để code
- **Chỉ code trong folder đó**, không chỉnh sửa các file khác
- **Nhắn vào nhóm** sau khi chọn để tránh chọn trùng với người khác

### Bước 3: Commit và Push code

Sau khi hoàn thành công việc, thực hiện các lệnh sau:

```bash
# 1. Thêm tất cả các file đã thay đổi
git add .

# 2. Commit với message mô tả nội dung đã sửa
git commit -m "nội dung đã sửa"

# 3. Push lên đúng nhánh 
git push origin dev_"tên nhánh"
```

**Ví dụ:**
```bash
git add .
git commit -m "Thêm giao diện dashboard với thống kê công việc"
git push origin dev_dashboard
```

**Lưu ý:** 
- Commit message phải mô tả rõ nội dung đã sửa
- Push đúng nhánh của bạn, không push nhầm nhánh
- Mỗi thành viên cần có **ít nhất 2 commit hợp lệ**

### Bước 4: Tạo Pull/Merge Request và thông báo

Sau khi push code lên nhánh `dev_*`:

1. Vào GitHub/GitLab repository
2. Tạo **Pull Request** (GitHub) hoặc **Merge Request** (GitLab)
3. Chọn merge từ `dev_ten` → `develop`
4. **Nhắn vào nhóm** để thông báo và yêu cầu review
5. Sau khi được approve, Team Lead sẽ merge vào `develop`
6. Team Lead sẽ merge `develop` → `main` khi cần

**Quan trọng:** Sau khi push code, **nhắn vào nhóm** để thông báo và yêu cầu merge code.

## Các thao tác Git bắt buộc sử dụng

Dự án yêu cầu sử dụng các thao tác Git sau:

-  `git clone` - Clone repository về máy
-  `git checkout -b` hoặc `git checkout` - Chuyển/tạo nhánh
-  `git add` - Thêm file vào staging area
-  `git commit` - Commit code với message
-  `git push` - Push code lên remote repository
-  `git pull` - Pull code mới nhất từ remote
-  **Pull Request / Merge Request** - Tạo PR/MR để merge code

## Cài đặt và chạy dự án

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

### Build cho production

```bash
npm run build
```
