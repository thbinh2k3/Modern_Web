<div align="center">
<img width="1200" height="475" alt="Modern Fashion Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

🛍️ Modern Fashion E-commerce
Modern Fashion là một ứng dụng mua sắm thời trang hiện đại được xây dựng trên nền tảng React và Vite, tích hợp trí tuệ nhân tạo để tối ưu trải nghiệm người dùng.

Demo Trực Tuyến | Quản lý trên Vercel

</div>

✨ Tính năng nổi bật
Giao diện hiện đại: Thiết kế responsive, mượt mà với Framer Motion.

Quản lý sản phẩm: Hiển thị danh sách sản phẩm, chi tiết sản phẩm và phân loại.

Giỏ hàng trực tuyến: Thêm/xóa và cập nhật giỏ hàng theo thời gian thực.

Tích hợp AI: Hỗ trợ tìm kiếm và tư vấn thời trang thông minh qua Gemini API.

🚀 Hướng dẫn cài đặt local
Yêu cầu: Node.js (Phiên bản khuyến nghị: v22.12.0 hoặc mới hơn).

Cài đặt thư viện:

PowerShell
npm install
Cấu hình biến môi trường:
Tạo file .env.local tại thư mục gốc và thêm mã API của bạn:

Đoạn mã
GEMINI_API_KEY=your_api_key_here
Khởi chạy dự án:

PowerShell
npm run dev
Sau đó truy cập: http://localhost:5173

🛠️ Công nghệ sử dụng
Frontend: React.js, TypeScript, Tailwind CSS.

Thư viện UI: Lucide React (Icons), Framer Motion (Animation).

Routing: React Router Dom.

Deployment: Vercel.

📦 Cấu trúc thư mục chính
/src/components: Các thành phần giao diện dùng chung (Navbar, Footer, UI).

/src/pages: Các trang chính như Home, Shop, Cart, ProductDetail.

/src/context: Quản lý trạng thái ứng dụng (CartContext).

/src/data: Dữ liệu sản phẩm mẫu.