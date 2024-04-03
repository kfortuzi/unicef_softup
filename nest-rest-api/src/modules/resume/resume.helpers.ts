import { DrivingLicense, Prisma } from '@prisma/client';
import { ResumeDto } from './dto/resume.dto';

export const prepareResumeBody = (
  userId: string,
  resume: ResumeDto,
): Prisma.resumesUncheckedCreateInput => {
  return {
    email: resume?.email || '',
    certificates: resume?.certificates?.length
      ? JSON.stringify(resume?.certificates)
      : [],
    digitalSkills: resume?.digitalSkills || [],
    softSkills: resume?.softSkills || [],
    hobbies: resume?.hobbies || [],
    drivingLicense:
      isValid(resume?.drivingLicense) &&
      isValidDrivingLicense(resume?.drivingLicense)
        ? resume?.drivingLicense
        : undefined,
    location: resume?.location || '',
    firstName: resume?.firstName || '',
    lastName: resume?.lastName || '',
    profilePicture: resume?.profilePicture || undefined,
    linkedinUrl: resume?.linkedinUrl || '',
    phoneNumber: resume?.phoneNumber || '',
    summary: resume?.summary || '',
    nationality: resume?.nationality || '',
    experiences: resume?.experiences?.length
      ? JSON.stringify(resume.experiences)
      : [],
    educations: resume?.educations?.length
      ? JSON.stringify(resume.educations)
      : [],
    volunteering: resume?.volunteering?.length
      ? JSON.stringify(resume.volunteering)
      : [],
    publications: resume?.publications?.length
      ? JSON.stringify(resume.publications)
      : [],
    languages: resume?.languages?.length
      ? JSON.stringify(resume.languages)
      : [],
    userId,
  };
};

const isValid = (input: unknown) => {
  if (
    input === 'undefined' ||
    input === 'not provided' ||
    input === '*' ||
    input === '-'
  )
    return false;
  return !!input;
};

function isValidDrivingLicense(licence: string | undefined) {
  if (!licence) return false;
  return Object.values(DrivingLicense).includes(licence as DrivingLicense);
}
