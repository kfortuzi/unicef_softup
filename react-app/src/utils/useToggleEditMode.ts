import { useState } from 'react';

const useToggleEditMode = (initialState = false): [boolean, VoidFunction] => {
  const [isEditMode, setIsEditMode] = useState(initialState);
  const toggleEditMode = () => setIsEditMode((currentIsEdit) => !currentIsEdit);

  return [isEditMode, toggleEditMode];
};

export default useToggleEditMode;
