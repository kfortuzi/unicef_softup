import { DrivingLicense, Prisma } from '@prisma/client';
import { ResumeDto } from './dto/resume.dto';

export const prepareResumeBody = (
  userId: string,
  resume: ResumeDto,
): Prisma.resumesUncheckedCreateInput => {
  return {
    email: resume?.email || '',
    certificates: resume?.certificates?.length
      ? (resume?.certificates as unknown as Prisma.JsonObject)
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
    profilePicture: resume?.profilePicture || '',
    linkedinUrl: resume?.linkedinUrl || '',
    phoneNumber: resume?.phoneNumber || '',
    summary: resume?.summary || '',
    nationality: resume?.nationality || '',
    experiences: resume?.experiences?.length
      ? (resume.experiences as unknown as Prisma.JsonObject)
      : [],
    educations: resume?.educations?.length
      ? (resume.educations as unknown as Prisma.JsonObject)
      : [],
    volunteering: resume?.volunteering?.length
      ? (resume.volunteering as unknown as Prisma.JsonObject)
      : [],
    publications: resume?.publications?.length
      ? (resume.publications as unknown as Prisma.JsonObject)
      : [],
    languages: resume?.languages?.length
      ? (resume.languages as unknown as Prisma.JsonObject)
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
