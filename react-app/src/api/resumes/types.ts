//#region Resume

export type Education = {
  title: string;
  type: string;
  location: string;
  startDate: string;
  endDate?: string;
};

export type WorkExperience = {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  responsibilities?: string;
};

export type Language = {
  name: string;
  reading: string;
  writing: string;
  speaking: string;
  isNative: boolean;
};

export type Certificate = {
  name: string;
  receivedDate: string;
  expirationDate?: string;
};

export type Volunteering = {
  role: string;
  organization: string;
  startDate: string;
  endDate?: string;
};

export type Publication = {
  name: string;
  releaseDate: string;
  link?: string;
};

type BaseResponse = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  nationality?: string;
  linkedinUrl?: string;
  location?: string;
  phoneNumber?: string;
  summary?: string;
  educations?: Education[];
  experiences?: WorkExperience[];
  languages?: Language[];
  digitalSkills?: string[];
  technicalSkills?: string[];
  softSkills?: string[];
  hobbies?: string[];
  certificates?: Certificate[];
  volunteering?: Volunteering[];
  publications?: Publication[];
  drivingLicences?: string[];
  referenceId?: boolean;
};

export type PostResumeRequest = {
  email: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  nationality?: string;
  linkedinUrl?: string;
  location?: string;
  phoneNumber?: string;
  summary?: string;
  educations?: Education[];
  experiences?: WorkExperience[];
  languages?: Language[];
  digitalSkills?: string[];
  technicalSkills?: string[];
  softSkills?: string[];
  hobbies?: string[];
  certificates?: Certificate[];
  volunteering?: Volunteering[];
  publications?: Publication[];
  drivingLicences?: string[];
};

export type PatchResumeRequest = {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  nationality?: string;
  linkedinUrl?: string;
  location?: string;
  phoneNumber?: string;
  summary?: string;
  educations?: Education[];
  experiences?: WorkExperience[];
  languages?: Language[];
  digitalSkills?: string[];
  softSkills?: string[];
  technicalSkills?: string[];
  hobbies?: string[];
  certificates?: Certificate[];
  volunteering?: Volunteering[];
  publications?: Publication[];
  drivingLicences?: string[];
};

export type GetResumeRequest = {
  id: string;
};

export type GetResumesRequest = null;

export type GetResumesResponse = BaseResponse[];

export type PatchResumeResponse = BaseResponse;

export type PostResumeResponse = PostResumeRequest;

export type GetResumeResponse = BaseResponse;

//#endregion
