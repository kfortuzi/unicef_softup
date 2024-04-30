export type BaseResponse = {
  id: string;
  userId: string;
  to: string;
  company: string;
  companyAddress: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
  referenceId?: string;
};

export type PostCoverLetterRequest = {
  to: string;
  company?: string;
  companyAddress?: string;
  content: string;
};

export type PatchCoverLetterRequest = {
  id: string;
  userId: string;
  to: string;
  company: string;
  companyAddress: string;
  content: string;
};

export type GetCoverLetterRequest = {
  id?: string;
};

export type PostCoverLetterForJobRequest = {
  jobId?: string;
};

export type DeleteCoverLetterRequest = {
  id?: string;
};

export type PostCoverLetterAskWizardRequest = {
  message: string;
  content?: string;
};

export type PostCoverLetterAskWizardResponse = {
  message: string;
};

export type GetCoverLetterAskWizardResponse = {
  message: string;
};

export type PostCoverLetterWizardRequest = {
  title: string;
  company: string;
  companyAddress: string;
  toPerson: string;
  motive: string;
  topic: string;
};

export type PostCoverLetterWizardResponse = BaseResponse;

export type PostCoverLetterForJobResponse = BaseResponse;

export type GetCoverLetterResponse = BaseResponse;

export type GetCoverLettersResponse = BaseResponse[];

export type PostCoverLetterResponse = BaseResponse;

export type PatchCoverLetterResponse = BaseResponse;
