const fonts = {
  poppinsBold: 'Poppins-Bold',
  poppinsBoldItalic: 'Poppins-BoldItalic',
  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
  poppinsEctraLight: 'Poppins-ExtraLight',
  poppinsEctraLightItalic: 'Poppins-ExtraLightItalic',
  poppinsItalic: 'Poppins-Italic',
  poppinsLight: 'Poppins-Light',
  poppinsLightItalic: 'Poppins-LightItalic',
  poppinsMedium: 'Poppins-Medium',
  poppinsMediumItalic: 'Poppins-MediumItalic',
  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
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
  font: fonts.poppinsRegular,
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
