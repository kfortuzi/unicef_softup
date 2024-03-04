//#region Resume

enum DrivingLicense {
  AM,
  A1,
  A2,
  A,
  B1,
  BE,
  C1,
  C1E,
  C,
  CE,
  D1,
  D1E,
  D,
  DE,
}

export type Education = {
  school: string;
  degree: string;
  fieldOfStudy?: string;
  startDate: string;
  endDate?: string;
  grade?: string;
  location?: string;
  description?: string;
};

export type WorkExperience = {
  title: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
};

export type Language = {
  name: string;
  readingLevel: string;
  writingLevel: string;
  speakingLevel: string;
};

export type Certificate = {
  name: string;
  organization: string;
  date: string;
  description?: string;
};

export type Volunteering = {
  organization?: string;
  title: string;
  imgUrl?: string;
  startDate: string;
  endDate?: string;
};

export type Publication = {
  name: string;
  date: string;
  description?: string;
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
  digitalSkills?: string;
  softSkills?: string;
  hobbies?: string;
  certificates?: Certificate[];
  volunteerings?: Volunteering[];
  publications?: Publication[];
  drivingLicenses?: DrivingLicense[];
};

export type PostResumeResponse = PostResumeRequest;

export type GetResumeResponse = PostResumeRequest;

//#endregion
