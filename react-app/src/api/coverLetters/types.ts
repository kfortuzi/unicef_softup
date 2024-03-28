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
};

export type PostCoverLetterRequest = {
  to: string;
  company: string;
  companyAddress: string;
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
  id: string;
};

export type PostCoverLetterForJobRequest = {
  jobId: string;
};

export type PostCoverLetterForJobResponse = BaseResponse;

export type GetCoverLetterResponse = BaseResponse;

export type GetCoverLettersResponse = BaseResponse[];

export type PostCoverLetterResponse = BaseResponse;

export type PatchCoverLetterResponse = BaseResponse;
