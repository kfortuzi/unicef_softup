import sq from './locales/sq.json';

const translationResources = { translation: sq.translation } as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof translationResources;
  }
}
