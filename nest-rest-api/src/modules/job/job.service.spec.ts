import { Test, TestingModule } from '@nestjs/testing';
import { JobService } from './job.service';
import { JobRepository } from './job.repository';
import { JobType, EducationType } from '@prisma/client';

describe('JobsService', () => {
  let service: JobService;
  let jobRepository: JobRepository;

  const jobData = {
    id: 'cuid1234',
    referenceId: 'ref4567',
    title: 'Senior Software Developer',
    description:
      'We are looking for a Senior Software Developer to build and implement functional programs. You will work with other Developers and Product Managers throughout the software development life cycle.',
    address: '456 Tech Road, Silicon Valley, CA',
    location: 'Silicon Valley, CA',
    type: JobType.FullTime,
    contractDuration: 12,
    tags: 'Software, Developer, Senior, Full-time',
    company: 'Tech Innovations Inc.',
    vacantPositions: 2,
    companyLogo: 'https://example.com/logo.png',
    basicSkills: 'C++, Java, Python',
    communicationSkill: true,
    computerSkills: 'MS Office, Email',
    foreignLanguage: 'Spanish, French',
    experience: '5+ years in software development',
    skills: 'Problem solving, Teamwork, Agile methodologies',
    specializations: 'Software Engineering, Web Development',
    skillLines: 'Lead Generation, Sales',
    educationType: EducationType.Bachelor,
    paymentLevel: '$80,000 - $100,000',
    suitableForDisabilities: false,
    needDrivingLicense: true,
    createdAt: new Date('2023-01-01T00:00:00.000Z'),
  };

  beforeEach(async () => {
    const mockJobRepository = {
      findJobs: jest.fn(),
      getLatestJobsByTitle: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobService,
        { provide: JobRepository, useValue: mockJobRepository },
      ],
    }).compile();

    service = module.get<JobService>(JobService);
    jobRepository = module.get<JobRepository>(JobRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findJobs', () => {
    it('should call jobRepository.findMany with the provided parameters', async () => {
      const cursor = 'cursor';
      const take = 10;
      await service.findJobs(cursor, take);
      expect(jobRepository.findMany).toHaveBeenCalledWith(cursor, take);
    });
  });

  describe('getLatestJobsByTitle', () => {
    it('should return a message if no jobs are found', async () => {
      const jobTitle = 'Developer';
      jest
        .spyOn(jobRepository, 'getLatestJobsByTitle')
        .mockResolvedValueOnce([]);
      const result = await service.getLatestJobsByTitle(jobTitle);
      expect(result).toEqual('No jobs found.');
    });

    it('should return job titles if jobs are found', async () => {
      const jobTitle = 'Developer';
      jest
        .spyOn(jobRepository, 'getLatestJobsByTitle')
        .mockResolvedValueOnce([]);
      const result = await service.getLatestJobsByTitle('Developer');
      expect(result).toEqual(
        'Latest jobs related to "Developer": Frontend Developer, Backend Developer',
      );
    });
  });
});
