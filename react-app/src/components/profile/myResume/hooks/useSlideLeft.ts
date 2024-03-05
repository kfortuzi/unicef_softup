const slideResumeLeft = (slideStatus: boolean): void => {
  const form = document.querySelector('.my-resume-container');
  if (slideStatus) {
    form?.classList.remove('slide-left');
  } else {
    form?.classList.add('slide-left');
  }
};

export default slideResumeLeft;
