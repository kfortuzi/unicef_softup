import { GetProp, UploadProps, message } from "antd";

import i18n from "src/locales";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error(i18n.t('globalStrings.formatError', { format: 'JPG/PNG' }));
  }

  const isLt5M = file.size / 1024 / 1024 < 5;
  if (!isLt5M) {
    message.error(i18n.t('globalStrings.sizeError', { size: '5MB' }));
  }

  return isJpgOrPng && isLt5M;
};

export { getBase64, beforeUpload };