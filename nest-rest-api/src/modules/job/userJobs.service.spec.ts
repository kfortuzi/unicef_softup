import { Test, TestingModule } from '@nestjs/testing';
import { UserRecommendedJobsService } from './userJobs.service';
import { UserJobsRepository } from './userJobs.repository';
import { UserRecommendedJobsDTO } from './dto/user-jobs.dto';
import { JobType, EducationType } from '@prisma/client';

describe('UserRecommendedJobsService', () => {
  let service: UserRecommendedJobsService;
  let repository: UserJobsRepository;
  const jobData = {
    id: 'cjkld392jdklsjflks',
    referenceId: 'REF123456',
    date_start_notification: new Date('2024-02-01T00:00:00Z'),
    date_end_notification: new Date('2024-03-01T00:00:00Z'),
    title: 'Senior Software Engineer',
    description:
      'We are looking for a Senior Software Engineer with expertise in building scalable web applications.',
    address: '123 Tech Road, Silicon Valley, CA',
    location: 'Silicon Valley, CA',
    type: null,
    contractDuration: 12,
    tags: 'Software, Engineering, Web Development',
    company: 'Tech Innovations Inc.',
    vacantPositions: 3,
    companyLogo: 'https://example.com/logo.png',
    basicSkills: 'Programming, Debugging, System Design',
    communicationSkill: true,
    computerSkills: 'Linux, Git, Docker',
    foreignLanguage: 'Spanish, French',
    experience: '5+ years in software development',
    skills: 'Problem-solving, Team leadership',
    specializations: 'Backend Development, Microservices',
    skillLines: 'Java, Spring Boot, Kubernetes',
    educationType: null,
    paymentLevel: 'Senior',
    suitableForDisabilities: false,
    needDrivingLicense: true,
    createdAt: new Date('2024-02-18T12:00:00Z'),
    updatedAt: new Date('2024-02-19T12:00:00Z'),
    deletedAt: null,
    isUnvailable: false,
    user_recommended_jobs: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRecommendedJobsService, UserJobsRepository],
    })
      .overrideProvider(UserJobsRepository)
      .useValue({
        createUserRecommendedJob: jest.fn(),
        findJobsByUserId: jest.fn(),
      })
      .compile();

    service = module.get<UserRecommendedJobsService>(
      UserRecommendedJobsService,
    );
    repository = module.get<UserJobsRepository>(UserJobsRepository);
  });

  describe('recommendJob', () => {
    it('should successfully call createUserRecommendedJob on repository', async () => {
      const dto: UserRecommendedJobsDTO = { userId: '1', jobId: '123' };
      const spy = jest
        .spyOn(repository, 'createUserRecommendedJob')
        .mockResolvedValueOnce(dto);
      const result = await service.recommendJob(dto);
      expect(spy).toHaveBeenCalledWith(dto.userId, dto.jobId);
      expect(result).toEqual(dto);
    });
  });

  describe('getRecommendedJobsForUser', () => {
    it('should retrieve and return job recommendations for a user', async () => {
      const userId = '1';
      const expectedFormat = [
        {
          job: jobData,
          userId: userId,
          jobId: jobData.id,
        },
      ];
      const spy = jest
        .spyOn(repository, 'findJobsByUserId')
        .mockResolvedValueOnce(expectedFormat);
      const result = await service.getRecommendedJobsForUser(userId);
      expect(spy).toHaveBeenCalledWith(userId);
      expect(result).toEqual(
        expectedFormat.map(
          (recommendation: { job: any }) => recommendation.job,
        ),
      );
    });
  });
});
