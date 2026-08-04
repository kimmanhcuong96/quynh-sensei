# Portfolio Quỳnh Sensei

Website portfolio một trang, mobile-first dành cho giáo viên tiếng Nhật Kiều Như Quỳnh. Dự án được xuất hoàn toàn dưới dạng static site để đặt ở bio TikTok và triển khai trực tiếp lên Cloudflare Pages.

## Công nghệ

- Astro, TypeScript strict
- Tailwind CSS
- Lucide Icons
- JavaScript thuần cho tìm kiếm, bộ lọc, modal, FAQ và app-link fallback

## Cài đặt và chạy local

Yêu cầu Node.js phiên bản LTS hiện hành.

```bash
npm install
npm run dev
```

Mở địa chỉ Astro hiển thị trong terminal. Kiểm tra bản production bằng:

```bash
npm run build
npm run preview
```

Kết quả build nằm trong thư mục `dist`.

## Cập nhật nội dung

- Ảnh cá nhân: thay `public/images/profile.webp`, giữ tỉ lệ 4:5 và nên dùng WebP. `profile-placeholder.webp` là bản dự phòng.
- Thông tin cá nhân, tiểu sử, điểm nổi bật và mọi link mạng xã hội: sửa `src/data/profile.ts`.
- Link Zalo: sửa duy nhất nhóm `profile.social.zalo` trong `src/data/profile.ts`.
- Link Facebook: sửa duy nhất nhóm `profile.social.facebook` trong `src/data/profile.ts`.
- Thông tin website, canonical URL và các card thống kê/quyền lợi: sửa `src/data/site.ts`.
- Tài liệu: thêm hoặc sửa một object trong `src/data/materials.ts`, rồi đặt ảnh bìa ở `public/images/materials/`.
- Phản hồi học viên: thêm phản hồi thật vào `src/data/testimonials.ts` và đặt `published: true`. Chỉ đăng khi đã được học viên cho phép.
- FAQ: sửa `src/data/faqs.ts`.
- Ảnh Open Graph: thay `public/og/og-default.webp` (khuyến nghị 1200 × 630 px).

Không thêm URL tải, mua hoặc xem thử giả. Khi URL còn là placeholder, website sẽ hiển thị thông báo “Liên kết đang được cập nhật” và không điều hướng.

## Link Zalo và Facebook

Trên điện thoại, nút thử app-link đã cấu hình rồi chuyển sang web sau khoảng 1,2 giây nếu trang vẫn còn hiển thị. Trên desktop, nút mở web URL trong tab mới với `noopener,noreferrer`. Việc mở ứng dụng không thể được bảo đảm trên mọi trình duyệt, đặc biệt là trình duyệt tích hợp của TikTok, Facebook và Instagram; phiên bản web luôn là đường dự phòng.

| Thiết bị | Môi trường | Kết quả cần kiểm tra |
| --- | --- | --- |
| Android | Chrome | Mở app hoặc fallback web |
| Android | TikTok browser | Có thể mở app hoặc mở web |
| Android | Facebook browser | Có thể mở app hoặc mở web |
| iPhone | Safari | Mở app hoặc fallback web |
| iPhone | TikTok browser | Có thể mở app hoặc mở web |
| iPhone | Facebook browser | Có thể mở app hoặc mở web |
| Desktop | Chrome/Edge | Mở web URL |
| Desktop | Safari | Mở web URL |

## Deploy Cloudflare Pages

### Qua GitHub

1. Đẩy source code lên GitHub.
2. Trong Cloudflare Dashboard, mở **Workers & Pages** và tạo Pages project.
3. Kết nối repository GitHub.
4. Chọn framework preset **Astro**.
5. Build command: `npm run build`.
6. Build output directory: `dist`.
7. Deploy.

Website này là static HTML nên không cần Cloudflare adapter hay SPA fallback.

### Deploy trực tiếp

Sau `npm run build`, có thể tải thư mục `dist` lên Pages hoặc dùng Wrangler theo hướng dẫn Cloudflare hiện hành, ví dụ `npx wrangler pages deploy dist`.

## Placeholder bắt buộc cần thay

Tìm toàn dự án và thay các giá trị sau trước khi xuất bản:

- `YOUR_SITE_URL`
- `YOUR_PHONE_NUMBER`
- `YOUR_ZALO_WEB_URL`
- `YOUR_ZALO_APP_DEEP_LINK`
- `YOUR_FACEBOOK_USERNAME`
- `YOUR_FACEBOOK_PROFILE_ID`
- `YOUR_FACEBOOK_WEB_URL`
- `YOUR_FACEBOOK_IOS_DEEP_LINK`
- `YOUR_FACEBOOK_ANDROID_DEEP_LINK`
- `YOUR_TIKTOK_USERNAME`
- `YOUR_TIKTOK_URL`
- `YOUR_DOWNLOAD_URL`
- `YOUR_PURCHASE_URL`
- `YOUR_PREVIEW_URL`

## Checklist trước khi xuất bản

- [ ] Đã thay ảnh cá nhân
- [ ] Đã nhập link Zalo
- [ ] Đã nhập link Facebook
- [ ] Đã nhập link TikTok
- [ ] Đã thay tài liệu mẫu
- [ ] Đã kiểm tra nút tải và mua
- [ ] Đã kiểm tra trên iPhone
- [ ] Đã kiểm tra trên Android
- [ ] Đã kiểm tra trong trình duyệt TikTok
- [ ] Đã cập nhật canonical URL
- [ ] Đã thay ảnh Open Graph
- [ ] Đã kiểm tra `npm run build`
- [ ] Đã kiểm tra ở 360, 375, 390, 430, 768, 1024, 1280 và 1440 px
- [ ] Đã kiểm tra bàn phím, focus, modal và FAQ
