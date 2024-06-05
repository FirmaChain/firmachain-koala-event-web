import { FirmaUtil } from '@firmachain/firma-js';

export const createTextEllipsis = (value: string | undefined, startPoint: number, endPoint: number) => {
  if (value === undefined) return '';
  let length = value.length;
  if (length > 12)
    return value.substring(0, startPoint) + '...' + value.substring(value.length - endPoint, value.length);
  return value;
};

export const isMobileDevice = () => {
  try {
    var userAgent = navigator.userAgent;
    var mobile = /(iPhone|iPad|Android|BlackBerry|Windows Phone)/i.test(userAgent);

    return mobile;
  } catch (e) {
    return false;
  }
};

export const hasTouchScreen = () => {
  let hasTouch = false;
  if ('maxTouchPoints' in navigator) {
    hasTouch = navigator.maxTouchPoints > 0;
  } else {
    const mQ = window.matchMedia('(pointer:coarse)');
    if (mQ && mQ.media === '(pointer:coarse)') {
      hasTouch = !!mQ.matches;
    } else if ('ontouchstart' in window) {
      hasTouch = true;
    }
  }
  return hasTouch;
};

export const copyToClipboard = (textToCopy: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
    } else {
      let textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.style.position = 'absolute';
      textArea.style.opacity = '0';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      return new Promise((res: any, rej: any) => {
        document.execCommand('copy') ? res() : rej();
        textArea.remove();
      });
    }
  } catch (error) {}
};

export const convertNumber = (value: string | number | undefined) => {
  if (isNaN(Number(value))) return 0;

  return Number(value);
};

export const convertToFctString = (uFctAmount: string) => {
  return FirmaUtil.getFCTStringFromUFCTStr(uFctAmount);
};
