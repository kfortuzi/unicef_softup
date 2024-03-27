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

export type PostJobRequest = {
  to: string;
  company: string;
  companyAddress: string;
  content: string;
};

export type PatchJobRequest = {
  id: string;
  userId: string;
  to: string;
  company: string;
  companyAddress: string;
  content: string;
};

export type GetJobRequest = {
  id: string;
};

export type GetJobResponse = BaseResponse;

export type GetJobsResponse = BaseResponse[];

export type PostJobResponse = BaseResponse;

export type PatchJobResponse = BaseResponse;
