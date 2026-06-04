# Frontend Prototype

Đây là phần frontend của prototype quản lý thu chi.

## Yêu cầu

- Node.js 18+ hoặc Node.js 20
- npm

## Cài đặt

```bash
cd codebase/frontend
npm install
```

## Chạy môi trường dev

```bash
npm run dev
```

Mở trình duyệt tại:

```txt
http://localhost:5173
```

## Build production

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Biến môi trường

File mẫu:

```txt
codebase/frontend/.env.example
```

Nội dung hiện tại:

```txt
VITE_API_BASE_URL=http://localhost:8000/api
```

Nếu cần gọi backend, sao chép file mẫu thành `.env` và điều chỉnh `VITE_API_BASE_URL`.

## Công nghệ đã dùng

- React 19
- Vite
- TypeScript
- Ant Design
- TanStack Query
- React Router
- React Hook Form + Zod
- Recharts
- Axios

## Cấu trúc chính

- `src/` - source code frontend
- `src/pages/dashboard/DashboardPage.tsx` - giao diện dashboard chính
- `src/shared/api/httpClient.ts` - cấu hình axios
- `src/shared/config/env.ts` - cấu hình biến môi trường

## Giao diện hiện tại

Trang chủ chứa:

- Lời chào người dùng và nút đồng bộ/Thông báo
- Tổng số dư với chức năng ẩn/hiện tiền
- Phím tắt nhanh vào các chức năng chính
- Báo cáo Thu - Chi, Biểu đồ cột và Biểu đồ tròn cơ cấu chi tiêu
- Biểu đồ chi tiêu dài hạn theo tháng
- Thẻ gợi ý kiến thức tài chính
- Widget Sổ tiết kiệm, Hạn mức chi, Vay & Nợ, Chi phí du lịch, Tỷ giá & Vàng
- Thanh điều hướng dưới màn hình gồm Tổng quan, Tài khoản, Ghi chép, Báo cáo, Khác

## Ghi chú

- Nếu backend chưa có, frontend vẫn chạy và dùng `VITE_API_BASE_URL` mặc định `http://localhost:8000/api`.
- Không commit `.env` nếu chứa giá trị nhạy cảm.
