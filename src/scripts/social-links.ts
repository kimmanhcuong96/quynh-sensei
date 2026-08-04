export interface AppLinkOptions { appUrl: string; webUrl: string; fallbackDelay?: number; }
export const isPlaceholder = (value?: string) => !value || value.startsWith('YOUR_');

export function showToast(message: string) {
  const toast = document.querySelector<HTMLElement>('#toast');
  if (!toast) return;
  toast.textContent = message; toast.classList.remove('opacity-0', 'translate-y-4');
  window.setTimeout(() => toast.classList.add('opacity-0', 'translate-y-4'), 2600);
}

export function openAppWithFallback({ appUrl, webUrl, fallbackDelay = 1200 }: AppLinkOptions) {
  if (isPlaceholder(webUrl)) { showToast('Liên kết đang được cập nhật'); return; }
  if (isPlaceholder(appUrl)) { window.location.assign(webUrl); return; }
  let leftPage = false;
  const onVisibility = () => { if (document.hidden) leftPage = true; };
  const onPageHide = () => { leftPage = true; };
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('pagehide', onPageHide, { once: true });
  window.location.assign(appUrl);
  window.setTimeout(() => {
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', onPageHide);
    if (!leftPage && !document.hidden) {
      showToast('Không thể mở ứng dụng, đang chuyển sang phiên bản web');
      // Chuyển cùng tab để không bị trình duyệt trong TikTok chặn popup.
      window.location.assign(webUrl);
    }
  }, fallbackDelay);
}

export function initSocialLinks() {
  document.querySelectorAll<HTMLButtonElement>('[data-zalo-phone]').forEach((button) => {
    if (button.dataset.zaloBound === 'true') return;
    button.dataset.zaloBound = 'true';
    button.addEventListener('click', () => {
      const phone = button.dataset.phone ?? '';
      const compact = button.dataset.compact === 'true';
      const label = button.querySelector<HTMLElement>('[data-zalo-label]');
      const detail = button.querySelector<HTMLElement>('[data-zalo-detail]');

      if (label) label.textContent = compact ? 'Liên hệ Zalo' : 'Hãy liên hệ Zalo theo số điện thoại này';
      if (detail) {
        detail.textContent = phone;
        detail.classList.remove('hidden');
        detail.classList.add('block');
      }
      button.setAttribute('aria-label', `Hãy liên hệ Zalo theo số điện thoại ${phone}`);
      showToast(`Hãy liên hệ Zalo theo số điện thoại này: ${phone}`);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-social-link]').forEach((button) => {
    if (button.dataset.socialBound === 'true') return;
    button.dataset.socialBound = 'true';
    button.addEventListener('click', () => {
      const webUrl = button.dataset.webUrl ?? '';
      if (isPlaceholder(webUrl)) { showToast('Liên kết đang được cập nhật'); return; }
      const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (!mobile) { window.open(webUrl, '_blank', 'noopener,noreferrer'); return; }
      const appUrl = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? button.dataset.appIos : button.dataset.appAndroid;
      openAppWithFallback({ appUrl: appUrl ?? '', webUrl });
    });
  });
}
