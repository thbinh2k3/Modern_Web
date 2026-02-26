<div align="center">


  # 🛍️ Modern Fashion E-commerce
  
  **Modern Fashion** là một ứng dụng mua sắm thời trang hiện đại được xây dựng trên nền tảng **React + Vite**, tích hợp trí tuệ nhân tạo để tối ưu trải nghiệm người dùng.

  <div>
    <a href="https://modern-clothes.vercel.app/">
      <img src="https://img.shields.io/badge/Demo_Trực_Tuyến-Mở_Ngay-0078D4?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/thbinh2k3/Modern_Web">
      <img src="https://img.shields.io/badge/Mã_Nguồn-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
    </a>
    <img src="https://img.shields.io/badge/Node-v22.12.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node Version" />
  </div>

  <br />

  `🔗 URL:` [https://modern-clothes.vercel.app](https://modern-clothes.vercel.app)
</div>

---

## 📱 Giao diện ứng dụng
<div align="center">
  <img src="https://github.com/user-attachments/assets/a063bf93-9a18-486d-ab0f-75d558e65e0a" width="100%" alt="Web Preview" style="border-radius: 10px; border: 1px solid #ddd;" />
</div>

## ✨ Tính năng nổi bật
* 🎨 **Giao diện hiện đại:** Thiết kế Responsive, hiệu ứng mượt mà với **Framer Motion**.
* 🛒 **Giỏ hàng trực tuyến:** Thêm/xóa và cập nhật giỏ hàng theo thời gian thực (Context API).
* 🔍 **Quản lý sản phẩm:** Hệ thống lọc, tìm kiếm và xem chi tiết sản phẩm thông minh.
* 🤖 **Tích hợp AI:** Hỗ trợ tìm kiếm và tư vấn thời trang qua **Gemini API**.

## 🛠️ Công nghệ sử dụng
| Frontend | UI Library | Thư viện khác |
| :--- | :--- | :--- |
| **React.js** | **Tailwind CSS** | React Router Dom |
| **TypeScript** | **Lucide React** | Framer Motion |
| **Vite** | **Vercel** | Gemini API |

## 🚀 Hướng dẫn cài đặt local
1.  **Cài đặt thư viện:**
    ```powershell
    npm install
    ```
2.  **Chạy dự án:**
    ```powershell
    npm run dev
    ```
    Truy cập tại: `http://localhost:5173`

## 📦 Cấu trúc thư mục
```text
/src
 ├── components/  # Navbar, Footer, UI components
 ├── pages/       # Home, Shop, Cart, ProductDetail
 ├── context/     # CartContext (Quản lý giỏ hàng)
 └── data/        # Dữ liệu sản phẩm mẫu
