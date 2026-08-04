export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  avatar?: string;
  published: boolean;
}

// PLACEHOLDER — chỉ đổi published thành true sau khi có phản hồi thật và được phép công khai.
export const testimonials: Testimonial[] = [
  { id: 'sample', name: 'Tên học viên', role: 'Trình độ', content: 'Nội dung phản hồi thật của học viên.', published: false },
];
