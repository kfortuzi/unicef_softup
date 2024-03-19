const fonts = {
  karlaBold: 'Karla-Bold',
  karlaBoldItalic: 'Karla-BoldItalic',
  karlaExtraBold: 'Karla-ExtraBold',
  karlaExtraBoldItalic: 'Karla-ExtraBoldItalic',
  karlaEctraLight: 'Karla-ExtraLight',
  karlaEctraLightItalic: 'Karla-ExtraLightItalic',
  karlaItalic: 'Karla-Italic',
  karlaLight: 'Karla-Light',
  karlaLightItalic: 'Karla-LightItalic',
  karlaMedium: 'Karla-Medium',
  karlaMediumItalic: 'Karla-MediumItalic',
  karlaRegular: 'Karla-Regular',
  karlaSemiBold: 'Karla-SemiBold',
  karlaSemiBoldItalic: 'Karla-SemiBoldItalic',
};

const sizeVariables = {
  small: '8px',
  medium: '16px',
  large: '24px',
};

const colors = {
  primary: '#E53F25',
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  link: '#19a0ff',
  layout: '#f2eeff',
};

const baseVariables = {
  font: fonts.karlaRegular,
  fontSize: '12px',
  fontColor: '#36383B',
  borderRadius: '5px',
  backgroundColor: 'white',
  small: sizeVariables.small,
  medium: sizeVariables.medium,
  large: sizeVariables.large,
  formWidth: '350px',
};

export { baseVariables, colors, fonts, sizeVariables };
