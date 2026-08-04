export const profile = {
  fullName: 'Kiều Như Quỳnh',
  displayName: 'Quỳnh Sensei',
  jobTitle: 'Giáo viên tiếng Nhật',
  workplace: 'Trung tâm Nhật ngữ Riki Nihongo',
  degree: 'Tốt nghiệp loại Giỏi',
  university: 'Trường Đại học Ngoại thương',
  major: 'Ngôn ngữ Nhật',
  jlptLevel: 'JLPT N2',
  shortBio:
    'Giáo viên tiếng Nhật với nhiều năm kinh nghiệm giảng dạy, hiện đang công tác tại Trung tâm Nhật ngữ Riki Nihongo. Mình mong muốn giúp người học tiếp cận tiếng Nhật theo cách dễ hiểu, có hệ thống và áp dụng được vào thực tế.',
  intro: 'Tại đây, bạn có thể tìm thấy các tài liệu học tiếng Nhật do mình trực tiếp biên soạn và chọn lọc.',
  longBio: [
    'Mình là Kiều Như Quỳnh, tốt nghiệp loại Giỏi ngành Ngôn ngữ Nhật tại Trường Đại học Ngoại thương và đã đạt chứng chỉ JLPT N2.',
    'Với nhiều năm kinh nghiệm đồng hành cùng người học tiếng Nhật, mình đặc biệt quan tâm đến việc giúp học viên xây dựng nền tảng vững chắc ngay từ những bài học đầu tiên. Hiện tại, mình đang là giáo viên tại Trung tâm Nhật ngữ Riki Nihongo.',
    'Trong quá trình giảng dạy, mình luôn cố gắng giải thích kiến thức theo cách dễ hiểu, kết hợp giữa ví dụ thực tế, luyện tập có hệ thống và tương tác trong lớp học. Mục tiêu của mình không chỉ là giúp học viên ghi nhớ kiến thức mà còn có thể tự tin sử dụng tiếng Nhật và duy trì động lực học tập lâu dài.',
  ],
  highlights: [
    'Giảng dạy tiếng Nhật cho người mới bắt đầu.',
    'Hướng dẫn bảng chữ cái, từ vựng và ngữ pháp nền tảng.',
    'Giảng dạy JLPT N5 và N4.',
    'Biên soạn bài tập và tài liệu học tập.',
    'Hỗ trợ học viên xây dựng lộ trình học.',
    'Kinh nghiệm giảng dạy online và offline.',
    'Chú trọng tương tác và sự tiến bộ của từng học viên.',
  ],
  quote: 'Mỗi học viên có một tốc độ tiếp thu khác nhau. Một lớp học tốt là nơi mọi người đều cảm thấy an tâm để hỏi, luyện tập và tiến bộ.',
  // Thay ảnh cá nhân tại public/images/profile.webp
  profileImage: '/images/profile.webp',
  social: {
    zalo: {
      phone: '0397068580',
      webUrl: 'https://zaloapp.com/qr/p/1kz0014sag5r3',
      // iOS dùng Universal Link của Zalo; Android dùng Intent để ưu tiên mở app
      appUrlIOS: 'https://zaloapp.com/qr/p/1kz0014sag5r3',
      appUrlAndroid:
        'intent://zaloapp.com/qr/p/1kz0014sag5r3#Intent;scheme=https;package=com.zing.zalo;S.browser_fallback_url=https%3A%2F%2Fzaloapp.com%2Fqr%2Fp%2F1kz0014sag5r3;end',
    },
    facebook: {
      username: 'Như Quỳnh JP',
      profileId: '100010448197192',
      webUrl: 'https://www.facebook.com/nhuquynhJP.kunNihongo',
      // Dùng numeric profile ID để mở thẳng hồ sơ trong ứng dụng Facebook
      appUrlIOS: 'fb://profile/100010448197192',
      appUrlAndroid:
        'intent://profile/100010448197192#Intent;scheme=fb;package=com.facebook.katana;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;S.browser_fallback_url=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100010448197192;end',
    },
    tiktok: { username: 'tiengnhatez', webUrl: 'https://www.tiktok.com/@tiengnhatez' },
  },
} as const;
