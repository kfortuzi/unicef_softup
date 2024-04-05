export const getBaseCvId = (): string => {
  return localStorage.getItem('baseCv') || '';
};

export const setBaseCvId = (id: string) => {
  localStorage.setItem('baseCv', id);
};
