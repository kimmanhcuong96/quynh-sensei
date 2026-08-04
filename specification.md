# YÊU CẦU XÂY DỰNG WEBSITE PORTFOLIO GIÁO VIÊN TIẾNG NHẬT

Hãy tạo hoàn chỉnh một website portfolio cá nhân dành cho giáo viên tiếng Nhật theo các yêu cầu dưới đây.

Website sẽ được đặt trong liên kết bio TikTok, vì vậy phải ưu tiên:

* Giao diện đẹp và nổi bật trên điện thoại.
* Tải nhanh.
* Thông tin ngắn gọn, dễ đọc.
* Các nút liên hệ rõ ràng.
* Dễ thêm, sửa hoặc xóa tài liệu.
* Có thể deploy trực tiếp lên Cloudflare Pages.
* Không cần backend ở phiên bản đầu tiên.

---

## 1. Công nghệ sử dụng

Sử dụng:

* Astro phiên bản ổn định mới nhất.
* TypeScript.
* Tailwind CSS.
* Lucide Icons hoặc một thư viện icon nhẹ tương đương.
* Không sử dụng jQuery.
* Không sử dụng database.
* Không phụ thuộc vào dịch vụ trả phí.
* Không sử dụng package thừa.
* Website phải build thành static site.

Các lệnh sau phải hoạt động:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Sau khi chạy:

```bash
npm run build
```

website phải được xuất ra thư mục:

```text
dist
```

để có thể deploy lên Cloudflare Pages.

---

## 2. Mục tiêu của website

Website là portfolio và trang tổng hợp liên kết của:

**Kiều Như Quỳnh**

Thông tin giới thiệu chính:

* Tốt nghiệp loại Giỏi Trường Đại học Ngoại thương.
* Chuyên ngành Ngôn ngữ Nhật.
* Có nhiều năm kinh nghiệm giảng dạy tiếng Nhật.
* Hiện là giáo viên tại Trung tâm Nhật ngữ Riki Nihongo.
* Có kinh nghiệm giảng dạy người mới bắt đầu, trình độ N5 và N4.
* Có kinh nghiệm giảng dạy trực tiếp và trực tuyến.
* Từng hỗ trợ học viên xây dựng nền tảng từ bảng chữ cái, từ vựng, ngữ pháp đến luyện thi JLPT.
* Có chứng chỉ JLPT N2.
* Định hướng trở thành giáo viên có thể giảng dạy từ trình độ N5 đến N1.
* Chia sẻ kiến thức, tài liệu và phương pháp học tiếng Nhật dễ hiểu, thực tế.

Lưu ý:

* Viết nội dung chuyên nghiệp nhưng gần gũi.
* Không viết quá phô trương.
* Làm nổi bật sự tận tâm, kinh nghiệm và khả năng đồng hành cùng học viên.
* Có thể biên tập lại câu chữ để nội dung tự nhiên, thu hút hơn.
* Không tự tạo thêm bằng cấp hoặc thành tích chưa được cung cấp.

---

## 3. Phong cách thiết kế

### 3.1. Định hướng hình ảnh

Phong cách tổng thể:

* Trẻ trung.
* Hiện đại.
* Chuyên nghiệp.
* Gần gũi với người học tiếng Nhật.
* Có điểm nhấn mang cảm hứng Nhật Bản nhưng không được quá nhiều chi tiết trang trí.
* Phù hợp với đối tượng người dùng đến từ TikTok.

### 3.2. Màu sắc

Sử dụng bảng màu gợi ý:

* Màu chính: đỏ hồng Nhật Bản.
* Màu phụ: đỏ đậm.
* Nền sáng: trắng kem hoặc hồng rất nhạt.
* Văn bản chính: xám đen.
* Văn bản phụ: xám trung tính.
* Màu Zalo: xanh đặc trưng.
* Màu Facebook: xanh đặc trưng.

Có thể sử dụng gradient nhẹ ở phần đầu trang.

Không sử dụng quá nhiều màu hoặc gradient đậm gây rối mắt.

### 3.3. Font chữ

Sử dụng font hỗ trợ tốt tiếng Việt, ví dụ:

* Be Vietnam Pro.
* Inter.
* Noto Sans.

Không để lỗi dấu tiếng Việt.

### 3.4. Hiệu ứng

Sử dụng hiệu ứng vừa phải:

* Fade-in khi tải trang.
* Card nổi nhẹ khi hover.
* Nút phóng nhẹ khi hover hoặc nhấn.
* Chuyển động mượt.
* Hỗ trợ `prefers-reduced-motion`.

Không sử dụng hiệu ứng quá nhiều hoặc gây chậm trang.

---

## 4. Cấu trúc trang

Website là một trang đơn, gồm các phần theo thứ tự sau:

1. Header.
2. Hero giới thiệu cá nhân.
3. Thông tin nổi bật.
4. Giới thiệu chi tiết.
5. Danh sách tài liệu.
6. Quyền lợi khi sử dụng tài liệu.
7. Phản hồi học viên dạng placeholder.
8. Câu hỏi thường gặp.
9. Kêu gọi liên hệ.
10. Footer.

---

# 5. HEADER

Tạo header dạng sticky ở phía trên.

Bên trái:

```text
Quỳnh Sensei
```

hoặc:

```text
Kiều Như Quỳnh
```

Có thể đặt thêm biểu tượng hoa anh đào nhỏ.

Bên phải có các liên kết:

* Giới thiệu
* Tài liệu
* Liên hệ

Trên màn hình điện thoại:

* Có thể thu gọn menu.
* Hoặc chỉ hiển thị một nút “Xem tài liệu”.
* Header không được chiếm quá nhiều chiều cao.

Khi nhấn menu, cuộn mượt đến section tương ứng.

---

# 6. HERO SECTION

Đây là phần quan trọng nhất của website.

Trên desktop:

* Chia thành hai cột.
* Bên trái là nội dung giới thiệu.
* Bên phải là ảnh chân dung và thông tin liên hệ.

Trên điện thoại:

* Hiển thị ảnh trước hoặc ngay dưới tên.
* Các nút liên hệ phải nằm trong vùng nhìn thấy sớm.
* Không bắt người dùng phải cuộn quá lâu mới thấy Zalo và Facebook.

## 6.1. Nhãn nhỏ

Hiển thị một badge:

```text
Giáo viên tiếng Nhật
```

Có thể thêm badge phụ:

```text
JLPT N2
```

## 6.2. Tiêu đề chính

Hiển thị:

```text
Xin chào, mình là
Kiều Như Quỳnh
```

Làm nổi bật tên “Kiều Như Quỳnh” bằng màu chính hoặc gradient nhẹ.

## 6.3. Mô tả ngắn

Sử dụng nội dung tương tự:

```text
Giáo viên tiếng Nhật với nhiều năm kinh nghiệm giảng dạy, hiện đang công tác tại Trung tâm Nhật ngữ Riki Nihongo. Mình mong muốn giúp người học tiếp cận tiếng Nhật theo cách dễ hiểu, có hệ thống và áp dụng được vào thực tế.
```

Bên dưới có thể thêm:

```text
Tại đây, bạn có thể tìm thấy các tài liệu học tiếng Nhật do mình trực tiếp biên soạn và chọn lọc.
```

## 6.4. Nút hành động

Có hai nút chính:

* `Xem tài liệu`
* `Liên hệ với mình`

Nút “Xem tài liệu” cuộn xuống phần danh sách tài liệu.

Nút “Liên hệ với mình” cuộn tới khối Zalo và Facebook hoặc mở một menu liên hệ nhỏ.

## 6.5. Ảnh cá nhân

Tạo một vị trí ảnh chân dung rõ ràng.

Yêu cầu:

* Tỉ lệ ảnh khoảng 4:5.
* Bo góc lớn.
* Có viền hoặc bóng nhẹ.
* Không cắt mất khuôn mặt.
* Sử dụng `object-fit: cover`.
* Có nền trang trí nhẹ phía sau.
* Có alt text mô tả ảnh.

Tạo file ảnh mặc định:

```text
public/images/profile-placeholder.webp
```

Trong source code phải có comment rõ:

```text
Thay ảnh cá nhân tại public/images/profile.webp
```

Ưu tiên sử dụng:

```text
/images/profile.webp
```

Nếu file này chưa tồn tại, có thể hiển thị placeholder đẹp với:

* Biểu tượng người dùng.
* Dòng chữ “Thêm ảnh của bạn”.
* Hướng dẫn nhỏ “Thay file public/images/profile.webp”.

Không sử dụng ảnh người lạ làm ảnh mặc định.

---

# 7. KHỐI LIÊN HỆ ZALO VÀ FACEBOOK

Đặt ngay cạnh ảnh trên desktop và bên dưới ảnh trên mobile.

Hiển thị tiêu đề:

```text
Kết nối với mình
```

Có hai nút lớn:

## 7.1. Zalo

Nút gồm:

* Icon Zalo hoặc icon tin nhắn.
* Tiêu đề: `Nhắn tin qua Zalo`.
* Mô tả nhỏ: `Tư vấn khóa học và tài liệu`.

Tạo cấu hình tập trung tại một file dữ liệu:

```ts
zalo: {
  phone: "YOUR_PHONE_NUMBER",
  webUrl: "YOUR_ZALO_WEB_URL",
  appUrl: "YOUR_ZALO_APP_DEEP_LINK"
}
```

Yêu cầu hoạt động:

1. Khi người dùng nhấn nút trên thiết bị di động, thử mở đường dẫn ứng dụng Zalo đã cấu hình.
2. Nếu ứng dụng không mở được, chuyển sang `webUrl`.
3. Trên desktop, mở trực tiếp `webUrl`.
4. Không được để đường dẫn hoặc số điện thoại rải rác trong nhiều component.
5. Nếu chưa điền URL, disable nút và hiển thị thông báo dễ hiểu trong development mode.

Không hard-code một deep link chưa được kiểm chứng.

## 7.2. Facebook

Nút gồm:

* Icon Facebook.
* Tiêu đề: `Kết nối qua Facebook`.
* Mô tả nhỏ: `Theo dõi và nhắn tin với mình`.

Tạo cấu hình:

```ts
facebook: {
  username: "YOUR_FACEBOOK_USERNAME",
  profileId: "YOUR_FACEBOOK_PROFILE_ID",
  webUrl: "YOUR_FACEBOOK_WEB_URL",
  appUrlIOS: "YOUR_FACEBOOK_IOS_DEEP_LINK",
  appUrlAndroid: "YOUR_FACEBOOK_ANDROID_DEEP_LINK"
}
```

Yêu cầu hoạt động:

1. Trên Android, thử mở URL ứng dụng đã cấu hình.
2. Trên iOS, thử mở URL ứng dụng đã cấu hình.
3. Nếu không mở được ứng dụng, chuyển sang `webUrl`.
4. Trên desktop, mở trực tiếp `webUrl`.
5. Đường dẫn web mở ở tab mới.
6. Thêm `rel="noopener noreferrer"` cho liên kết mở tab mới.

## 7.3. Cách triển khai fallback

Tạo hàm dùng chung, ví dụ:

```ts
openAppWithFallback({
  appUrl,
  webUrl,
  fallbackDelay: 1200
})
```

Logic gợi ý:

* Chỉ chạy sau thao tác click trực tiếp của người dùng.
* Ghi lại thời điểm click.
* Thử chuyển tới app URL.
* Nếu trang vẫn còn visible sau khoảng thời gian ngắn, chuyển tới web URL.
* Hủy fallback khi `visibilitychange` cho thấy trình duyệt đã chuyển sang ứng dụng.
* Không tự động mở app khi vừa tải trang.
* Không tạo popup khó chịu.
* Luôn có liên kết web hoạt động được.

Lưu ý trong README rằng hành vi mở ứng dụng không thể bảo đảm tuyệt đối trên mọi trình duyệt, đặc biệt là trình duyệt tích hợp trong TikTok, Facebook hoặc Instagram. Vì website được truy cập từ TikTok, hãy ưu tiên trải nghiệm fallback rõ ràng và luôn đảm bảo người dùng vẫn mở được phiên bản web.

---

# 8. THÔNG TIN NỔI BẬT

Ngay sau Hero, tạo một hàng gồm 3–4 card thống kê.

Nội dung đề xuất:

### Card 1

```text
JLPT N2
Năng lực tiếng Nhật
```

### Card 2

```text
Nhiều năm
Kinh nghiệm giảng dạy
```

### Card 3

```text
N5 – N4
Trình độ đã giảng dạy
```

### Card 4

```text
Online & Offline
Hình thức giảng dạy
```

Không tự thêm số năm cụ thể khi chưa có dữ liệu xác nhận.

Các nội dung này phải được lưu trong file dữ liệu để dễ thay đổi.

---

# 9. PHẦN GIỚI THIỆU CHI TIẾT

Tiêu đề:

```text
Về mình
```

Nội dung gợi ý:

```text
Mình là Kiều Như Quỳnh, tốt nghiệp loại Giỏi ngành Ngôn ngữ Nhật tại Trường Đại học Ngoại thương và đã đạt chứng chỉ JLPT N2.

Với nhiều năm kinh nghiệm đồng hành cùng người học tiếng Nhật, mình đặc biệt quan tâm đến việc giúp học viên xây dựng nền tảng vững chắc ngay từ những bài học đầu tiên. Hiện tại, mình đang là giáo viên tại Trung tâm Nhật ngữ Riki Nihongo.

Trong quá trình giảng dạy, mình luôn cố gắng giải thích kiến thức theo cách dễ hiểu, kết hợp giữa ví dụ thực tế, luyện tập có hệ thống và tương tác trong lớp học. Mục tiêu của mình không chỉ là giúp học viên ghi nhớ kiến thức mà còn có thể tự tin sử dụng tiếng Nhật và duy trì động lực học tập lâu dài.
```

Bên cạnh phần văn bản, hiển thị danh sách điểm nổi bật:

* Giảng dạy tiếng Nhật cho người mới bắt đầu.
* Hướng dẫn bảng chữ cái, từ vựng và ngữ pháp nền tảng.
* Giảng dạy JLPT N5 và N4.
* Biên soạn bài tập và tài liệu học tập.
* Hỗ trợ học viên xây dựng lộ trình học.
* Kinh nghiệm giảng dạy online và offline.
* Chú trọng tương tác và sự tiến bộ của từng học viên.

Có thể thêm một quote:

```text
Mỗi học viên có một tốc độ tiếp thu khác nhau. Một lớp học tốt là nơi mọi người đều cảm thấy an tâm để hỏi, luyện tập và tiến bộ.
```

---

# 10. DANH SÁCH TÀI LIỆU

Đây là phần quan trọng thứ hai sau Hero.

ID section:

```text
materials
```

Tiêu đề:

```text
Tài liệu học tiếng Nhật
```

Mô tả:

```text
Các tài liệu được mình trực tiếp biên soạn hoặc chọn lọc nhằm giúp bạn học tiếng Nhật dễ hiểu, có hệ thống và tiết kiệm thời gian hơn.
```

## 10.1. Bộ lọc tài liệu

Tạo bộ lọc dạng button hoặc tab:

* Tất cả
* Miễn phí
* Trả phí
* N5
* N4
* Từ vựng
* Ngữ pháp
* Bài tập

Bộ lọc phải:

* Hoạt động hoàn toàn phía client.
* Không reload trang.
* Có trạng thái đang chọn rõ ràng.
* Có thể kết hợp một bộ lọc trình độ với loại tài liệu nếu cách triển khai không quá phức tạp.
* Trên điện thoại có thể cuộn ngang.

Có thêm ô tìm kiếm:

```text
Tìm tài liệu...
```

Tìm theo:

* Tên tài liệu.
* Mô tả.
* Tag.
* Trình độ.

## 10.2. Cấu trúc dữ liệu tài liệu

Tạo file:

```text
src/data/materials.ts
```

Mỗi tài liệu có cấu trúc tương tự:

```ts
export interface Material {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  coverImage: string;
  level: "Beginner" | "N5" | "N4" | "N3" | "N2" | "N1" | "All";
  categories: Array<
    "Vocabulary" |
    "Grammar" |
    "Kanji" |
    "Reading" |
    "Listening" |
    "Exercises" |
    "Teaching"
  >;
  type: "free" | "paid";
  price?: number;
  originalPrice?: number;
  currency: "VND";
  fileFormat?: string;
  pageCount?: number;
  updatedAt?: string;
  featured?: boolean;
  bestseller?: boolean;
  downloadUrl?: string;
  purchaseUrl?: string;
  previewUrl?: string;
  tags: string[];
}
```

Thêm tối thiểu 6 dữ liệu mẫu để dễ hình dung, nhưng ghi rõ đây là dữ liệu mẫu và có thể thay đổi.

Dữ liệu mẫu đề xuất:

1. Bộ bài tập chia động từ thể て – N5.
2. Tổng hợp trợ từ tiếng Nhật cơ bản.
3. Flashcard từ vựng Minna no Nihongo.
4. Bài tập ngữ pháp JLPT N4.
5. Tổng hợp Kanji N5 theo chủ đề.
6. Checklist ôn thi JLPT.

Không thêm URL thanh toán hoặc URL tải giả có thể gây hiểu nhầm.

Sử dụng placeholder:

```text
YOUR_DOWNLOAD_URL
YOUR_PURCHASE_URL
YOUR_PREVIEW_URL
```

Nếu URL chưa được cấu hình:

* Nút vẫn hiển thị trong development mode.
* Khi click, hiện toast: `Liên kết đang được cập nhật`.
* Không chuyển tới trang lỗi.

## 10.3. Material card

Mỗi card tài liệu phải có:

* Ảnh bìa.
* Nhãn Miễn phí hoặc Trả phí.
* Trình độ.
* Tên tài liệu.
* Mô tả ngắn tối đa 2–3 dòng.
* Các tag chính.
* Định dạng file, ví dụ PDF.
* Số trang nếu có.
* Ngày cập nhật nếu có.
* Giá bán.
* Giá gốc bị gạch nếu có giảm giá.
* Nút xem chi tiết hoặc xem thử.
* Nút tải xuống hoặc mua tài liệu.

Các nhãn đặc biệt:

* `Nổi bật`
* `Được quan tâm`
* `Mới cập nhật`

Không sử dụng nhãn “Bán chạy” nếu chưa có dữ liệu thực tế. Chỉ hiển thị khi trường `bestseller` được chủ website chủ động đặt thành `true`.

## 10.4. Tài liệu miễn phí

Nếu `type === "free"`:

* Hiển thị `Miễn phí`.
* Nút chính: `Tải tài liệu`.
* Có thể yêu cầu người dùng mở Zalo để nhận tài liệu nếu `downloadUrl` chưa có.

## 10.5. Tài liệu trả phí

Nếu `type === "paid"`:

* Hiển thị giá theo định dạng Việt Nam, ví dụ `49.000₫`.
* Nút chính: `Mua tài liệu`.
* Nút phụ: `Xem thử`.
* Nếu chưa có hệ thống thanh toán, nút mua dẫn tới Zalo hoặc Facebook để người dùng liên hệ.
* Trước khi chuyển sang Zalo, có thể copy sẵn nội dung:

```text
Chào cô Quỳnh, em muốn hỏi về tài liệu “[Tên tài liệu]”.
```

Không tích hợp thanh toán giả.

## 10.6. Modal chi tiết tài liệu

Khi nhấn “Xem chi tiết”, mở modal hoặc drawer.

Hiển thị:

* Ảnh bìa lớn.
* Tên tài liệu.
* Mô tả đầy đủ.
* Đối tượng phù hợp.
* Nội dung tài liệu.
* Số trang.
* Định dạng.
* Ngày cập nhật.
* Giá.
* Nút xem thử.
* Nút mua hoặc tải.
* Nút đóng dễ nhìn.

Yêu cầu accessibility:

* Khóa focus trong modal.
* Nhấn Escape để đóng.
* Không cho trang phía sau cuộn khi modal mở.
* Có `aria-modal`.
* Trả focus về nút đã mở modal sau khi đóng.

---

# 11. QUYỀN LỢI KHI SỬ DỤNG TÀI LIỆU

Tạo section với tiêu đề:

```text
Bạn nhận được gì?
```

Các card:

### Dễ hiểu

```text
Kiến thức được trình bày ngắn gọn, có ví dụ và phù hợp với người Việt học tiếng Nhật.
```

### Có hệ thống

```text
Nội dung được sắp xếp theo trình độ và chủ đề, giúp bạn dễ dàng xây dựng lộ trình học.
```

### Thực hành được ngay

```text
Tài liệu ưu tiên bài tập, ví dụ và nội dung có thể áp dụng trực tiếp vào quá trình học.
```

### Đồng hành khi cần

```text
Bạn có thể liên hệ qua Zalo hoặc Facebook khi cần hỏi thêm về tài liệu và cách sử dụng.
```

Không cam kết quá mức như “chắc chắn đỗ JLPT”.

---

# 12. PHẢN HỒI HỌC VIÊN

Tạo section:

```text
Học viên nói gì?
```

Tuy nhiên, vì chưa có phản hồi thật nên:

* Không tự tạo tên học viên thật.
* Không tự bịa đánh giá.
* Tạo dữ liệu placeholder rõ ràng.
* Chỉ render section nếu có ít nhất một testimonial được đánh dấu `published: true`.

Tạo file:

```text
src/data/testimonials.ts
```

Cấu trúc:

```ts
interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  avatar?: string;
  published: boolean;
}
```

Trong README hướng dẫn cách thêm phản hồi thật.

---

# 13. CÂU HỎI THƯỜNG GẶP

Tạo accordion FAQ.

Nội dung:

### Tài liệu phù hợp với ai?

```text
Mỗi tài liệu đều có ghi rõ trình độ và đối tượng phù hợp. Bạn nên kiểm tra nhãn Beginner, N5, N4 hoặc các thông tin trong phần mô tả trước khi tải hoặc mua.
```

### Tôi nhận tài liệu như thế nào?

```text
Tài liệu miễn phí có thể tải trực tiếp nếu đã có liên kết. Với tài liệu trả phí, bạn có thể liên hệ qua Zalo hoặc Facebook để được hướng dẫn.
```

### Tôi có thể xem thử trước khi mua không?

```text
Các tài liệu có bản xem thử sẽ hiển thị nút “Xem thử” trên thẻ tài liệu hoặc trong phần thông tin chi tiết.
```

### Tôi có thể chia sẻ tài liệu cho người khác không?

```text
Vui lòng kiểm tra điều kiện sử dụng của từng tài liệu. Tài liệu trả phí chỉ dành cho người mua và không được tự ý phát hành lại.
```

### Tôi nên bắt đầu học từ đâu?

```text
Bạn có thể liên hệ trực tiếp với mình qua Zalo hoặc Facebook để được gợi ý tài liệu và lộ trình phù hợp.
```

---

# 14. CTA CUỐI TRANG

Tạo một section nổi bật với nội dung:

```text
Bạn chưa biết nên bắt đầu từ đâu?
```

Mô tả:

```text
Hãy nhắn cho mình để được gợi ý tài liệu và lộ trình học phù hợp với trình độ hiện tại.
```

Hai nút:

* `Nhắn qua Zalo`
* `Kết nối Facebook`

Có thể thêm dòng:

```text
Mình sẽ phản hồi sớm nhất có thể.
```

Không cam kết phản hồi ngay lập tức hoặc trong một số phút cố định.

---

# 15. FOOTER

Footer gồm:

```text
Kiều Như Quỳnh
Giáo viên tiếng Nhật
```

Các liên kết:

* Giới thiệu
* Tài liệu
* Zalo
* Facebook

Dòng bản quyền:

```text
© [năm hiện tại] Kiều Như Quỳnh. All rights reserved.
```

Năm phải lấy tự động bằng JavaScript hoặc tạo từ build time.

Có thêm dòng:

```text
Website chia sẻ kiến thức và tài liệu học tiếng Nhật.
```

---

# 16. NÚT LIÊN HỆ CỐ ĐỊNH TRÊN MOBILE

Trên màn hình điện thoại, tạo thanh liên hệ cố định ở cuối màn hình gồm:

* Nút Zalo.
* Nút Facebook.

Yêu cầu:

* Không che nội dung.
* Thêm padding-bottom phù hợp cho phần nội dung.
* Hỗ trợ safe area trên iPhone bằng `env(safe-area-inset-bottom)`.
* Có thể ẩn khi người dùng cuộn xuống footer nếu cần.
* Nút phải đủ lớn để thao tác bằng ngón tay.
* Không sử dụng quá nhiều chữ.

---

# 17. QUẢN LÝ NỘI DUNG

Tách toàn bộ nội dung cá nhân khỏi component.

Tạo file:

```text
src/data/profile.ts
```

Cấu trúc gợi ý:

```ts
export const profile = {
  fullName: "Kiều Như Quỳnh",
  displayName: "Quỳnh Sensei",
  jobTitle: "Giáo viên tiếng Nhật",
  workplace: "Trung tâm Nhật ngữ Riki Nihongo",
  degree: "Tốt nghiệp loại Giỏi",
  university: "Trường Đại học Ngoại thương",
  major: "Ngôn ngữ Nhật",
  jlptLevel: "JLPT N2",
  shortBio: "...",
  longBio: ["...", "..."],
  profileImage: "/images/profile.webp",
  social: {
    zalo: {
      phone: "YOUR_PHONE_NUMBER",
      webUrl: "YOUR_ZALO_WEB_URL",
      appUrl: "YOUR_ZALO_APP_DEEP_LINK"
    },
    facebook: {
      username: "YOUR_FACEBOOK_USERNAME",
      profileId: "YOUR_FACEBOOK_PROFILE_ID",
      webUrl: "YOUR_FACEBOOK_WEB_URL",
      appUrlIOS: "YOUR_FACEBOOK_IOS_DEEP_LINK",
      appUrlAndroid: "YOUR_FACEBOOK_ANDROID_DEEP_LINK"
    },
    tiktok: {
      username: "YOUR_TIKTOK_USERNAME",
      webUrl: "YOUR_TIKTOK_URL"
    }
  }
};
```

Tạo thêm:

```text
src/data/materials.ts
src/data/testimonials.ts
src/data/faqs.ts
src/data/site.ts
```

Mục tiêu là người không rành code vẫn có thể cập nhật nội dung bằng cách sửa các file dữ liệu.

---

# 18. CẤU TRÚC THƯ MỤC

Sắp xếp dự án rõ ràng, ví dụ:

```text
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── _headers
│   ├── _redirects
│   ├── images/
│   │   ├── profile-placeholder.webp
│   │   ├── profile.webp
│   │   └── materials/
│   └── og/
│       └── og-default.webp
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── SocialButtons.astro
│   │   ├── Stats.astro
│   │   ├── About.astro
│   │   ├── MaterialCard.astro
│   │   ├── MaterialGrid.astro
│   │   ├── MaterialFilters.astro
│   │   ├── MaterialModal.astro
│   │   ├── Benefits.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── ContactCTA.astro
│   │   ├── MobileContactBar.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── profile.ts
│   │   ├── materials.ts
│   │   ├── testimonials.ts
│   │   ├── faqs.ts
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   ├── scripts/
│   │   ├── social-links.ts
│   │   ├── material-filter.ts
│   │   └── material-modal.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

Có thể điều chỉnh cấu trúc nếu có giải pháp tốt hơn, nhưng phải giữ nguyên nguyên tắc:

* Component nhỏ, dễ bảo trì.
* Dữ liệu tách khỏi giao diện.
* Không lặp code.
* Không tạo một file component quá lớn.

---

# 19. SEO VÀ CHIA SẺ MẠNG XÃ HỘI

Thiết lập metadata:

## Title

```text
Kiều Như Quỳnh | Giáo viên tiếng Nhật
```

## Description

```text
Portfolio của Kiều Như Quỳnh – giáo viên tiếng Nhật, tốt nghiệp loại Giỏi Trường Đại học Ngoại thương, hiện giảng dạy tại Trung tâm Nhật ngữ Riki Nihongo. Khám phá tài liệu học tiếng Nhật N5, N4 và các nội dung hữu ích.
```

Thiết lập:

* Canonical URL từ cấu hình.
* Open Graph.
* Twitter Card.
* Favicon.
* `theme-color`.
* Ảnh OG mặc định.
* `lang="vi"`.
* Structured data JSON-LD loại `Person`.
* Có thể bổ sung `WebSite`.

Structured data chỉ sử dụng thông tin thật đã được cung cấp.

Không thêm rating, review hoặc award giả.

---

# 20. ACCESSIBILITY

Đảm bảo:

* Có heading theo đúng thứ tự.
* Chỉ có một `h1`.
* Mọi ảnh đều có alt text.
* Nút có accessible name.
* Có trạng thái focus rõ ràng.
* Độ tương phản màu đạt yêu cầu cơ bản.
* Không dùng div giả làm button.
* Có link `Bỏ qua đến nội dung chính`.
* Accordion có `aria-expanded`.
* Modal có hỗ trợ bàn phím.
* Form tìm kiếm có label.
* Icon trang trí có `aria-hidden="true"`.

---

# 21. HIỆU NĂNG

Mục tiêu:

* Mobile-first.
* Lighthouse Performance tối thiểu 90 trong điều kiện thông thường.
* Accessibility tối thiểu 90.
* Best Practices tối thiểu 90.
* SEO tối thiểu 90.

Yêu cầu:

* Ảnh dùng WebP hoặc AVIF nếu phù hợp.
* Đặt width và height cho ảnh để tránh layout shift.
* Lazy-load ảnh bên dưới màn hình đầu tiên.
* Không lazy-load ảnh chân dung nếu ảnh nằm trong màn hình đầu tiên.
* Không tải JavaScript không cần thiết.
* Không tải toàn bộ thư viện animation lớn.
* Không dùng video nền.
* Không dùng ảnh nền dung lượng lớn.
* Tối ưu giao diện cho mạng di động.

---

# 22. RESPONSIVE

Kiểm tra tối thiểu tại các kích thước:

* 360px.
* 375px.
* 390px.
* 430px.
* 768px.
* 1024px.
* 1280px.
* 1440px.

Yêu cầu:

* Không có thanh cuộn ngang.
* Không có chữ tràn khỏi card.
* Nút không quá nhỏ.
* Card tài liệu:

  * Mobile: 1 cột.
  * Tablet: 2 cột.
  * Desktop: 3 cột.
* Hero:

  * Mobile: 1 cột.
  * Desktop: 2 cột.
* Nội dung phải dễ đọc trên màn hình nhỏ.

---

# 23. CLOUDFLARE PAGES

Dự án phải tương thích với Cloudflare Pages.

Trong README ghi rõ cách triển khai:

## Cách 1: Deploy qua GitHub

1. Đẩy source code lên GitHub.
2. Mở Cloudflare Dashboard.
3. Chọn Workers & Pages.
4. Tạo Pages project.
5. Kết nối GitHub repository.
6. Framework preset: Astro.
7. Build command:

```text
npm run build
```

8. Build output directory:

```text
dist
```

9. Deploy.

## Cách 2: Deploy trực tiếp

Có thể sử dụng Wrangler nếu người dùng muốn.

Không bắt buộc phải cài Cloudflare adapter nếu website được xuất hoàn toàn dưới dạng static HTML.

Tạo file:

```text
public/_headers
```

với các security header phù hợp, ví dụ:

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: SAMEORIGIN
```

Chỉ thêm Content Security Policy khi đã kiểm tra và không làm hỏng font, icon hoặc script.

Tạo file:

```text
public/_redirects
```

nếu cần hỗ trợ SPA fallback hoặc redirect tên miền. Vì đây là Astro static site nhiều khả năng không cần fallback `/* /index.html 200`, do đó không được thêm quy tắc này một cách máy móc.

---

# 24. TRANG 404

Tạo trang 404 đẹp và đồng bộ với website.

Nội dung:

```text
Trang bạn tìm không tồn tại.
```

Nút:

```text
Quay về trang chủ
```

Có thể thêm hình minh họa nhẹ như hoa anh đào hoặc quyển sách.

---

# 25. TRẠNG THÁI VÀ THÔNG BÁO

Tạo toast nhẹ cho các trường hợp:

* Liên kết đang được cập nhật.
* Đã sao chép nội dung.
* Không thể mở ứng dụng, đang chuyển sang phiên bản web.
* Không tìm thấy tài liệu phù hợp.

Toast phải:

* Không che nút chính.
* Tự biến mất.
* Có `aria-live`.
* Không sử dụng `alert()` mặc định của trình duyệt.

---

# 26. NỘI DUNG MẪU CHO TÀI LIỆU

Tạo dữ liệu mẫu nhưng đánh dấu rõ trong code:

```ts
// SAMPLE DATA — thay bằng tài liệu thật trước khi xuất bản.
```

Ví dụ:

```ts
{
  id: "te-form-n5",
  slug: "bai-tap-the-te-n5",
  title: "Bộ bài tập chia động từ thể て – JLPT N5",
  shortDescription:
    "Tổng hợp quy tắc chia thể て kèm bài tập thực hành từ cơ bản đến nâng cao.",
  coverImage: "/images/materials/te-form-n5.webp",
  level: "N5",
  categories: ["Grammar", "Exercises"],
  type: "free",
  currency: "VND",
  fileFormat: "PDF",
  pageCount: 20,
  featured: true,
  downloadUrl: "",
  previewUrl: "",
  tags: ["Thể て", "Động từ", "N5", "Bài tập"]
}
```

Tạo ảnh bìa placeholder bằng CSS hoặc SVG đơn giản, không cần tải ảnh có bản quyền từ Internet.

Mỗi ảnh bìa cần có:

* Tên tài liệu.
* Nhãn trình độ.
* Màu sắc đồng bộ.
* Dễ thay thế bằng file ảnh thật.

---

# 27. README

README phải viết bằng tiếng Việt và bao gồm:

1. Giới thiệu dự án.
2. Công nghệ sử dụng.
3. Cách cài đặt.
4. Cách chạy local.
5. Cách thay ảnh cá nhân.
6. Cách cập nhật thông tin cá nhân.
7. Cách thêm tài liệu.
8. Cách thay link Zalo.
9. Cách thay link Facebook.
10. Cách thêm phản hồi học viên.
11. Cách thay ảnh Open Graph.
12. Cách build.
13. Cách deploy Cloudflare Pages.
14. Những thông tin cần thay trước khi xuất bản.
15. Checklist kiểm thử.

Tạo checklist:

```text
[ ] Đã thay ảnh cá nhân
[ ] Đã nhập link Zalo
[ ] Đã nhập link Facebook
[ ] Đã nhập link TikTok
[ ] Đã thay tài liệu mẫu
[ ] Đã kiểm tra nút tải và mua
[ ] Đã kiểm tra trên iPhone
[ ] Đã kiểm tra trên Android
[ ] Đã kiểm tra trong trình duyệt TikTok
[ ] Đã cập nhật canonical URL
[ ] Đã thay ảnh Open Graph
[ ] Đã kiểm tra npm run build
```

---

# 28. KIỂM THỬ NÚT ZALO VÀ FACEBOOK

Trong README, tạo bảng kiểm thử:

| Thiết bị | Môi trường       | Kết quả cần kiểm tra      |
| -------- | ---------------- | ------------------------- |
| Android  | Chrome           | Mở app hoặc fallback web  |
| Android  | TikTok browser   | Có thể mở app hoặc mở web |
| Android  | Facebook browser | Có thể mở app hoặc mở web |
| iPhone   | Safari           | Mở app hoặc fallback web  |
| iPhone   | TikTok browser   | Có thể mở app hoặc mở web |
| iPhone   | Facebook browser | Có thể mở app hoặc mở web |
| Desktop  | Chrome/Edge      | Mở web URL                |
| Desktop  | Safari           | Mở web URL                |

Không tuyên bố rằng JavaScript có thể bảo đảm mở app trên mọi thiết bị.

---

# 29. YÊU CẦU VỀ CHẤT LƯỢNG CODE

* TypeScript không có lỗi.
* Không dùng `any` nếu không cần thiết.
* Không có lỗi console.
* Không có warning nghiêm trọng khi build.
* Không để import thừa.
* Không để code chết.
* Không lặp component.
* Không lưu secret trong source code.
* Không hard-code URL ở nhiều nơi.
* Mọi dữ liệu cá nhân nằm trong file cấu hình.
* Tên biến và component bằng tiếng Anh.
* Nội dung hiển thị bằng tiếng Việt.
* Có comment tại các vị trí người dùng cần sửa.
* Không tạo backend hoặc API không cần thiết.
* Không sử dụng localStorage để lưu dữ liệu nhạy cảm.
* Không thu thập thông tin người dùng.
* Không thêm cookie banner khi website không sử dụng cookie theo dõi.
* Không tích hợp Google Analytics mặc định.

---

# 30. KẾT QUẢ CODEx PHẢI TRẢ VỀ

Hãy thực hiện toàn bộ dự án, không chỉ mô tả cách làm.

Kết quả cần bao gồm:

1. Toàn bộ source code.
2. Tất cả component cần thiết.
3. Dữ liệu mẫu.
4. Placeholder ảnh cá nhân.
5. Placeholder ảnh bìa tài liệu.
6. File metadata và SEO.
7. File `_headers`.
8. File `_redirects` nếu thực sự cần.
9. Trang 404.
10. README bằng tiếng Việt.
11. Hướng dẫn deploy Cloudflare Pages.
12. Danh sách các giá trị tôi cần thay thế.
13. Kiểm tra và sửa tất cả lỗi build.

Sau khi tạo xong, hãy tự chạy:

```bash
npm install
npm run build
```

Nếu có lỗi, phải sửa cho đến khi build thành công.

Cuối cùng, hãy báo cáo ngắn gọn:

* Cấu trúc đã tạo.
* Những tính năng đã hoàn thành.
* Vị trí thay ảnh cá nhân.
* Vị trí cập nhật link Zalo và Facebook.
* Vị trí thêm tài liệu.
* Build có thành công hay không.
* Build output directory.
* Các placeholder còn cần người dùng cập nhật.

---

# 31. CÁC GIÁ TRỊ PLACEHOLDER BẮT BUỘC

Sử dụng đúng các placeholder dễ tìm kiếm sau:

```text
YOUR_SITE_URL
YOUR_PHONE_NUMBER
YOUR_ZALO_WEB_URL
YOUR_ZALO_APP_DEEP_LINK
YOUR_FACEBOOK_USERNAME
YOUR_FACEBOOK_PROFILE_ID
YOUR_FACEBOOK_WEB_URL
YOUR_FACEBOOK_IOS_DEEP_LINK
YOUR_FACEBOOK_ANDROID_DEEP_LINK
YOUR_TIKTOK_USERNAME
YOUR_TIKTOK_URL
YOUR_DOWNLOAD_URL
YOUR_PURCHASE_URL
YOUR_PREVIEW_URL
```

Tạo một mục trong README liệt kê toàn bộ placeholder này.

Có thể tạo thêm script kiểm tra placeholder trước khi build production, nhưng không được làm build thất bại ở lần chạy đầu tiên. Chỉ hiển thị warning dễ hiểu.

---

# 32. TIÊU CHÍ HOÀN THÀNH

Dự án chỉ được coi là hoàn thành khi:

* `npm run build` chạy thành công.
* Trang chủ hiển thị đầy đủ.
* Không có lỗi console.
* Giao diện đẹp trên mobile.
* Có vị trí thay ảnh cá nhân rõ ràng.
* Zalo và Facebook có app-link và web fallback.
* Danh sách tài liệu có tìm kiếm và bộ lọc.
* Có thể thêm tài liệu bằng cách sửa một file dữ liệu.
* Các nút chưa có URL không dẫn đến trang lỗi.
* SEO metadata đầy đủ.
* Trang 404 hoạt động.
* README hướng dẫn đầy đủ.
* Có thể deploy thư mục `dist` lên Cloudflare Pages.
