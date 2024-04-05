export type BaseResponse = {
  id: string;
  title: string;
  description: string;
  address: string;
  location: string;
  type: string;
  tags: string;
  company: string;
  companyLogo: string;
  createdAt: Date;
  contractDuration: number;
  suitableForDisabilities: boolean;
  vacantPositions: number;
  basicSkills: string;
  communicationSkill: boolean;
  computerSkills: string;
  dateEnd: Date;
  dateStart: Date;
  deletedAt: Date;
  educationType: string;
  experience: string;
  foreignLanguage: string;
  isUnavailable: boolean;
  needDrivingLicense: boolean;
  paymentLevel: string;
  skillLines: string;
  skills: string;
  specializations: string;
  updatedAt: Date;
  referenceId: string;
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
  id?: string;
};

export type GetJobRequests = {
  take: number;
  cursor?: string;
};

export type PostJobTipsAndAdvicesRequest = {
  id?: string;
};

export type PostJobTipsAndAdvicesResponse = {
  tips: string;
  interviewQuestions: string;
};

export type GetRecommendedJobsResponse = BaseResponse[];

export type GetJobResponse = BaseResponse;

export type GetJobsResponse = BaseResponse[];

export type PostJobResponse = BaseResponse;

export type PatchJobResponse = BaseResponse;
