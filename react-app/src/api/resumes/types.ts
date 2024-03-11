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

export type Certification = {
  name: string;
  receivedDate: string;
  expirationDate?: string;
};

export type Volunteering = {
  role: string;
  organization: string;
  icon?: string;
  startDate: string;
  endDate?: string;
};

export type Publication = {
  name: string;
  releaseDate: string;
  link?: string;
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
  certifications?: Certification[];
  volunteering?: Volunteering[];
  publications?: Publication[];
  drivingLicenses?: DrivingLicense[];
};

export type PatchResumeRequest = {
  id: string;
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
  certifications?: Certification[];
  volunteering?: Volunteering[];
  publications?: Publication[];
  drivingLicenses?: DrivingLicense[];
};

export type PatchResumeResponse = PostResumeRequest;

export type PostResumeResponse = PostResumeRequest;

export type GetResumeResponse = PostResumeRequest;

//#endregion
