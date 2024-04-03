export const getBaseCvId = (): string => {
  return localStorage.getItem('baseCv') || '';
};

export const setBaseCvId = (id: string) => {
  if (!getBaseCvId()) {
    localStorage.setItem('baseCv', id);
  }
};
